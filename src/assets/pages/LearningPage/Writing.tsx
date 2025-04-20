import axios from "axios";
import { useEffect, useState } from "react";

const Writing = () => {
  const [book, setBook] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("http://127.0.0.1:8000/retrieve-book/?type=Writing");
    console.log(res);
    const arr = res.data.map((item:any) => item.file)
    console.log(arr)
    setBook(arr);
  } 

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
      {book.map((item:any, index:number) => (
        <ul key={index} className="mt-24">
          <li><a href={item} className="hover:underline hover:text-blue-600">{item}</a></li>
        </ul>
      ))}
    </>
  )
}

export default Writing
