import type { BreadcrumbItem } from "../types/navigation";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skyways Logistics LLC",
    url: "https://skywayslogistics.com",
    logo: "https://skywayslogistics.com/logo.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-555-0188",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function webpageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };
}
