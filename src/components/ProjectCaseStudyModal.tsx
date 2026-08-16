import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="glass-panel relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border-[color:var(--color-accent)]/15 p-6 sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              data-cursor="interactive"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink-muted)] transition-colors hover:border-[color:var(--color-accent-2)] hover:text-[color:var(--color-accent-2)]"
            >
              <X size={18} />
            </button>

            <span className="section-label">{project.category}</span>
            <h3 id="case-study-title" className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
              {project.name}
            </h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="section-label mb-2">The Challenge</h4>
                <p className="text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
                  {project.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="section-label mb-2">The Solution</h4>
                <p className="text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="section-label mb-5">Architecture</h4>
              <div className="flex flex-col items-stretch gap-2">
                {project.caseStudy.architecture.map((layer, i) => (
                  <div key={layer} className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-center text-sm text-[color:var(--color-ink)]"
                    >
                      {layer}
                    </motion.div>
                    {i < project.caseStudy.architecture.length - 1 && (
                      <ArrowDown size={16} className="my-1 text-[color:var(--color-accent-2)]" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h4 className="section-label mb-3">Technology</h4>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-ink-faint)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[color:var(--color-border)] pt-6">
              <h4 className="section-label mb-2">Result</h4>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
                {project.caseStudy.result}
              </p>
            </div>

            <a
              href={createWhatsAppLink(siteConfig.whatsappMessages.project(project.name))}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="btn-primary glow-accent mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:brightness-110"
            >
              Discuss a Similar Project
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
