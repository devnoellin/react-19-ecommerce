import axios from 'axios';
import { devLog } from '@/app/_utils/log';

const axiosInstance = axios.create({
  timeout: 10000, // 設定請求超時時間 (10 秒)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    devLog("API Response:", response.data);

    return response.data;
  },
  (error) => {
    devLog("API Error:", error);

    return Promise.reject(error.response?.data || "Oops, an error occurred!");
  }
);

export default axiosInstance;