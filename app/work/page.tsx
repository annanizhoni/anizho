import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectPreview";
import { client } from "@/sanity/lib/client";
import { muralProjectsQuery } from "@/sanity/lib/mural"
import type { Mural } from "@/types";

export default async function WorkPage() {
  const murals = await client.fetch<Mural[]>(muralProjectsQuery);

  return (
    <Section>
      <div className="grid gap-20">
        {murals.map((mural) => (
          <ProjectCard
            key={mural._id}
            project={{
              slug: mural.slug,
              title: mural.title,
              subtitle: mural.subtitle,
              category:
                mural.category === "commercial-mural"
                  ? "commercial-mural"
                  : "community-mural",
              year: mural.year ?? 0,
              location: mural.location ?? "",
              featured: mural.featured ?? false,
              heroImage: mural.heroImage?.asset?.url ?? "",
              gallery: mural.gallery?.map((image) => image.asset?.url ?? "") ?? [],
              description: mural.description ?? "",
            }}
          />
        ))}
      </div>
    </Section>
  );
}