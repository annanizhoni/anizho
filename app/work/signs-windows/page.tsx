
import { client } from "@/sanity/lib/client";
import { signProjectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SignProject } from "@/types";

export default async function SignsWindowsPage() {
  const projects = await client.fetch<SignProject[]>(signProjectsQuery);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
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
          <article key={project._id}>
            {project.heroImage?.asset?.url && (
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                <img
                  src={urlFor(project.heroImage).width(900).auto("format").url()}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="mt-5 space-y-1">
              <h2 className="text-xl font-light tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-zinc-500">
                {project.projectType === "window"
                  ? "Window Painting"
                  : project.projectType === "sign"
                    ? "Hand-Painted Sign"
                    : "Lettering"}
                {project.year ? ` · ${project.year}` : ""}
              </p>
              {project.location && (
                <p className="text-sm text-zinc-500">{project.location}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
