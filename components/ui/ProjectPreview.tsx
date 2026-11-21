
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-zinc-200">
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
        )}
      </div>

      <div className="mt-5 space-y-1">
        <h3 className="text-2xl font-light tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
          {project.subtitle}
        </p>

        <p className="text-sm text-zinc-500">
          {project.location} · {project.year}
        </p>
      </div>
    </Link>
  );
}