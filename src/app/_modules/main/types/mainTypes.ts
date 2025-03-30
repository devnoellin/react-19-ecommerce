import { ApiResponse } from "@/app/_common/types/api";

export interface MainState {
  init: boolean;
  error: boolean;
  siteConfig: SiteConfig;
}

export interface SiteConfig {
  logo: string;
  locales: string[];
  currency?: string;
}

export interface SiteConfigDataResponse extends ApiResponse {
  data: SiteConfig;
}
