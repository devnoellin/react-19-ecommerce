import { ApiResponse } from "@/app/_common/types/api";

export interface NavState {
  navList: NavItem[];
}

export interface NavItem {
  title: string;
  link: string;
  dropdowns?: {
    label: string;
    link: string;
    icon?: string;
  }[];
}

export interface UserMenuItem {
  label: string;
  link: string;
}

export interface NavListResponse extends ApiResponse {
  list: NavItem[];
}