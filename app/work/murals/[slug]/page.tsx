
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/work/murals"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-all duration-200 hover:!text-taupe-400"
      >
        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        <span>Back to Murals</span>
      </Link>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          {mural.heroImage && (
            <img
              src={urlFor(mural.heroImage).width(1600).auto("format").url()}
              alt={mural.title}
              className="h-auto w-full"
            />
          )}

          {mural.gallery && mural.gallery.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {mural.gallery.map((image, index) => (
                <img
                  key={image._key ?? index}
                  src={urlFor(image).width(800).auto("format").url()}
                  alt={`${mural.title} - photograph ${index + 1}`}
                  className="h-auto w-full"
                />
              ))}
            </div>
          )}
        </div>

        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            {mural.category === "commercial-mural"
              ? "Commercial Mural"
              : "Community Mural"}
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            {mural.title}
          </h1>

          {mural.subtitle && (
            <p className="mt-4 text-lg text-zinc-500">
              {mural.subtitle}
            </p>
          )}

          <div className="mt-4 space-y-2 text-sm text-zinc-500">
            {mural.location && <p>{mural.location}</p>}
            {mural.year && <p>{mural.year}</p>}
            {mural.client && <p>{mural.client}</p>}
          </div>

          {mural.description && (
            <div className="mt-10 max-w-md">
              <p className="whitespace-pre-line leading-relaxed text-zinc-700">
                {mural.description}
              </p>
            </div>
          )}

          {mural.concept && (
            <div className="mt-10 max-w-md space-y-3">
              <h2 className="text-xl font-light">Concept</h2>
              <p className="whitespace-pre-line leading-relaxed text-zinc-700">
                {mural.concept}
              </p>
            </div>
          )}

          {mural.collaborators && mural.collaborators.length > 0 && (
            <div className="mt-10 space-y-3">
              <h2 className="text-xl font-light">Collaborators</h2>
              <ul className="space-y-1 text-sm text-zinc-600">
                {mural.collaborators.map((person, index) => (
                  <li key={index}>{person}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
