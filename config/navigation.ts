import type { NavItem } from "../types/site";
import { ROUTES } from "@constants/routes";

export const navigationConfig = {
  main: [
    { href: ROUTES.home, label: "Home" },
    { href: ROUTES.about, label: "About" },
    { href: ROUTES.services, label: "Services" },
    { href: ROUTES.industries, label: "Industries" },
    { href: ROUTES.tracking, label: "Tracking" },
    { href: ROUTES.quote, label: "Quote" },
    { href: ROUTES.contact, label: "Contact" },
  ] as NavItem[],
  mobile: [
    { href: ROUTES.home, label: "Home" },
    { href: ROUTES.services, label: "Services" },
    { href: ROUTES.tracking, label: "Tracking" },
    { href: ROUTES.quote, label: "Quote" },
    { href: ROUTES.contact, label: "Contact" },
  ] as NavItem[],
  footer: [
    { href: ROUTES.about, label: "About" },
    { href: ROUTES.services, label: "Services" },
    { href: ROUTES.faq, label: "FAQ" },
    { href: ROUTES.privacyPolicy, label: "Privacy" },
    { href: ROUTES.terms, label: "Terms" },
  ] as NavItem[],
  services: [
    { href: `${ROUTES.services}/ftl`, label: "FTL" },
    { href: `${ROUTES.services}/ltl`, label: "LTL" },
    { href: `${ROUTES.services}/reefer`, label: "Reefer" },
    { href: `${ROUTES.services}/flatbed`, label: "Flatbed" },
    { href: `${ROUTES.services}/dedicated`, label: "Dedicated Freight" },
  ] as NavItem[],
  industries: [
    { href: ROUTES.industries, label: "All Industries" },
    { href: `${ROUTES.industries}/manufacturing`, label: "Manufacturing" },
    { href: `${ROUTES.industries}/retail`, label: "Retail" },
    { href: `${ROUTES.industries}/food-beverage`, label: "Food & Beverage" },
  ] as NavItem[],
};

export const navItems = navigationConfig.main;
export const mobileNavItems = navigationConfig.mobile;
export const footerNavItems = navigationConfig.footer;
export const servicesNavItems = navigationConfig.services;
export const industriesNavItems = navigationConfig.industries;
