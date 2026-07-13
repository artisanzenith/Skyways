export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};
