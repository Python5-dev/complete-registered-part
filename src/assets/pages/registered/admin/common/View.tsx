import { Dropdown, Input, Modal } from "antd";
import TableComp from "./TableComp";
import axios from "axios";
import { useEffect, useState } from "react";
import { DownOutlined } from '@ant-design/icons';

const View = ({open, onCancel, resource, setBooksList, setTotalBooks }:any) => {
  const [data, setData] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const [bookType, setBookType] = useState("");

  const fetchData = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/retrieve-${resource.toLowerCase()}/`);
    setData(res.data);
    const booksList = res.data.map((item: any) => item.title);
    setBooksList(booksList);
    console.log(res.data.length);
    setTotalBooks(res.data.length);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const items = [
    {
      key: '1',
      label: (
        <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => {
          setBookType("Listening");
        }}>Listening</button>
      ),
    },
    {
      key: '2',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => {
            setBookType("Speaking");
          }}>Speaking</button>
      ),
    },
    {
      key: '3',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => {
            setBookType("Reading");
          }}>Reading</button>
      ),
    },
    {
      key: '4',
      label: (
          <button className="hover:bg-[#003366] hover:text-[#d2e8e3] w-full px-5 py-2" onClick={() => {
            setBookType("Writing")
          }}>Writing</button>
      ),
    },
  ];

  return (
    <>
      <Modal title={<span className='text-[#003366] text-2xl'>Show All {resource}s</span>} open={open} onCancel={onCancel} footer={null} width="auto">
      <div className="flex gap-2 justify-end items-center mb-2 mr-2">
        <Input.Search placeholder="Search here..." enterButton={<button className="bg-[#003366] text-white h-[32.2px] px-4 rounded-r-md">Search</button>} value={searchBook} onChange={(e) => {
          setSearchBook(e.target.value);
        }} className="w-72"/>
        <Dropdown menu={{ items }} trigger={['click']}>
          <button className='bg-[#003366] hover:bg-[#275180] text-[#d2e8e3] rounded-lg py-[6px] px-8 gap-1 flex items-center'>
            Book Type
            <DownOutlined />
          </button>
        </Dropdown>
      </div>
        <TableComp data={data} searchBook={searchBook} bookType={bookType} />
      </Modal>
    </>
  )
}

export default View;