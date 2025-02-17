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
