import axios from "@/app/_common/lib/axios";
import { SiteConfigDataResponse, SiteConfig } from "@/app/_modules/main/types/mainTypes";

/**
 * 取得網站設定 API
 */
export const fetchSiteConfig = async (): Promise<SiteConfig> => {
  const response: SiteConfigDataResponse = await axios.get("/v1/site-config");

  if (response?.result === "ok") {
    return response.data;
  }

  throw new Error("Failed to fetch site config");
};