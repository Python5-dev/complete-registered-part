import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const resetPassword = async () => {
    try {
      console.log(email)
      const res = await axios.post("http://127.0.0.1:8000/forgot-password/", {
        email: email,
      });
      console.log(res)
      if (res.status === 200) {
        messageApi.open({
          type: 'success',
          content: res.data.message
        })
        setEmail("");
      }
    } catch (error:any) {
      console.log("error")
    }
  }
  return (
    <>
      {contextHolder}
      <h1>Forget Password</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
      <button onClick={resetPassword}>Send Email</button>
    </>
  )
}

export default ForgetPasswordForm;