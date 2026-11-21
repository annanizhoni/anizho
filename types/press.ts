import type { SanityImage } from "./artwork";

export interface PressItem {
  _id: string;
  title: string;
  slug?: string;
  publication: string;
  mediaType: "article" | "news-segment" | "interview" | "podcast" | "video" | "other";
  publicationDate: string;
  url?: string;
  description?: string;
  image?: SanityImage;
  featured?: boolean;
  sortOrder?: number;
}