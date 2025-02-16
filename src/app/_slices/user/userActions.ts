import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/app/_lib/_axios";
import { UserInfoResponse } from "./userTypes"; // 確保有 `UserInfoResponse` 的 Type 定義

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async () => {
    const response: UserInfoResponse = await axios.get("/api/v1/user-info");
    if (response?.result === "ok") {
      return response; // 確保 API Response 正確
    }
    throw new Error("Failed to fetch user info");
  }
);