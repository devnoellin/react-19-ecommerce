import axios from "@/app/_lib/_axios";
import { ApiResponse } from '@/app/_types/api';

export interface SiteConfig {
  logo: string;
  currency: string;
  locales: [];
}

export interface SiteConfigDataResponse extends ApiResponse {
  data: SiteConfig;
}

export const fetchSiteConfig = async (): Promise<SiteConfig> => {
  const response: SiteConfigDataResponse = await axios.get("http://localhost:8080/api/v1/site-config");

  if (response?.result === "ok") {
    return response.data;
  }

  throw new Error("Failed to fetch site config");
};