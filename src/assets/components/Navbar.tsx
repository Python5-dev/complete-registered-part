import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from 'antd';
import Register from "../pages/Register";
import Login from "../pages/Login";

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegModal, setShowRegModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const checkLoginStatus = () => {
    const token = localStorage.getItem('access token');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();

    window.addEventListener('login', checkLoginStatus);
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('login', checkLoginStatus);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access token')
    localStorage.removeItem('refresh token')
    localStorage.removeItem('username_or_email')
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <nav>
        {!isLoggedIn ? (
          <>

            <button onClick={() => setShowLoginModal(true)}>Login</button>
            <button onClick={() => setShowRegModal(true)}>Sign up</button>
          </>
        ) : (
          <>
          <Link to="/" className="dashboard">Home</Link>
          <Link to="/dashboard" className="dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
      <Modal open={showRegModal} onCancel={() => setShowRegModal(false)} width={400} footer={null}><Register onRegClose={setShowRegModal} onLoginClose={setShowLoginModal} /></Modal>
      <Modal open={showLoginModal} onCancel={() => setShowLoginModal(false)} width={400} footer={null}><Login onRegClose={setShowRegModal} onLoginClose={setShowLoginModal} /></Modal>
    </>
  );
}

export default Navbar;
