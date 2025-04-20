import { message, Modal, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { refreshAccessToken } from '../../utils/refreshAccessToken';

const TableComp = ({data, selectedRowKeys, setData, setSelectedRowKeys, searchUser, userStatus}:any) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [LogData, setLogData] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const[userLogData, setUserLogData] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
      filteredValue: [searchUser],
      onFilter: (value:any, record:any) => {
        return String(record.username).toLowerCase().includes(value.toLowerCase()) ||
        String(record.email).toLowerCase().includes(value.toLowerCase());
      }
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filteredValue: userStatus ? [userStatus] : null,
      onFilter: (value: string, record: any) => record.status === value,
      render: (status: string) => (
        <Tag color={status === 'active' ? 'blue' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      )
    },
    {
      title: 'Account Status',
      dataIndex: 'accountstatus',
      key: 'accountstatus',
      render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Log Activities',
      dataIndex: 'logactivities',
      key: 'logactivities',
      render: (text:any, record:any) => <div style={{ textAlign: 'center' }}><button className='text-blue-500 hover:text-blue-400' onClick={() => 
        {
          handleShowLogs(record.username)
        }}>{text}</button></div>,
    },
  ];

  const handleShowLogs = (username: string) => {
    // Filter LogData se us user ka entry doondho
    const entry = LogData.find((item:any) => item.username_or_email === username);
    // Agar time array hai to usko map karke row format mein lao
    const entryActivities = entry?.activities;
    console.log("entry:", entry);
    console.log("entry Activities: ", entryActivities);
    let timesArr: any[] = [];
    const raw = entry?.activities;
    if (typeof raw === "string") {
      const fixed = raw.replace(/'/g, '"');
      try {
        timesArr = JSON.parse(fixed);
      } catch (e) {
        console.error("JSON parse error after replace:", e, "fixed string:", fixed);
        timesArr = [];
      }
    } else if (Array.isArray(raw)) {
      timesArr = raw;
    }
    console.log("parsed timesArr:", timesArr);
  
  // 3) map to table rows
  const rows = timesArr.map((t:any, i:any) => ({ id: i + 1, login: t.login, logout: t.logout }));
  console.log("mapped rows:", rows);

  // 4) state update & modal open
  setUserLogData(rows);
  setIsModalOpen(true);
  };



  const requestDashboard = async (accessToken:any) => {
    return await axios.get('http://127.0.0.1:8000/dashboard/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
  }

  const toggleStatus = async (user:any) => {
    const resLog = await axios.get('http://127.0.0.1:8000/retrieve-log-activities/');
    console.log("statusActivities: ", resLog.data);
    for(const item of resLog.data) {
      if(item.username_or_email===user.username) {
        const lastActivities =item.activities[item.activities.length - 1];
        console.log("Last Activities: ", lastActivities);
        if(lastActivities?.login && lastActivities?.logout) {
          return "deactive"
        }
        else {
          return "active"
        }
        console.log(lastActivities.login)
      }
    }
  }
  
  const handleResponse = async (res: any) => {
    const users = await Promise.all(
      res.data.users.map(async (user: any, index: number) => {
        const status = await toggleStatus(user);
        return {
          ...user,
          id: index + 1,
          status: status || "deactive",
          logactivities: 'view Logs'
        };
      })
    );
  
    setData(users);
    messageApi.open({ type: "success", content: res.data.message });
  };

  const fetchUsersData = async () => {
    let accessToken = localStorage.getItem('access token');

    if (!accessToken) return navigate('/');

    try {
      const res = await requestDashboard(accessToken);
      if(res.status===200) {
        const resLog = await axios.get('http://127.0.0.1:8000/retrieve-log-activities/')
        console.log("activities: ", resLog.data)
        setLogData(resLog.data.map((logTimes:any, index:any) => ({
          ...logTimes,
          id: index + 1,
        })));
        handleResponse(res);
      }
    } catch (err: any) {
      if (err.response?.status !== 401) {
        return messageApi.open({
          type: "error",
          content: err?.response?.data?.error || "Something went wrong.",
        });
      }
  
      accessToken = await refreshAccessToken();
      if (!accessToken) return navigate('/');
  
      try {
        const res = await requestDashboard(accessToken);
        if(res.status===200) {
          const resLog = await axios.get('http://127.0.0.1:8000/retrieve-log-activities/')
          console.log(resLog.data)
          setLogData(resLog.data.map((logTimes:any, index:any) => ({
            ...logTimes,
            id: index + 1,
          })));
          handleResponse(res);
        }
      } catch (err: any) {
        messageApi.open({
          type: "error",
          content: err?.response?.data?.error || "Something went wrong.",
        });
      }
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleSelectChange = (newSelectedRowKeys:any) => {
    setSelectedRowKeys(newSelectedRowKeys);
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  }

  return (
    <>
      { contextHolder }
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="id"
        components={{
          header: {
            cell: (props:any) => (
              <th
                {...props}
                style={{ 
                  backgroundColor: '#003366', 
                  color: '#d2e8e3', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  ...props.style,
                }}
              />
            ),
          },
        }}
      />
      <Modal title={<span className='text-[#003366] text-2xl'>Log Activities</span>} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <Table rowKey="id" dataSource={userLogData} columns={[
          {
            title: 'ID',
            dataIndex: 'id', 
            key: 'id',
            render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
          },
          {
            title: 'Login Time',
            dataIndex: 'login',
            key: 'login',
            render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
          },
          {
            title: 'Logout Time',
            dataIndex: 'logout',
            key: 'logout',
            render: (text:any) => <div style={{ textAlign: 'center' }}>{text}</div>,
          },
        ]}
        components={{
          header: {
            cell: (props:any) => (
              <th
                {...props}
                style={{ 
                  backgroundColor: '#003366', 
                  color: '#d2e8e3', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  ...props.style,
                }}
              />
            ),
          },
        }}/>
      </Modal>
    </>
  )
}

export default TableComp;