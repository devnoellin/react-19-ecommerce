import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/_lib/store"; // 確保這是你的 store 定義
import { fetchSiteConfig } from "@/app/_apis/siteConfigService";
import { getNavList } from "@/app/_slices/nav/navActions";
import { getRecommendedProducts } from "@/app/_slices/products/productsActions";

/**
 * 初始化網站
 */
export const initSite = createAsyncThunk("main/init", async (_, { dispatch, getState }) => {
  await dispatch(getSiteConfig());

  const { main } = getState() as RootState;
  const { init } = main;

  if (init) {
    await dispatch(getNavList());
    await dispatch(getRecommendedProducts());
  }
});

/**
 * 取得網站樣式設定檔
 */
export const getSiteConfig = createAsyncThunk("main/fetchSiteConfig", async (_, { dispatch }) => {
  const config = await fetchSiteConfig();

  return config;
});