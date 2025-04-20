import axios from "axios"
import { useEffect } from "react"

const Listening = () => {
  const fetchData = async () => {
    const res = await axios.get("http://127.0.0.1:8000/retrieve-book/?type=Listening");
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

export default Listening
