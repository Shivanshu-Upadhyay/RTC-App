import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials:true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// List of all the endpoints😎
export const sendOtp = (data) => api.post("/send-otp", data);
export const verifyOtp = (data)=> api.post("/verify-otp",data);
export const activated = (data)=>api.post("/activateUser",data)


export default api;
