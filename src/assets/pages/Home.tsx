import { useEffect, useState } from "react";
import IELTSInfo from "../components/IELTSInfo";
import ContactUs from "./ContactUs";

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
        <h1 className="font-extrabold text-center text-[#003366]">Our Team</h1>
        <div className="flex justify-center gap-[20%]">
          <img src="AboutUs\furqan.jpg" alt="" className="rounded-full size-40"/>
          <img src="AboutUs\wahab.jpg" alt="" className="rounded-full size-40"/>
          <img src="AboutUs\ahmad.jpg" alt="" className="rounded-full size-40"/>
        </div>
        <ContactUs />
      </>}
    </div>
  );
};

export default Home;