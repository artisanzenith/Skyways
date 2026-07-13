import { ROUTES } from "@constants/routes";
import type { FooterLinkGroup } from "../types/navigation";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { href: ROUTES.services, label: "All Services" },
      { href: `${ROUTES.services}/ftl`, label: "FTL" },
      { href: `${ROUTES.services}/ltl`, label: "LTL" },
      { href: `${ROUTES.services}/reefer`, label: "Reefer" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: ROUTES.industries, label: "All Industries" },
      { href: `${ROUTES.industries}/manufacturing`, label: "Manufacturing" },
      { href: `${ROUTES.industries}/retail`, label: "Retail" },
      { href: `${ROUTES.industries}/food-beverage`, label: "Food & Beverage" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: ROUTES.faq, label: "FAQ" },
      { href: ROUTES.contact, label: "Contact" },
      { href: ROUTES.search, label: "Search" },
      { href: ROUTES.blog, label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: ROUTES.privacyPolicy, label: "Privacy Policy" },
      { href: ROUTES.terms, label: "Terms of Service" },
      { href: ROUTES.cookiePolicy, label: "Cookie Policy" },
      { href: ROUTES.accessibility, label: "Accessibility" },
    ],
  },
];
