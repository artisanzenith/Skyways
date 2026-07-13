export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  industries: "/industries",
  tracking: "/tracking",
  quote: "/quote",
  contact: "/contact",
  faq: "/faq",
  blog: "/blog",
  search: "/search",
  privacyPolicy: "/privacy-policy",
  terms: "/terms",
  cookiePolicy: "/cookie-policy",
  accessibility: "/accessibility",
  careers: "/careers",
  carrier: "/carrier",
  carrierRegister: "/carrier/register",
  shipper: "/shipper",
  dashboard: "/dashboard",
  admin: "/admin",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
