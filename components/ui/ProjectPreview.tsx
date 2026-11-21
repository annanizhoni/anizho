
import Link from "next/link";
import type { ProjectCardData } from "@/types";

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="mt-5 space-y-1">
        <h2 className="text-xl font-light tracking-tight transition-colors duration-200 group-hover:text-taupe-500">
          {project.title}
        </h2>

        {project.details && (
          <p className="text-sm text-zinc-500">
            {project.details}
          </p>
        )}

        {(project.location || project.year) && (
          <p className="text-sm text-zinc-500">
            {[project.location, project.year].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </Link>
  );
}
