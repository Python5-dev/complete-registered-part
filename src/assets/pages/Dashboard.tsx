import { message, Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ColumnsType } from 'antd/es/table';
import { ExclamationCircleFilled } from '@ant-design/icons';

interface DataType {
  id: number;
  username: string;
  email: string;
  password: string;
}

const Dashboard = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState([]);
  const showDeleteConfirm = (record:any) => {
    Modal.confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      cancelText: 'No',
      okButtonProps: {
        style: {backgroundColor: '#2c3532', color: '#d2e8e3', outline: 'none', border: 'none'}
      },
      cancelButtonProps: {
        className: 'hover:text-[#2c3532] hover:border-[#2c3532]',
      },
    
      async onOk() {
        const res = await axios.delete(`http://127.0.0.1:8000/dashboard/user/delete/${record.username}/`)
        console.log(res)
        if (res.status === 200) {
          messageApi.open({
            type: 'success',
            content: res.data.message
          })
        }
      },
    });
  };
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      onHeaderCell: () => ({
        style: { backgroundColor: '#2c3532', color: '#d2e8e3', fontWeight: 'bold', textAlign: 'center' },
      }),
      render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'UserName',
      dataIndex: 'username',
      key: 'username',
      onHeaderCell: () => ({
        style: { backgroundColor: '#2c3532', color: '#d2e8e3', fontWeight: 'bold', textAlign: 'center' },
      }),
      render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      onHeaderCell: () => ({
        style: { backgroundColor: '#2c3532', color: '#d2e8e3', fontWeight: 'bold', textAlign: 'center' },
      }),
      render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
      onHeaderCell: () => ({
        style: { backgroundColor: '#2c3532', color: '#d2e8e3', fontWeight: 'bold', textAlign: 'center' },
      }),
      render: (text) => <div style={{ textAlign: 'center' }}>{text}</div>,
    },
    {
      title: 'Action',
      key: 'action',
      onHeaderCell: () => ({
        style: { backgroundColor: '#2c3532', color: '#d2e8e3', fontWeight: 'bold', textAlign: 'center' },
      }),
      render: (_, record) => (
        <div className='text-center text-blue-800'><a onClick={() => showDeleteConfirm(record)}>Delete</a></div>
      )
    }
  ]
  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem("access token");
      const refreshToken = localStorage.getItem("refresh token");
      const res = await axios.post("http://127.0.0.1:8000/dashboard/", refreshToken, {
        headers: {
          "authorization": accessToken
        }
      });
      console.log(res.data.users);
      const users = res.data.users.map((user: any, index: number) => ({
        ...user,
        id: index + 1,
      }));
      setData(users);
    } catch (error:any) {
      console.error('Error fetching data:', error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {contextHolder}
      <h1>Dashboard</h1>
      <h4 className='font-bold text-center'>All Registered Users</h4>
      <Table columns={columns} dataSource={data} rowKey="id"/>
    </>
  );
}

export default Dashboard;
