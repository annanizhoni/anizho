
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectPreview";
import { client } from "@/sanity/lib/client";
import { signProjectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SignProject } from "@/types";

export default async function SignsWindowsPage() {
  const projects = await client.fetch<SignProject[]>(signProjectsQuery);

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
          Signs & Windows
        </h1>
        <p className="mt-4 text-zinc-500">
          Hand-painted signs, storefront windows, and lettering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={{
              title: project.title,
              image: project.heroImage?.asset?.url
                ? urlFor(project.heroImage).width(900).auto("format").url()
                : "",
              href: `/work/signs-windows/${project.slug}`,
              details:
                project.projectType === "window"
                  ? "Window Painting"
                  : project.projectType === "sign"
                    ? "Hand-Painted Sign"
                    : "Lettering",
              location: project.location,
              year: project.year,
            }}
          />
        ))}
      </div>
    </main>
  );
}
