import { message, Upload } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import Dash from '../components/admin/dashboard/Dashboard';

const getBase64 = (img:any, callback:(url:string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img)
}

const Dashboard = () => {
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState<string>("");
  const username_or_email = localStorage.getItem("username_or_email");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  
  const handleChange = (info:any) => {
    getBase64(info.file.originFileObj, (url) => {
      setImageUrl(url);
    });
  }
  
  const handleButtonClick = async () => {
    if (!username_or_email || !imageUrl) {
      messageApi.open({
        type: "error",
        content: "Please provide both username and image.",
      });
      return;
    }
    console.log("Sending data...");

    try {
      const formData = new FormData();

      // Decode the base64 image and extract MIME type
      const byteString = atob(imageUrl.split(",")[1]);
      const mimeString = imageUrl.split(";")[0].split(":")[1];
      const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

      // Validate MIME type
      if (!allowedMimeTypes.includes(mimeString)) {
        console.error("Unsupported file type:", mimeString);
        messageApi.open({
          type: "error",
          content: "Unsupported image format. Allowed formats: jpg, png, webp.",
        });
        return;
      }

      // Convert base64 string to byte array
      const byteNumbers = new Array(byteString.length).fill(null).map((_, i) => byteString.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeString });

      // Append fields to FormData
      formData.append("username", username_or_email);
      formData.append("image", blob, `image.${mimeString.split("/")[1]}`);

      const res = await axios.post(`http://127.0.0.1:8000/check-and-update-profile/${username_or_email}/`, formData);

      if (res.status === 200) {
        messageApi.open({
          type: "success",
          content: res.data.message,
        });
      }

      if (res.status === 201) {
        messageApi.open({
          type: "success",
          content: res.data.message,
        });
      }

    } catch (error:any) {
      console.error("Error:", error?.response ? error.response.data : error.message);
      messageApi.open({
        type: "error",
        content: error?.response?.data?.error || "Unexpected Error",
      });
    }
  };

  const removeProfile = async () => {
    try {
      console.log("sad")
      const res = await axios.delete(`http://127.0.0.1:8000/profile/delete/${username_or_email}/`);
      if (res.status === 200) {
        setImageUrl("");
        messageApi.open({
          type: 'success',
          content: res.data.message
        })
      }
    } catch (error:any) {
      messageApi.open({
        type: 'error',
        content: error.response.data.error
      });
    }
  }

  const changePassword = async (e:any, password:any) => {
    e.preventDefault()
    console.log("wer")
    try {
      console.log("FDSf")
      console.log(password)
      const res = await axios.post(`http://127.0.0.1:8000/reset-password/${username_or_email}/`, {password: password});
      console.log(password)

      console.log(res);
      if (res.status === 200) {
        messageApi.open({
          type: 'success',
          content: res.data.message
        })
      }
    } catch(error:any) {
      console.log("error")
    }
  }

  
  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem("access token");
      const refreshToken = localStorage.getItem("refresh token");
      const res = await axios.post("http://127.0.0.1:8000/dashboard/", refreshToken, {
        headers: {
          "authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        }
      });
      console.log("response: ", res);
      if (username_or_email === 'admin' || username_or_email === 'admin@gmail.com') {
        console.log(res.data.users);
        const users = res.data.users.map((user: any, index: number) => ({
          ...user,
          id: index + 1,
        }));
        console.log("objects: ", users);
      } else {
        console.log(res.data);
        if(res.data.status === 200) {
          console.log("hk")
          const image = res.data.Response.image.replace("testserver", "localhost:8000")
          console.log("image: ", image);
          console.log(image)
          setImageUrl(image);
          messageApi.open({
            type: "success",
            content: "Successfull"
          })
        }
        else {
          console.log(res.data.error)
        }
        setEmail(res.data.email)
        setUsername(res.data.username)
      }
    } catch (error:any) {
      console.error('Error fetching data:', error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {contextHolder}
      {username_or_email === 'admin' || username_or_email === 'admin@gmail.com' ? (
        <>
        <Dash />
        </>
      ) : (
        <>
          <div className='flex flex-col items-center my-5'>
          <h1>{username}</h1>
          <h1>{email}</h1>
          <Upload
            name="avatar"
            listType="picture-circle"
            showUploadList={false}
            onChange={handleChange}
          >
  <div
    className="parent-container"
    style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {imageUrl ? (
      <img
        src={imageUrl}
        alt="avatar"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%'
        }}
      />
    ) : (
      <UserOutlined
        className="w-full h-full"
        style={{
          fontSize: '72px',
          color: '#8c8c8c',
          borderRadius: '50%'
        }}
      />
    )}
  </div>
          </Upload>
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#003366] hover:bg-[#0f6466] text-[#d2e8e3] rounded-lg py-1 px-5 m-1 shadow-2xl transition-all duration-200 ease-in-out active:scale-90' onClick={handleButtonClick}>Edit Profile</button>
            <button className='bg-[#003366] hover:bg-[#0f6466] text-[#d2e8e3] rounded-lg py-1 px-5 m-1 shadow-2xl transition-all duration-200 ease-in-out active:scale-90' onClick={removeProfile}>Remove Profile</button>
          </div>
          <form action="">
          <input type="text" onChange={(e) => setPassword(e.target.value)}/>
      <button className='bg-[#003366] hover:bg-[#0f6466] text-[#d2e8e3] rounded-lg py-1 px-5 m-1 shadow-2xl transition-all duration-200 ease-in-out active:scale-90' onClick={(e:any) => changePassword(e, password)}>Change Password</button>
          </form>
        </>
      )}
    </>
  );
}

export default Dashboard;