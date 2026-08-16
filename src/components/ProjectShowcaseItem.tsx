import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/utils";

interface ProjectShowcaseItemProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectShowcaseItem({ project, index, onOpenCaseStudy }: ProjectShowcaseItemProps) {
  const reversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        className={cn("lg:col-span-7", reversed ? "lg:order-2" : "lg:order-1")}
      >
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          data-cursor="project"
          aria-label={`View case study for ${project.name}`}
          className="block w-full text-left"
        >
          <ProjectVisual index={index} name={project.name} category={project.category} />
        </button>
      </motion.div>

      <div className={cn("lg:col-span-5", reversed ? "lg:order-1" : "lg:order-2")}>
        <span className="font-[var(--font-display)] text-sm text-[color:var(--color-accent-2)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-ink-faint)]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-5">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            data-cursor="interactive"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent-2)] transition-opacity hover:opacity-80"
          >
            View Case Study
            <ArrowUpRight size={15} />
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              data-cursor="interactive"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink-muted)] transition-colors hover:border-[color:var(--color-accent-2)] hover:text-[color:var(--color-accent-2)]"
            >
              <GithubIcon size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              data-cursor="interactive"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink-muted)] transition-colors hover:border-[color:var(--color-accent-2)] hover:text-[color:var(--color-accent-2)]"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
