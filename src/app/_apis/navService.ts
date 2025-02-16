import axios from "@/app/_lib/_axios";
import { ApiResponse } from '@/app/_types/api';

export interface NavItem {
  title: string;
  link: string;
  dropdowns?: {
    label: string;
    link: string;
    icon?: string;
  }[];
}

export interface NavDataResponse extends ApiResponse {
  list: NavItem[];
}

export const fetchNavList = async (): Promise<NavItem[]> => {
  const response: NavDataResponse = await axios.get("http://localhost:8080/api/v1/nav");

  if (response?.result === "ok") {
    return response.list;
  }

  throw new Error("Failed to fetch nav list");
};