
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { muralBySlugQuery } from "@/sanity/lib/mural";
import { urlFor } from "@/sanity/lib/image";
import type { Mural } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MuralPage({ params }: PageProps) {
  const { slug } = await params;

  const mural = await client.fetch<Mural | null>(
    muralBySlugQuery,
    { slug }
  );

  if (!mural) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            {mural.category?.replaceAll("-", " ")}
          </p>

          <h1 className="mt-3 text-4xl font-light tracking-tight md:text-6xl">
            {mural.title}
          </h1>

          {mural.subtitle && (
            <p className="mt-3 text-lg text-zinc-500">
              {mural.subtitle}
            </p>
          )}

          <p className="mt-3 text-sm text-zinc-500">
            {[mural.location, mural.year].filter(Boolean).join(" · ")}
          </p>
        </div>

        {mural.heroImage?.asset?.url && (
          <img
            src={urlFor(mural.heroImage).width(1800).auto("format").url()}
            alt={mural.title}
            className="w-full object-cover"
          />
        )}

        {mural.description && (
          <div className="max-w-3xl py-8">
            <p className="whitespace-pre-line leading-relaxed text-zinc-700">
              {mural.description}
            </p>
          </div>
        )}

        {mural.concept && (
          <div className="max-w-3xl">
            <h2 className="mb-3 text-xl font-light">Concept</h2>
            <p className="whitespace-pre-line leading-relaxed text-zinc-700">
              {mural.concept}
            </p>
          </div>
        )}

        {mural.gallery && mural.gallery.length > 0 && (
          <div className="grid gap-6 py-8 sm:grid-cols-2">
            {mural.gallery.map((image, index) => (
              <img
                key={image._key ?? index}
                src={urlFor(image).width(1200).auto("format").url()}
                alt={`${mural.title} - photograph ${index + 1}`}
                className="h-auto w-full object-cover"
              />
            ))}
          </div>
        )}

        {mural.collaborators && mural.collaborators.length > 0 && (
          <div className="border-t border-zinc-200 pt-8">
            <h2 className="mb-3 text-xl font-light">Collaborators</h2>
            <p className="text-sm text-zinc-600">
              {mural.collaborators.join(", ")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}