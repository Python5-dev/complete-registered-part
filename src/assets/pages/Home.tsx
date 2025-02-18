import { useEffect, useState } from "react";
import IELTSInfo from "../components/IELTSInfo";
// import ContactUs from "./ContactUs";

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem("access token") || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("access token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <img src="ielts-image.webp" alt="IELTS Banner" className="w-screen" />
      {token ? <IELTSInfo /> : 
      <>
        {/* <h1 className="font-extrabold text-center text-[#003366]">Our Team</h1>
        <div className="flex my-5">
          <img src="AboutUs\wahab.jpg" alt="" className="w-1/2" />
          <div className="bg-[#003366] w-1/2">
            <h1 className="text-[#d2e8e3] m-2">Graphic Designer</h1>
          </div>
        </div>
        <ContactUs /> */}
      </>}
    </div>
  );
};

export default Home;