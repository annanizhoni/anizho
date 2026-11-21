export interface SanityImage {
  _type?: "image";
  _key?: string;
  asset?: {
    _id?: string;
    url?: string;
    metadata?: {
      dimensions?: {
        width?: number;
        height?: number;
        aspectRatio?: number;
      };
      lqip?: string;
    };
  };
}

export interface Artwork {
  _id: string;
  title: string;
  slug: string;
  category: "paintings" | "drawings" | "beadwork" | "mixed-media" | "other";
  medium: string;
  artworkType?: "original" | "print";
  year?: number;
  width?: number;
  height?: number;
  dimensionsUnit?: "in" | "cm";
  mainImage: SanityImage;
  gallery?: SanityImage[];
  description?: string;
  price?: number;
  availability?: "available" | "sold" | "not-for-sale";
  featured?: boolean;
}