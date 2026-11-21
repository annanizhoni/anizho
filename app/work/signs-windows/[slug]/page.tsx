
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { signProjectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SignProject } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SignProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const projects = await client.fetch<SignProject[]>(signProjectsQuery);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectType =
    project.projectType === "window"
      ? "Window Painting"
      : project.projectType === "sign"
        ? "Hand-Painted Sign"
        : "Lettering";

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/work/signs-windows"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-all duration-200 hover:!text-taupe-400"
      >
        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        <span>Back to Signs & Windows</span>
      </Link>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          {project.heroImage && (
            <img
              src={urlFor(project.heroImage).width(1600).auto("format").url()}
              alt={project.title}
              className="h-auto w-full"
            />
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <img
                  key={image._key ?? index}
                  src={urlFor(image).width(800).auto("format").url()}
                  alt={`${project.title} - photograph ${index + 1}`}
                  className="h-auto w-full"
                />
              ))}
            </div>
          )}
        </div>

        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            {projectType}
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <div className="mt-4 space-y-2 text-sm text-zinc-500">
            {project.year && <p>{project.year}</p>}
            {project.location && <p>{project.location}</p>}
            {project.client && <p>{project.client}</p>}
          </div>

          {project.description && (
            <div className="mt-10 max-w-md">
              <p className="whitespace-pre-line leading-relaxed text-zinc-700">
                {project.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
