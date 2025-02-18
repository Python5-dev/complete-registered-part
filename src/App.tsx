import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Dashboard from "./assets/pages/Dashboard";
import Home from "./assets/pages/Home";
import OTP from "./assets/pages/OTP";
import ForgetPassword from "./assets/pages/ForgetPassword";

function App() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      { location.pathname !== '/forget-password' ? <Navbar /> : null }
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/otp" element={<OTP />} />
      </Routes>
    </>
  );
}

export default App;