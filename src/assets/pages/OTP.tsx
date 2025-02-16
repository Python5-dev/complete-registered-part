import { useState, useEffect } from "react";
import { Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const storedData = localStorage.getItem("registerData");
    if (!storedData) {
      messageApi.open({
        type: "error",
        content: "No registration data found! Please register again.",
      });
      navigate("/register");
    }
  }, [navigate, messageApi]);

  const handleOtpSubmit = async () => {
    const storedData = localStorage.getItem("registerData");
    const userData = storedData ? JSON.parse(storedData) : null;

    if (otp.length !== 8) {
      messageApi.open({
        type: "error",
        content: "OTP must be 8 digits long!",
      });
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/verify-otp/", {
        ...userData,
        otp,
      });
      
      if (res.status === 201) {
        messageApi.open({
          type: "success",
          content: "Registration Successful!",
        });
        localStorage.removeItem("registerData");
        navigate("/");
      }
    } catch (error:any) {
      messageApi.open({
        type: "error",
        content: error.response?.data?.error || "OTP verification failed",
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <h2>Enter OTP</h2>
      <Input
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
        maxLength={8}
        placeholder="Enter OTP"
        style={{ textAlign: "center", letterSpacing: "5px" }}
      />
      <button onClick={handleOtpSubmit}>Verify OTP</button>
    </div>
  );
};

export default OTP;