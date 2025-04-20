import { useState } from "react";
import FormFields from "./FormFields";
import { Modal, Select, message } from "antd";
import axios from "axios";

const Edit = ({ open, resource, onCancel, resourceList }:any) => {
  const [editFormData, setEditFormData] = useState({
    title: "",
    type: "",
    file: "",
  });
  const [selectedItem, setSelectedItem] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleEdit = async (e:any) => {
    e.preventDefault();
    if (!editFormData.title || !editFormData.type || !editFormData.file) {
      messageApi.open({
        type: 'warning',
        content: 'Please fill out all fields.'
      });
      return;
    }
    try {
      const formData = new FormData();
      formData.append("title", editFormData.title);
      formData.append("type", editFormData.type);
      formData.append("file", editFormData.file);
      const res = await axios.put(`http://127.0.0.1:8000/edit-${resource.toLowerCase()}/${selectedItem}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if(res.status===200) {
        const notification = `One ${resource} edited in your courses`;
        const resNotification = await axios.post("http://127.0.0.1:8000/add-notification/", {
          notification: notification
        });
        if(resNotification.status===201) {
          messageApi.open({
            type: "success",
            content: res.data.message,
          })
        }
      }
    } catch(err:any) {
      messageApi.open({
        type: "error",
        content: err.response?.data?.error || "Something went wrong"
      })
    }
    setEditFormData({
      title: "",
      type: "",
      file: "",
    });
  }

  return (
    <>
      { contextHolder }
      <Modal title={<span className='text-[#003366] text-2xl'>Edit {resource}</span>} open={open} onCancel={onCancel} onOk={handleEdit}>
        <FormFields formData={editFormData} setFormData={setEditFormData} />
        <Select
          className="w-full outline-none"
          onChange={(value:any) => setSelectedItem(value)}
          defaultValue={{ value: "BooksTitle", label: "Please select the book you want to edit" }}
          options={resourceList?.map((item: string, index: number) => ({
            key: index.toString(),
            value: item,
            label: item,
          }))}
        />
      </Modal>
    </>
  )
}

export default Edit;