
import type { SanityImage } from "./artwork";

export interface SignProject {
  _id: string;
  title: string;
  slug: string;
  projectType: "sign" | "window" | "lettering";
  year?: number;
  location?: string;
  client?: string;
  description?: string;
  heroImage: SanityImage;
  gallery?: SanityImage[];
  featured?: boolean;
  sortOrder?: number;
}
