import { navigationConfig } from "@config/navigation";
import type { NavLink } from "../types/navigation";

export function getPrimaryNavigation(): NavLink[] {
  return navigationConfig.main;
}

export function getMobileNavigation(): NavLink[] {
  return navigationConfig.mobile;
}

export function getFooterNavigation(): NavLink[] {
  return navigationConfig.footer;
}

export function getBreadcrumbItems(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const items: NavLink[] = [{ href: "/", label: "Home" }];

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    items.push({ href, label: segment.replace(/-/g, " ") });
  });

  return items;
}
