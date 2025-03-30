import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSiteConfig } from "@/app/_modules/main/slices/mainService";

/**
 * 初始化網站
 */
export const initSite = createAsyncThunk("main/init", async (_, { dispatch }) => {
  await dispatch(getSiteConfig());
});

/**
 * 取得網站樣式設定檔
 */
export const getSiteConfig = createAsyncThunk("main/fetchSiteConfig", async () => {
  const config = await fetchSiteConfig();

  return config;
});