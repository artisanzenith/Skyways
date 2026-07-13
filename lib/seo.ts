import type { Metadata } from "next";
import { seoDefaults } from "@config/seo";
import type { PageMetadataOptions } from "../types/seo";

export function createCanonical(slug?: string) {
  const base = seoDefaults.metadataBase.toString().replace(/\/$/, "");
  const path = slug ? (slug.startsWith("/") ? slug : `/${slug}`) : "";
  return `${base}${path}`;
}

export function createMetadata(options: PageMetadataOptions): Metadata {
  const canonical = createCanonical(options.slug);
  const title = options.title || seoDefaults.title;
  const description = options.description || seoDefaults.description;
  const keywords = options.keywords || ["freight brokerage", "logistics", "supply chain"];

  return {
    title,
    description,
    metadataBase: seoDefaults.metadataBase,
    alternates: {
      canonical,
    },
    keywords,
    robots: options.robots ?? "index,follow",
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: seoDefaults.openGraph.siteName,
      locale: seoDefaults.openGraph.locale,
      type: seoDefaults.openGraph.type,
      images: options.image
        ? [
            {
              url: options.image.url,
              width: options.image.width,
              height: options.image.height,
              alt: options.image.alt,
            },
          ]
        : [],
    },
    twitter: {
      card: seoDefaults.twitter.card,
      title,
      description,
      images: options.image ? [options.image.url] : [],
    },
    other: {
      "theme-color": "#0f172a",
      "application-name": seoDefaults.title,
      "apple-mobile-web-app-title": seoDefaults.title,
    },
  };
}

export function getBaseUrl() {
  return seoDefaults.metadataBase.toString().replace(/\/$/, "");
}

export function getRobotsText() {
  return [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${getBaseUrl()}/sitemap.xml`,
  ].join("\n");
}
