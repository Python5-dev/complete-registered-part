import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Dropdown, Modal } from 'antd';
import type { MenuProps } from 'antd';
import Register from "../pages/Register";
import Login from "../pages/Login";
import { TbBellRingingFilled } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";

function Navbar({ fetchReference }:any) {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegModal, setShowRegModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const Home = useRef(null);
  const AboutUs = useRef(null);
  const ContactUs = useRef(null);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('access token');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener('login', checkLoginStatus);
    window.addEventListener('storage', checkLoginStatus);
    fetchReference({
      "Home": Home,
      "AboutUs": AboutUs,
      "ContactUs":ContactUs
    });
    return () => {
      window.removeEventListener('login', checkLoginStatus);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = async () => {
    const username_or_email = localStorage.getItem("username_or_email");
    const currentTime = formatDateCustom(new Date())
    const resTime = await axios.post("http://127.0.0.1:8000/log-activities/", {
      username_or_email: username_or_email,
      activities: {
        logout: currentTime,
      }
    });
    if(resTime.status===201) {
      ["access token", "refresh token", "username_or_email"].forEach(item =>
        localStorage.removeItem(item)
      );
  
      window.dispatchEvent(new Event("storage"));
      setIsLoggedIn(false);
      navigate("/");
    }

  }

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

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p>Why Take IELTS</p>
      ),
    },
    {
      key: '2',
      label: (
        <p>
          Types of IELTS
        </p>
      ),
    },
    {
      key: '3',
      label: (
        <p>
          IELTS Test Format
        </p>
      ),
    },
  ];

  const scrollHandler = (ref:any) => {
    fetchReference({
      "Home": Home,
      "AboutUs": AboutUs,
      "ContactUs":ContactUs
    });
    window.scrollTo({top: ref.current?.offsetTop, behavior: "smooth"})
  }

  const testItems:MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/ielts-listening" className="dashboard">IELTS Listening Tests</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/ielts-reading" className="dashboard">IELTS Reading Tests</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to="/ielts-writing" className="dashboard">IELTS Writing Tests</Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link to="/ielts-speaking" className="dashboard">IELTS Speaking Tests</Link>
      ),
    },
  ];

  return (
    <>
      {/* <div className="bg-[#003366] rotate-90 top-[400px] -left-[125px] rounded-ss-2xl rounded-tr-2xl fixed z-20">
        <button onClick={() => scrollHandler(Home)} className="px-5 py-2 text-white hover:rounded-ss-2xl hover:bg-[#1a4473]">Home</button>
        <button onClick={() => scrollHandler(AboutUs)} className="px-5 py-2 text-white hover:bg-[#1a4473]">About Us</button>
        <button onClick={() => scrollHandler(ContactUs)} className="px-5 py-2 text-white hover:rounded-se-2xl hover:bg-[#1a4473]">Contact Us</button>
      </div> */}
      <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-white/70">
        {!isLoggedIn ? (
          <>
            <div className="flex justify-end text-xs font-bold">
              <button onClick={() => setShowRegModal(true)} className="hover:underline">Register</button>
              <div className="rounded-s-full bg-[#003366] text-white pl-2 pr-10">
                <FaCircleUser className="inline-block size-6"/>
                <button onClick={() => setShowLoginModal(true)} className="text-white hover:underline">Login</button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex">
            <img src="finalLogo.png" alt="" className="h-20"/>
          <div className="flex justify-between items-center w-full">
            <div className="flex-1 flex justify-center space-x-4">
              <Link to="/" className="dashboard">Home</Link>
              <Dropdown menu={{ items: testItems }}>
                <span className='dashboard'>
                  Tests
                  <DownOutlined />
                </span>
              </Dropdown>
              <Link to="/about-ielts" className="dashboard">About IELTS</Link>
              <Link to="/tips-for-ielts" className="dashboard">TipsForIELTS</Link>
              <Link to="/learning-page" className="dashboard">Learning Page</Link>
              <Link to="/learning-material" className="dashboard">Learning Materials</Link>
              {/* <Link to="/manage-resources" className="dashboard">Manage Resources</Link>
              <Link to="/tests" className="dashboard">Manage Tests</Link>
              <Link to="/users" className="dashboard">Manage Users</Link> */}
              <Link to="/dashboard" className="dashboard">Dashboard</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={handleLogout}>Logout</button>
              {
                localStorage.getItem("username_or_email") !== "admin" ?
                  <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" className="mr-5 cursor-pointer">
                    <Badge count={5} size="small">
                      <TbBellRingingFilled className="inline text-[#d2e8e3] size-5"/>
                    </Badge>
                  </Dropdown>
                : null
              }
            </div>
          </div>
          </div>
        )}
      </nav>
      <Modal open={showRegModal} onCancel={() => setShowRegModal(false)} width={400} footer={null}>
        <Register onRegClose={setShowRegModal} onLoginClose={setShowLoginModal} />
      </Modal>
      <Modal open={showLoginModal} onCancel={() => setShowLoginModal(false)} width={400} footer={null}>
        <Login onRegClose={setShowRegModal} onLoginClose={setShowLoginModal} />
      </Modal>
    </>
  );
}

export default Navbar;