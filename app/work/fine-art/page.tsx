
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectPreview";
import { client } from "@/sanity/lib/client";
import { fineArtQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Artwork } from "@/types";

export default async function FineArtPage() {
  const artworks = await client.fetch<Artwork[]>(fineArtQuery);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/work"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-all duration-200 hover:!text-taupe-400"
      >
        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        <span>Back</span>
      </Link>

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
          <ProjectCard
            key={artwork._id}
            project={{
              title: artwork.title,
              image: artwork.mainImage?.asset?.url
                ? urlFor(artwork.mainImage).width(900).auto("format").url()
                : "",
              href: `/work/fine-art/${artwork.slug}`,
              details: artwork.medium,
              year: artwork.year,
            }}
          />
        ))}
      </div>
    </main>
  );
}
