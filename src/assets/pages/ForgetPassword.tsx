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
    <div className="h-screen flex items-center justify-center">
      {contextHolder}
      <div className="border-2 w-1/3 p-12 shadow-lg">
        <h1 className="text-[#003366]">Forget Password</h1>
        <form action="" className="mt-6">
          <label htmlFor="" className="text-[#383838]">
            <span className='text-red-600'>*</span>Email
          </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <button className="bg-[#003366] text-[#d2e8e3] rounded-lg p-2 w-full mt-5" onClick={resetPassword}>Forget Password</button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPasswordForm;