import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Dashboard from "./assets/pages/Dashboard";
import Home from "./assets/pages/Home";
import OTP from "./assets/pages/OTP";
import ForgetPassword from "./assets/pages/ForgetPassword";
import { useState } from "react";
import 'animate.css';
import AboutIELTS from "./assets/pages/AboutIELTS";
import TipsForIELTS from "./assets/pages/registered/TipsForIELTS";
import Testing from "./assets/pages/registered/Testing";
import LearningMaterial from "./assets/pages/registered/LearningMaterial";

function App() {
  const location = useLocation();
  console.log(location.pathname)
  const [reference, setReference] = useState();
  const fetchReference = (ref:any) => {
    console.log("Home", ref.Home);
    console.log("AboutUs", ref.AboutUs);
    console.log("ContactUs", ref.ContactUs);
    setReference(ref);
  }

  return (
    <>
      { location.pathname !== '/forget-password' ? <Navbar fetchReference={fetchReference} /> : null }
      <Routes>
        <Route exact path="/" element={<Home reference={reference ?? {}} />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/about-ielts" element={<AboutIELTS />} />
        <Route exact path="/tips-for-ielts" element={<TipsForIELTS />} />
        <Route exact path="/tips-for-ielts" element={<TipsForIELTS />} />
        <Route exact path="/testing" element={<Testing />} />
        <Route exact path="/learning-material" element={<LearningMaterial />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/otp" element={<OTP />} />
      </Routes>
    </>
  );
}

export default App;