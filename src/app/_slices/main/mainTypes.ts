export interface MainState {
  siteConfig: SiteConfig;
}

export interface SiteConfig {
  logo: string;
  locales: string[];
  currency?: string;
}
