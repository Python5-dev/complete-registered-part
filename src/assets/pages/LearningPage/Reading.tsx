import axios from "axios";
import { useEffect } from "react";

const Reading = () => {
  const fetchData = async () => {
    const res = await axios.get("http://127.0.0.1:8000/retrieve-book/?type=Reading");
    console.log(res);
  } 

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
      
    </>
  )
}

export default Reading
