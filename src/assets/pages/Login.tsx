import { useFormik } from 'formik';
import { loginSchema } from "../schemas";
import axios from 'axios';
import { message, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({onRegClose, onLoginClose}:any) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const loginData = JSON.parse(localStorage.getItem("LoginData") || "{}") as {
    username_or_email?: string;
    password?: string;
  };

  const initialValues = {
    username_or_email: loginData.username_or_email ?? "",
    password: loginData.password ?? ""
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      console.log(values)
      try {
        const res = await axios.post("http://127.0.0.1:8000/login/", values);
        if(res.status === 200){
          if(isChecked) {
            localStorage.setItem("LoginData", JSON.stringify(values));
          }
          onLoginClose(false);
          localStorage.setItem("accessToken", res.data.access);
          localStorage.setItem("refreshToken", res.data.refresh);
          localStorage.setItem("username_or_email", values.username_or_email);
          messageApi.open({
            type: "success",
            content: res.data.message,
          })
          console.log(values.username_or_email)
          setTimeout(() => {
            window.dispatchEvent(new Event("login"));
            window.dispatchEvent(new Event("storage"));
            navigate("/");
          }, 0);
        }
      } catch (error:any) {
        messageApi.open({
          type: "error",
          content: error.response.data.error,
        })
      }
      action.resetForm();
    }
  });

  return (
    <>
      {contextHolder}
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-semibold text-[#003366] p-8">Login</h1>

            <div>
              <label htmlFor="usernameOrEmail">
                <span className='text-red-600'>*</span>Username or Email
              </label>
              <input
                type="text"
                name="username_or_email"
                value={values.username_or_email}
                onChange={handleChange}
                onBlur={handleBlur}
                className='mt-1'
              />
              {errors.username_or_email && touched.username_or_email ? <span className="formError">{errors.username_or_email}</span> : null}
            </div>

            <div className="my-6">
              <label htmlFor="password">
                <span className='text-red-600'>*</span>Password
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className='mt-1'
              />
              {errors.password && touched.password ? <span className="formError">{errors.password}</span> : null}
              <div className='flex justify-between font-normal'>
                <Checkbox className='text-[#003366]' onChange={(e:any) => {
                  const checked = e.target.checked;
                  console.log(checked);
                  setIsChecked(checked);
                }}>Remember Me</Checkbox>
                <button type="button" className='text-[#003366] hover:underline' onClick={() => {
                  onLoginClose(false);
                  navigate("/forget-password")
                  }
                }>Forget Password</button>
              </div>
            </div>

            <button type="submit" className="formButton hover:bg-[#0f6466]">
              Login
            </button>
          </form>
          <div className='text-center text-[#003366] font-normal m-2'>
            Don't have an account?&nbsp;
            <button className='font-black hover:underline' onClick={
              () => {
                onLoginClose(false);
                onRegClose(true);
                }
              }>Sign up
            </button>
          </div>
    </>
  );
}

export default Login;
