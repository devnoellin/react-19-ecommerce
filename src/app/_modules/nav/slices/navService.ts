import axios from "@/app/_common/lib/axios";
import {
  NavListResponse,
  NavItem,
} from "@/app/_modules/nav/types/navTypes";

/**
 * 取得導覽列表 API
 */
export const fetchNavList = async (): Promise<NavItem[]> => {
  const response: NavListResponse = await axios.get("/v1/nav");

  if (response?.result === "ok") {
    return response.list;
  }

  throw new Error("Failed to fetch nav list");
};
