import type { MetadataRoute } from "next";
import { ROUTES } from "@constants/routes";
import { getBaseUrl } from "@lib/seo";

const publicRoutes = [
  ROUTES.home, ROUTES.about, ROUTES.services, ROUTES.industries, ROUTES.tracking,
  ROUTES.quote, ROUTES.contact,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  return publicRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
