
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { client } from "@/sanity/lib/client";
import { muralBySlugQuery } from "@/sanity/lib/mural";
import { urlFor } from "@/sanity/lib/image";
import type { Mural } from "@/types";

export default async function MuralPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mural = await client.fetch<Mural | null>(
    muralBySlugQuery,
    { slug }
  );

  if (!mural) {
    notFound();
  }

  return (
    <Section>
      <Link
        href="/work/murals"
        className="mb-10 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-900"
      >
        ← Back to Murals
      </Link>

      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-light tracking-tight md:text-6xl">
            {mural.title}
          </h1>

          {mural.subtitle && (
            <p className="text-lg text-zinc-500">{mural.subtitle}</p>
          )}

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
            {mural.location && <span>{mural.location}</span>}
            {mural.year && <span>{mural.year}</span>}
            {mural.client && <span>{mural.client}</span>}
          </div>
        </div>

        {mural.heroImage && (
          <div className="overflow-hidden">
            <img
              src={urlFor(mural.heroImage).width(2000).auto("format").url()}
              alt={mural.title}
              className="h-auto w-full"
            />
          </div>
        )}

        {mural.description && (
          <div className="max-w-3xl">
            <p className="leading-relaxed text-zinc-600">
              {mural.description}
            </p>
          </div>
        )}

        {mural.concept && (
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-light">Concept</h2>
            <p className="leading-relaxed text-zinc-600">
              {mural.concept}
            </p>
          </div>
        )}

        {mural.gallery && mural.gallery.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {mural.gallery.map((image, index) => (
              <div key={image._key ?? index} className="overflow-hidden">
                <img
                  src={urlFor(image).width(1200).auto("format").url()}
                  alt={`${mural.title} – image ${index + 1}`}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        )}

        {mural.collaborators && mural.collaborators.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-2xl font-light">Collaborators</h2>
            <ul className="space-y-1 text-sm text-zinc-600">
              {mural.collaborators.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
