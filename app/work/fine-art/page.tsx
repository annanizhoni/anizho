
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { fineArtQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Artwork } from "@/types";

export default async function FineArtPage() {
  const artworks = await client.fetch<Artwork[]>(fineArtQuery);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-light tracking-tight md:text-6xl">
          Fine Art
        </h1>
        <p className="mt-4 text-zinc-500">
          Paintings, drawings, and mixed media.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <Link
            key={artwork._id}
            href={`/work/fine-art/${artwork.slug}`}
            className="group block"
          >
            {artwork.mainImage?.asset?.url && (
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                <img
                  src={urlFor(artwork.mainImage).width(900).auto("format").url()}
                  alt={artwork.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}

            <div className="mt-5 space-y-1">
              <h2 className="text-xl font-light tracking-tight">
                {artwork.title}
              </h2>
              <p className="text-sm text-zinc-500">
                {artwork.medium}
                {artwork.year ? ` · ${artwork.year}` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}