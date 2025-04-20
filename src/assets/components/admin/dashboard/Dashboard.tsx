import { message, Input, Dropdown } from "antd";
import axios from "axios";
import { useState } from "react";
import TableComp from "./TableComp";
import { DownOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [searchUser, setSearchUser] = useState("");
  const [userStatus, setUserStatus] = useState("");

  const handleDelete = () => {
    selectedRowKeys.map((id:any) => {
      data.map(async (user:any) => {
        if(id == user.id) {
          const res = await axios.delete(`http://127.0.0.1:8000/dashboard/user/delete/${user.username}/`);
          if(res.status === 200) {
            messageApi.open({
              type: "success",
              content: res.data.message,
            })
          }
        }
      })
    });
      
    const filteredData = data.filter((row:any) => {
      return !selectedRowKeys.includes(row.id);
    });

  
    const users:any = filteredData.map((user:any, index:any) => ({ ...user, id: index + 1 }));

    setData(users);
  }

  const items = [
    {
      key: '1',
      label: (
        <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => setUserStatus("active")}>Active Users</button>
      ),
    },
    {
      key: '2',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => setUserStatus("deactive")}>Deactive Users</button>
      ),
    },
    {
      key: '3',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => setUserStatus("deactive")}>Blocked Users</button>
      ),
    },
    {
      key: '4',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => setUserStatus("deactive")}>UnBlocked Users</button>
      ),
    },
    {
      key: '5',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => setUserStatus("")}>All Users</button>
      ),
    },
  ];

  return (
    <div className="px-2 py-5">
      { contextHolder }
      <div className='flex gap-2 justify-end items-center mb-2 mr-2'>
        <Input.Search placeholder="Search here..." enterButton={<button className="bg-[#003366] text-white h-[32.2px] px-4 rounded-r-md">Search</button>} value={searchUser} onChange={(e) => {
          setSearchUser(e.target.value);
        }} className="w-72"/>
        <button onClick={handleDelete} className='bg-[#003366] hover:bg-[#275180] text-[#d2e8e3] rounded-lg py-[6px] px-8'>Delete</button>
        <Dropdown menu={{ items }} trigger={['click']}>
          <button className='bg-[#003366] hover:bg-[#275180] text-[#d2e8e3] rounded-lg py-[6px] px-8 gap-1 flex items-center'>
            Users
            <DownOutlined />
          </button>
        </Dropdown>
      </div>
      <TableComp data={data} selectedRowKeys={selectedRowKeys} setData={setData} setSelectedRowKeys={setSelectedRowKeys} searchUser={searchUser} userStatus={userStatus} />
    </div>
  )
}

export default Dashboard;