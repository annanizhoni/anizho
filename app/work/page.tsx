import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectPreview";

import { projects } from "@/content/projects";

export default function WorkPage() {
  return (
    <Section>
      <div className="grid gap-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}