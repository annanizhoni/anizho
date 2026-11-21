
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectPreview";
import { client } from "@/sanity/lib/client";
import { muralProjectsQuery } from "@/sanity/lib/mural";
import type { Mural } from "@/types";

export default async function MuralsPage() {
  const murals = await client.fetch<Mural[]>(muralProjectsQuery);

  return (
    <Section>
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
          Murals
        </h1>
        <p className="mt-4 text-zinc-500">
          Community murals, commercial projects, and public art.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {murals.map((mural) => (
          <ProjectCard
            key={mural._id}
            project={{
              title: mural.title,
              image: mural.heroImage?.asset?.url ?? "",
              href: `/work/murals/${mural.slug}`,
              details: mural.subtitle,
              location: mural.location,
              year: mural.year,
            }}
          />
        ))}
      </div>
    </Section>
  );
}
