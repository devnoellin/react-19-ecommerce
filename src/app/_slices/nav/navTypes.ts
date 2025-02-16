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