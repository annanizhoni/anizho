export interface Project {
  slug: string;

  title: string;

  subtitle?: string;

  category:
  | "community-mural"
  | "commercial-mural";

  year: number;

  location: string;

  featured: boolean;

  heroImage: string;

  gallery: string[];

  description: string;
}