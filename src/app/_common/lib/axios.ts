import axios from "axios";
import { devLog } from "@/app/_common/utils/log";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // 設定請求超時時間 (10 秒)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    devLog("API Response:", response.data);

    return response.data;
  },
  (error) => {
    devLog("API Error:", error);

    return Promise.reject(error?.response?.data || "Oops, an error occurred!");
  }
);

export default axiosInstance;