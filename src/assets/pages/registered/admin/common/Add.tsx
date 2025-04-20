import { message, Modal } from "antd";
import { useState } from "react";
import FormFields from "./FormFields";
import axios from "axios";

const Add = ({open, onCancel, resource}:any) => {
  const [addFormData, setAddFormData] = useState({
    title: "",
    type: "",
    file: "",
  });
  const [messageApi, contextHolder] = message.useMessage();

  const handleAdd = async (e:any) => {
    e.preventDefault();
    if (!addFormData.title || !addFormData.type || !addFormData.file) {
      messageApi.open({
        type: 'warning',
        content: 'Please fill out all fields.'
      });
      return;
    }
    try {
      const formData = new FormData();
      formData.append("title", addFormData.title);
      formData.append("type", addFormData.type);
      formData.append("file", addFormData.file);
      const res = await axios.post(`http://127.0.0.1:8000/add-${resource.toLowerCase()}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if(res.status===201) {
        const notification = `One ${resource} added in your courses` 
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
    setAddFormData({
      title: "",
      type: "",
      file: "",
    });
  }

  return (
    <>
      { contextHolder }
      <Modal title={<span className='text-[#003366] text-2xl'>Add {resource}</span>} open={open} onOk={handleAdd} onCancel={onCancel}>
        <FormFields formData={addFormData} setFormData={setAddFormData} />
      </Modal>
    </>
  )
}

export default Add;