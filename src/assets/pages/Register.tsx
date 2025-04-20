import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { message, Modal } from "antd";
import axios from "axios";
import { registerSchema } from "../schemas";
import { useState } from 'react';
import OTP from './OTP';

const Register = ({onRegClose, onLoginClose}:any) => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, action) => {
      console.log(values)
      try {
        const response = await axios.post("http://127.0.0.1:8000/register/", values);
        if (response.status === 200) {
          onRegClose(false);
          localStorage.setItem("registerData", JSON.stringify(values));
          navigate("/otp");
        }
      } catch (error:any) {
        messageApi.open({
          type: "error",
          content: error.response?.data?.error || "Registration failed",
        })
      }
      action.resetForm();
    }
  });



  return (
    <>
      {contextHolder}
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-semibold text-[#003366] p-8">Register</h1>
            <div>
              <label><span className='text-red-600'>*</span>Username:</label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className='mt-1'
              />
              {errors.username && touched.username ? <span className="formError">{errors.username}</span> : null}
            </div>

            <div className="my-6">
              <label><span className='text-red-600'>*</span>Email:</label>
              <div className='flex'>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='mt-1'
                />
                <button type='button' onClick={() => setShowOtpModal(true)} className='bg-[#003366] hover:bg-[#0f6466] text-white py-2 px-5 transition-all duration-200 ease-in-out active:scale-90'>Verify</button>
              </div>
              {errors.email && touched.email ? <span className="formError">{errors.email}</span> : null}
            </div>

            <div className="my-6">
              <label><span className='text-red-600'>*</span>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='mt-1'
                />
              {errors.password && touched.password ? <span className="formError">{errors.password}</span> : null}
              </div>

              <div className="my-6">
                <label><span className='text-red-600'>*</span>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='mt-1'
                />
              {errors.confirmPassword && touched.confirmPassword ? <span className="formError">{errors.confirmPassword}</span> : null}
              </div>

            <button type="submit" className="formButton hover:bg-[#0f6466]">
              Register
            </button>
          </form>
          <div className='text-center text-[#003366] font-normal m-2'>
            Already have an account?&nbsp;
            <button className='font-black hover:underline' onClick={
              () => {
                onRegClose(false);
                onLoginClose(true);
                }
              }>Login
            </button>
          </div>
          <Modal open={showOtpModal} onCancel={() => setShowOtpModal(false)} footer={null}>
            <OTP />
          </Modal>
    </>
  );
}

export default Register;