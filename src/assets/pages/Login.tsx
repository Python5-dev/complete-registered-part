import { useFormik } from 'formik';
import { loginSchema } from "../schemas";
import axios from 'axios';
import { message, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const domain="dev-u2q8ttozips0ckyh.us.auth0.com"
const clientId="I4BAsNgy2juDb1UmYus5ANdc7JB6ZXvV"
const redirectUri = "http://localhost:5173"

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
          const currentTime = formatDateCustom(new Date())
          console.log("Sending:", {
            username_or_email: values.username_or_email,
            activities: {
              login: currentTime,
            }
          });
          const resTime = await axios.post("http://127.0.0.1:8000/log-activities/", {
            username_or_email: values.username_or_email,
            activities: {
              login: currentTime,
            }
          });
          if(resTime.status === 201) {
            console.log(currentTime);
            if(isChecked) {
              localStorage.setItem("LoginData", JSON.stringify(values));
            }
            onLoginClose(false);
            localStorage.setItem("access token", res.data.access);
            localStorage.setItem("refresh token", res.data.refresh);
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

  function formatDateCustom(date:any) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const hourStr = String(hours).padStart(2, '0');
  
    return `${day}-${month}-${year} ${hourStr}:${minutes}:${seconds} ${ampm}`;
  }

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (!hash) return;

  //   const params = new URLSearchParams(hash.replace("#", "?"));
  //   const accessToken = params.get("access_token");
  //   if (accessToken) {
  //     axios
  //       .post("http://localhost:8000/api/social-login/", { access_token: accessToken })
  //       .then((res) => {
  //         localStorage.setItem("access", res.data.access);
  //         localStorage.setItem("refresh", res.data.refresh);
  //         onLoginClose(false);
  //         window.history.replaceState({}, document.title, "/");
  //         navigate("/");
  //       })
  //       .catch(() => {
  //         window.history.replaceState({}, document.title, "/login?error");
  //       });
  //   }
  // }, [navigate, onLoginClose]);

  // const loginWithGoogle = () => {
  //   console.log("Domain: ", domain)
  //   console.log("ClientID", clientId)
  //   window.location.href = `https://${domain}/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&connection=google-oauth2`;
  // };

  // const loginWithFacebook = () => {
  //   window.location.href = `https://${domain}/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&connection=facebook`;
  // };
  
  // const loginWithGithub = () => {
  //   window.location.href = `https://${domain}/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&connection=github`;
  // };



  return (
    <>
      {contextHolder}
          <form onSubmit={handleSubmit}>
            <h2 className="text-center font-semibold text-[#003366] p-0">Login</h2>
            <div className='flex justify-center pb-10 gap-2'>
              <button type='button'><AiFillGoogleCircle className='size-5'/></button>
              <button type='button'><FaFacebook className='size-5' /></button>
              <button type='button'><FaGithub className='size-5'/></button>
            </div>
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
                <button type="button" className='text-[#003366]' onClick={() => {
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
            <button className='underline' onClick={
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