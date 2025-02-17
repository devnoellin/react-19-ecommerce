import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSiteConfig } from "@/app/_apis/siteConfigService";

export const getSiteConfig = createAsyncThunk("main/fetchSiteConfig", async () => {
  const config = await fetchSiteConfig();

  return config;
});