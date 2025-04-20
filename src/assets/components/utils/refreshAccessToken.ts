import axios from "axios";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh token');
  
  try {
    const res = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
      refresh: refreshToken
    },
    {
      headers: {
        "Content-Type": "application/json"
      }    
    });
  
    localStorage.setItem('access token', res.data.access);
    return res.data.access;

  } catch(error) {
    localStorage.clear();
    return null;
  }
}