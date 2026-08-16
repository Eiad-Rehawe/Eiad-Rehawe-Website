import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectShowcaseItem } from "@/components/ProjectShowcaseItem";
import { ProjectCaseStudyModal } from "@/components/ProjectCaseStudyModal";
import { projects, type Project } from "@/data/projects";

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32" aria-label="Selected work">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Selected Work"
          title="Systems I've Designed & Built."
          description="A closer look at how these problems were engineered into working software — from architecture to production."
        />

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {projects.map((project, i) => (
            <Reveal key={project.id} y={40}>
              <ProjectShowcaseItem project={project} index={i} onOpenCaseStudy={setActiveProject} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectCaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
