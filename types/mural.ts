import type { SanityImage } from "./artwork";

export interface Mural {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  category: "community-mural" | "commercial-mural" | "public-art";
  year?: number;
  location?: string;
  client?: string;
  status?: "completed" | "in-progress" | "concept";
  description?: string;
  concept?: string;
  heroImage?: SanityImage;
  gallery?: SanityImage[];
  collaborators?: string[];
  featured?: boolean;
  sortOrder?: number;
}