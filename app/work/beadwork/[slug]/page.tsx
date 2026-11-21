
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { artworkBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Artwork } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BeadworkPage({ params }: PageProps) {
  const { slug } = await params;

  const artwork = await client.fetch<Artwork | null>(
    artworkBySlugQuery,
    { slug }
  );

  if (!artwork || artwork.category !== "beadwork") {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/work/beadwork"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-all duration-200 hover:!text-taupe-400"
      >
        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        <span>Back to Beadwork</span>
      </Link>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          {artwork.mainImage?.asset?.url && (
            <img
              src={urlFor(artwork.mainImage).width(1600).auto("format").url()}
              alt={artwork.title}
              className="h-auto w-full"
            />
          )}

          {artwork.gallery && artwork.gallery.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {artwork.gallery.map((image, index) => (
                <img
                  key={image._key ?? index}
                  src={urlFor(image).width(800).auto("format").url()}
                  alt={`${artwork.title} - photograph ${index + 1}`}
                  className="h-auto w-full"
                />
              ))}
            </div>
          )}
        </div>

        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            Beadwork
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            {artwork.title}
          </h1>

          <p className="mt-4 text-sm text-zinc-500">
            {artwork.medium}
            {artwork.year ? ` · ${artwork.year}` : ""}
          </p>

          {artwork.width && artwork.height && (
            <p className="mt-2 text-sm text-zinc-500">
              {artwork.width} × {artwork.height}
              {" "}{artwork.dimensionsUnit ?? "in"}
            </p>
          )}

          {artwork.description && (
            <div className="mt-10 max-w-md">
              <p className="whitespace-pre-line leading-relaxed text-zinc-700">
                {artwork.description}
              </p>
            </div>
          )}

          {artwork.availability && (
            <p className="mt-10 text-sm text-zinc-500">
              {artwork.availability === "available"
                ? "Available"
                : artwork.availability === "sold"
                  ? "Sold"
                  : "Not for sale"}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
