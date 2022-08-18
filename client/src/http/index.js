import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// List of all the endpoints😎
export const sendOtp = (data) => api.post("/send-otp", data);
export const verifyOtp = (data) => api.post("/verify-otp", data);
export const activated = (data) => api.post("/activateUser", data);
export const createRoomServer = (data) => api.post("/createRoomServer", data);
export const logout = () => api.post("/logout");
// Interceptors
api.interceptors.response.use(
  (config) => config,
 async (err) => {
    const originalRequst = err.config;
    if (err.response.status === 401 && err.config && !err.config.isRetry) {
      originalRequst.isRetry = true;
    }
    try {
     await axios.get(`${process.env.REACT_APP_API_URL}/refresh`,{withCredentials:true})
     return api.request(originalRequst)
    } catch (error) {
      console.log(error);
    }
    throw Error()
  }
);

export default api;
