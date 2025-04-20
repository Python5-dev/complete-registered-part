import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FaClipboardCheck } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path:any) => location.pathname === path;

  return (
    <div className="grid h-screen">
        {/* <div className="row-span-2 flex flex-col justify-between items-center pb-20 border-r-2">
          <img src="finalLogo.png" alt="Logo" className="pr-8" />
          <div className=" space-y-6">
            <div className={`flex gap-3 justify-center  border-2 rounded-full items-center p-2 ${isActive('/d') ? "bg-[#003366] text-[#f5f6f8]": "text-[#003366] border-[#003366]"}`}>
              <MdDashboard />
              <button onClick={() => navigate("/d")}>Dashboard</button>
            </div>
            <div className={`flex gap-3 justify-center  border-2 rounded-full items-center p-2 ${isActive('/users') ? "bg-[#003366] text-[#f5f6f8]": "text-[#003366] border-[#003366]"}`}>
              <FaUsers />
              <button onClick={() => navigate("/users")}>Manage Users</button>
            </div>
            <div className={`flex gap-3 justify-center  border-2 rounded-full items-center p-2 ${isActive('/resources') ? "bg-[#003366] text-[#f5f6f8]": "text-[#003366] border-[#003366]"}`}>
              <GrResources />
              <button onClick={() => navigate("/resources")}>Manage Resources</button>
            </div>
            <div className={`flex gap-3 justify-center  border-2 rounded-full items-center p-2 ${isActive('/tests') ? "bg-[#003366] text-[#f5f6f8]": "text-[#003366] border-[#003366]"}`}>
              <FaClipboardCheck />
              <button onClick={() => navigate("/tests")}>Manage Tests</button>
            </div>
            <div className={`flex gap-3 justify-center  border-2 rounded-full items-center p-2 ${isActive('/settings') ? "bg-[#003366] text-[#f5f6f8]": "text-[#003366] border-[#003366]"}`}>
              <IoMdSettings />
              <button onClick={() => navigate("/settings")}>Site Settings</button>
            </div>
          </div>
          <div className={`flex gap-3 justify-center  border-2 rounded-full items-center p-2 px-10 ${isActive('/logout') ? "bg-[#003366] text-[#f5f6f8]": "text-[#003366] border-[#003366]"}`}>
            <button>Logout</button>
            <FaArrowRight />
          </div>
        </div> */}
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
  )
}

export default Home;