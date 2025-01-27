import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://jobportalbackend-vwx4.onrender.com/",
  withCredentials: true, // For handling cookies
});

// Add Authorization Header
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
