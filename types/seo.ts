export type PageMetadataOptions = {
  title: string;
  description: string;
  slug?: string;
  keywords?: string[];
  robots?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export type OpenGraphImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type BreadcrumbSchemaItem = {
  position: number;
  name: string;
  item: string;
};
