import { Card } from 'antd';
import { useState } from "react";
import Delete from "../admin/common/Delete";
import View from '../admin/common/View';
import Add from "../admin/common/Add"
import Edit from "../admin/common/Edit";

const ManageBooks = () => {
  const [activeModal , setActiveModal] = useState("");
  const [booksList, setBooksList] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);

  const handleCancel = () => setActiveModal("");
  
  return (
    <>
      <Card title={<span className='text-[#003366] text-2xl'>Books</span>} className='shadow-2xl w-96 border-4 border-[#003366] '>
        <h1 className='text-[#003366]'>{totalBooks}</h1>
        <div className='flex justify-end gap-1'>
          <button onClick={() => setActiveModal("add")} className='bg-blue-500 hover:bg-blue-400 text-white px-5 py-1 rounded-lg'>Add</button>
          <button onClick={() => setActiveModal("view")} className='bg-yellow-500 hover:bg-yellow-400 text-white px-5 py-1 rounded-lg'>Show</button>
          <button onClick={() => setActiveModal("edit")} className='bg-green-500 hover:bg-green-400 text-white px-5 py-1 rounded-lg'>Edit</button>
          <button onClick={() => setActiveModal("delete")} className='bg-red-500 hover:bg-red-400 text-white px-5 py-1 rounded-lg'>Delete</button>
        </div>
      </Card>
      <Add
        open={activeModal === "add"}
        onCancel={handleCancel}
        resource="Book"
      />
      <View
        open={activeModal === "view"}
        onCancel={handleCancel}
        resource="Book"
        setBooksList={setBooksList}
        setTotalBooks={setTotalBooks}
      />
      <Edit
        open={activeModal === "edit"}
        resource="Book"
        onCancel={handleCancel}
        booksList={booksList}
      />
      <Delete
        open={activeModal === "delete"}
        onCancel={handleCancel}
        resource="Book"
        resourceList={booksList}
      />
    </>
  )
}

export default ManageBooks;