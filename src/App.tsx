import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Dashboard from "./assets/pages/Dashboard";
import Home from "./assets/pages/Home";
import OTP from "./assets/pages/OTP";
import ForgetPasswordForm from "./assets/pages/ForgetPasswordForm";
import Err from "./assets/pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Navigational Components */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/otp" element={<OTP />} />
        <Route exact path="/forget-password" element={<ForgetPasswordForm />} />
        <Route exact path="*" element={<Err />} />
      </Routes>
    </Router>
  );
}

export default App;
