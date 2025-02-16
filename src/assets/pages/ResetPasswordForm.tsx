import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = (props:any) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [password, setPassword] = useState('');
  
  const handlePasswordReset = async () => {
    try {
      const res = await axios.patch(`http://127.0.0.1:8000/reset-password/${props.username}`, password);
      if (res.status === 200) {
        messageApi.open({
          type: 'success',
          content: res.data.message
        })
        setPassword('');
        navigate('/login');
      }
    } catch(error:any) {
      messageApi.open({
        type: 'error',
        content: error.response.data.error
      })
    }
  }
  
  return (
    <>
      {contextHolder}
      <input type="text" onChange={(e:any) => {setPassword(e.target.value)}} value={password}/>
      <button onClick={handlePasswordReset}>Reset Password</button>
    </>
  )
}

export default ResetPasswordForm;