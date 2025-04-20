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
import LearningPage from "./assets/pages/LearningPage";
import Listening from "./assets/pages/LearningPage/Listening";
import Reading from "./assets/pages/LearningPage/Reading";
import Writing from "./assets/pages/LearningPage/Writing";
import Speaking from "./assets/pages/LearningPage/Speaking";
import MockTests from "./assets/pages/LearningPage/MockTests";
import IELTSOverview from "./assets/pages/LearningPage/IELTSOverview";
import ManageResources from "./assets/pages/ManageResources";
import D from "./assets/components/admin/dashboard/d";
import Users from "./assets/components/admin/dashboard/users";
import Tests from "./assets/components/admin/dashboard/tests";
import Settings from "./assets/components/admin/dashboard/settings";
import Resources from "./assets/components/admin/dashboard/resources";
import Profile from "./assets/pages/Profile";
import ListeningTest2 from "./assets/pages/tests/ListeningTests/ListeningTest2";
import ReadingTest1 from "./assets/pages/tests/ReadingTests/Test1";

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
      {/* { location.pathname !== '/forget-password' ? <Navbar fetchReference={fetchReference} /> : null } */}
      <Routes>
        <Route exact path="/" element={<Home reference={reference ?? {}} />}>
          <Route exact path="/d" element={<D />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/tests" element={<Tests />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/resources" element={<Resources />} />
        </Route>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/about-ielts" element={<AboutIELTS />} />
        <Route exact path="/tips-for-ielts" element={<TipsForIELTS />} />
        <Route exact path="/tips-for-ielts" element={<TipsForIELTS />} />
        <Route exact path="/testing" element={<Testing />} />
        <Route exact path="/learning-material" element={<LearningMaterial />} />
        <Route exact path="/learning-page" element={<LearningPage />} />
        <Route exact path="/listening" element={<Listening />} />
        <Route exact path="/reading" element={<Reading />} />
        <Route exact path="/writing" element={<Writing />} />
        <Route exact path="/speaking" element={<Speaking />} />
        <Route exact path="/mock-tests" element={<MockTests />} />
        <Route exact path="/ielts-overview" element={<IELTSOverview />} />
        <Route exact path="/manage-resources" element={<ManageResources />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/otp" element={<OTP />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/ielts-listening" element={<ListeningTest2 />} />
        <Route exact path="/ielts-reading" element={<ReadingTest1 />} />
      </Routes>
    </>
  );
}

export default App;