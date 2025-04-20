import { useEffect, useState, useRef } from "react";
import IELTSInfo from "../components/IELTSInfo";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { Waypoint } from 'react-waypoint';
import Card from "../components/Card";
import axios from "axios";
import { message, Spin } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
import { GiChatBubble } from "react-icons/gi";
import { MdBubbleChart } from "react-icons/md";
import { animate } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import AdminHome from "../components/admin/dashboard/Home";

const Home = ({ onRegClose, reference }:any) => {
  const [viewMessage, setViewMessage] = useState(false);
  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("access token") || null);
  console.log("access token: ", token)
  const [messageFormData, setMessageFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const waveRef = useRef(null);

  useEffect(() => {
    const waveElement:any = waveRef.current;
    const layers = 8;
    const colors = ['#008080', '#007070', '#009090'];

    if (waveElement) { // Check if waveElement is not null
      for (let i = 0; i < layers; i++) {
        const layer = document.createElement('div');
        layer.classList.add('wave-layer');
        layer.style.backgroundColor = colors[i];
        layer.style.animationDelay = `${i * 2}s`;
        waveElement.appendChild(layer);
      }
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("access token") || null);
    };

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();

    console.log("reference", reference);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  window.onscroll = () => {
    
  }

  const handleChangeInput = (e:any) => {
    const { id, value } = e.target;
    setMessageFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const wait = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = async () => {
    if (!messageFormData.email || !messageFormData.subject || !messageFormData.message) {
      messageApi.open({
        type: 'warning',
        content: 'Please fill out all fields.'
      });
      return;
    }

    try {
      setLoading(true);
      await wait(1000);
      const res = await axios.post("", messageFormData);
      console.log(res);
      if(res.status===200) {
        messageApi.open({
          type: "success",
          content: res.data.message,
        })
        setMessageFormData({
          email: '',
          subject: '',
          message: ''
        })
      }
    } catch(err:any) {
      messageApi.open({
        type: 'error',
        content: err.response.data.error
      })
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    {
      !token ?
      <div ref={reference.Home} className="flex bg-[#f5f6f8] pb-5">
        { contextHolder }
        <div className="bg-[#003366] w-56 h-56 side"></div>
      <div className="w-1/2 pt-56" data-aos="fade-right">
        {/* <h1 className="absolute top-28 font-black text-[#003366] underline italic">IELTS preparation Web</h1> */}
        <div className="flex">
          <div className="h-5 w-1 bg-red-800 mr-5"></div>
          <p className="text-[#003366] font-black">LET'S LEARN ENGLISH TOGETHER</p>
        </div>
        <br />
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-wide drop-shadow-md !leading-tight englishExpert">
            Speak <span className="text-pink-600 englishExpert">English</span>
            <span className="block englishExpert">Like an Expert</span>
          </h1>
          <br />
        <p className="text-gray-600 text-lg font-medium max-w-md mx-auto lg:mx-0">"Master IELTS with expert-created learning materials and smart AI-based evaluation for your success."</p>
        <br />
        <button onClick={() => onRegClose(true)} className="px-6 py-3 bg-[#003366] hover:bg-[#1a4473] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          Register Now
          <FaArrowRight className="ml-2 inline-block" />
        </button>
        {/* <div className="flex items-center gap-1 mt-4 text-slate-700">        
          <HiOutlineMail />
          muhammadfurqancheema92@gmail.com
        </div>
        <div className="flex items-center gap-1 mt-1 text-slate-700">
          <FaWhatsapp />
          0301-0700263
        </div> */}
      </div>
      {/* <GiChatBubble  className="text-[#003366] size-60 absolute left-[600px] top-20" data-aos="fade-left" /> */}
      {/* <h1 className="absolute left-[665px] top-28 text-white text-5xl englishExpert" data-aos="fade-left">Say <br /><span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent text-6xl englishExpert">Yes!</span></h1> */}
      {/* <MdBubbleChart className="absolute size-48 top-[500px] text-[#003366] left-96" data-aos="fade-right"/> */}
      <svg className="absolute right-0 top-10 z-0 w-[700px]" viewBox="0 0 200 200">
        <path fill="#003366" d="M56.4,-49.6C71.5,-35.5,80.6,-13.5,77.9,7.7C75.2,28.9,60.6,49.3,42.8,60.2C25.1,71.2,4.2,72.8,-17.2,70.4C-38.7,68.1,-60.8,61.9,-69.2,47.4C-77.5,32.8,-72,9.9,-61.4,-8.7C-50.7,-27.2,-35,-41.4,-18.1,-53.3C-1.2,-65.2,16.9,-75.9,36.6,-72.3C56.2,-68.6,77.2,-50.5,83.6,-29.5C90,-8.4,81.8,15.6,70.4,34.5C59,53.4,44.4,67.2,27.9,72.5C11.4,77.8,-6,74.5,-24.1,67.8C-42.2,61,-60.9,51,-68.2,35.6C-75.6,20.2,-71.7,-0.5,-61.5,-17.4C-51.3,-34.2,-34.9,-47.2,-18.2,-56.4C-1.5,-65.6,15.3,-70.8,32.3,-68.9C49.3,-67,66.5,-58,72.3,-43.2C78,-28.5,71.3,-8.3,59.6,5.5C48,19.3,31.3,26.7,18.2,34.6C5.2,42.4,-3.2,50.8,-15.1,52.6C-26.9,54.5,-42.2,49.7,-56.4,41.8C-70.5,33.9,-83.6,23,-86.2,10.1C-88.8,-2.9,-80.9,-17.8,-70.1,-31.1C-59.2,-44.5,-45.3,-56.3,-30.3,-59.7C-15.4,-63.1,-0.5,-58.1,13.1,-49.1C26.7,-40.1,39.7,-27.2,56.4,-49.6Z" transform="translate(100 100)" />
      </svg>

      
      <div
        className="relative w-full lg:w-1/2 flex justify-center pt-16 lg:pt-8 pr-0 lg:pr-5 z-10"
        data-aos="fade-left"
      >
        {/* Animated Gradient Blob Behind Image */}
        <img
          src="pte-coaching-student-removebg-preview.png"
          alt="IELTS Student"
          className="relative h-[650px] mix-blend-multiply"
        />
      </div>
      </div> : <AdminHome />
}
      {
        token ? null :
        <>
          <div ref={reference.AboutUs} className="mt-20">
            <h1 className="text-center text-[#003366] font-black">About Us</h1>
            <div className="flex justify-center gap-10 mt-10">
              <Waypoint
                onEnter={() => setIsAboutSectionVisible(true)}
              />
        <Card 
          isAboutSectionVisible={isAboutSectionVisible}
          animationName="animate__backInRight"
          animationDelay="0.2s"
          img="public\AboutUs\wahab-removebg-preview.png"
          role="Graphics Designer"
          name="Abdul Wahab"
          bio="A creative Graphics Designer specializing in Figma, logo design, and branding. Passionate about visual storytelling, he brings ideas to life with modern and professional designs, ensuring a unique identity for every project."
        />
        <Card 
          isAboutSectionVisible={isAboutSectionVisible}
          animationName="animate__rotateIn"
          animationDelay="0.8s"
          img="public\AboutUs\furqan.png"
          role="Full Stack Developer"
          name="Muhammad Furqan Cheema"
          bio="A skilled Full Stack Developer with expertise in both frontend and backend technologies. From designing interactive UI to handling robust server-side logic, he ensures seamless and high-performance web applications for a smooth user experience."
        />
        <Card 
          isAboutSectionVisible={isAboutSectionVisible}
          animationName="animate__backInRight"
          animationDelay="1.5s"
          img="public\AboutUs\ahmad.png"
          role="Backend Developer"
          name="Muhammad Ahmad Butt"
          bio="An AI and NLP specialist with professional experience in artificial intelligence. Also contributes to backend development, integrating intelligent solutions into applications to enhance automation, user interaction, and data-driven decision-making"
        />
            </div>
          </div>
          <div ref={reference.ContactUs} className="mt-20">
            <h1 className="text-center text-[#003366]">Contact Us</h1>
            <div className="bg-[#0f6466] w-full mt-10 flex p-5">
              <div className="w-1/3 text-center text-white">
                <MdLocationOn className="rounded-full mx-auto text-white bg-[#008181] size-16 p-2" />
                <h3 className="p-0">Address</h3>
                <div className="mt-8">
                  <h5 className="p-0">Abdul Wahab</h5>
                  <p>0307-6215204</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Furqan Cheema</h5>
                  <p>0301-0700263</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Ahmad Butt</h5>
                  <p>0310-3375198</p>
                </div>
              </div>
              <div className="w-1/3 text-center text-white">
                {/* <img src="email icon.png" alt="" className="size-16 rounded-full mx-auto"/> */}
                <MdEmail className="rounded-full mx-auto text-white bg-[#008181] size-16 p-2" />
                <h3 className="p-0">Email</h3>
                <h4 className="p-0 font-black mt-8">Personal Email:</h4>
                <div className="mt-5">
                  <h5 className="p-0">Abdul Wahab</h5>
                  <p>wahabtufail48@gmail.com</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Furqan Cheema</h5>
                  <p>muhammadfurqancheema92@gmail.com</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Ahmad Butt</h5>
                  <p>ahmedbutt880@gmail.com</p>
                </div>
                <h4 className="p-0 mt-8">UOG Email:</h4>
                <div className="mt-5">
                  <h5 className="p-0">Abdul Wahab</h5>
                  <p>21014119-006@uog.edu.pk</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Furqan Cheema</h5>
                  <p>21014119-060@uog.edu.pk</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Ahmad Butt</h5>
                  <p>21014119-047@uog.edu.pk</p>
                </div>
              </div>
              <div className="w-1/3 text-center text-white">
                {/* <img src="phone-icon.png" alt="" className="rounded-full mx-auto size-16"/> */}
                <MdPhone className="rounded-full mx-auto text-white bg-[#008181] size-16 p-2" />
                <h3 className="p-0">Phone</h3>
                <div className="mt-8">
                  <h5 className="p-0">Abdul Wahab</h5>
                  <p>0307-6215204</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Furqan Cheema</h5>
                  <p>0301-0700263</p>
                </div>
                <div className="mt-3">
                  <h5 className="p-0">Muhammad Ahmad Butt</h5>
                  <p>0310-3375198</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row">
              <Waypoint
                onEnter={() => setViewMessage(true)}
              />
              <div className={`md:w-1/2 mt-10 ${viewMessage ? "animate__animated animate__fadeInLeft" : null}`}>
                <h2 className="text-[#003366] text-center p-0 font-semibold">Message Us</h2>
                <p className="w-4/5 mt-5 mx-auto text-center md:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, error dolore amet sapiente qui commodi quisquam consequatur architecto possimus a ipsa suscipit adipisci quis. Amet, nam consectetur. Perferendis, aliquam. Iusto.</p>
              </div>
              <div className={`md:w-1/2 ${viewMessage ? "animate__animated animate__fadeInRight" : null}`}>
                <form action="" className="p-6 bg-[#0f6466] w-4/5 md:w-2/3 mx-auto rounded-3xl mt-10 md:mt-0">
                  <div>
                    <label htmlFor="email" className="text-[#f5f6f8] block mb-1">Email:</label>
                    <input value={messageFormData.email} id="email" type="Email" onChange={handleChangeInput} className="bg-slate-900 text-[#f5f6f8] w-full p-2 rounded-md focus:outline-none" />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="subject" className="text-[#f5f6f8] block mb-1">Subject:</label>
                    <input value={messageFormData.subject} id="subject" type="text" onChange={handleChangeInput} className="bg-slate-900 text-[#f5f6f8] w-full p-2 rounded-md focus:outline-none inputfield" />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="message" className="text-[#f5f6f8] block mb-1">Message:</label>
                    <textarea value={messageFormData.message} id="message" rows={6} onChange={handleChangeInput} className="bg-slate-900 text-[#f5f6f8]"></textarea>
                  </div>
                  <button type="button" onClick={handleSubmit} className="bg-[#003366] hover:bg-[#1a4473] text-[#f5f6f8] rounded-lg py-2 px-5 mt-5 shadow-2xl transition-all duration-200 ease-in-out active:scale-90">  {loading ? <Spin size="small" /> : 'Submit'}</button>
                </form>
              </div>
            </div>
            {/* <div className="mt-20" ref={waveRef}></div> */}
          </div>
        </>
      }
    </>
  );
};

export default Home;