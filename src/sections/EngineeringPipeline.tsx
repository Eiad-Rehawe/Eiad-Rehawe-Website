import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { pipelineStages } from "@/data/process";

export function EngineeringPipeline() {
  return (
    <section className="relative py-24 sm:py-32" aria-label="Engineering pipeline">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Engineering Approach"
          title="From Idea to Production."
          description="I don't start with code. Every system moves through the same disciplined pipeline before a single feature ships."
          align="center"
        />

        <Reveal delay={0.15} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:gap-x-3">
            {pipelineStages.map((stage, i) => (
              <div key={stage} className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  initial={{ opacity: 0, rotateY: -90, scale: 0.85 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.1 }}
                  style={{ transformPerspective: 800 }}
                >
                  <motion.div
                    whileHover={{ rotateX: 14, rotateY: -14, scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    style={{ transformPerspective: 800 }}
                    data-cursor="interactive"
                    className="glass-panel flex flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-colors hover:border-[color:var(--color-accent-2)]/40 sm:px-6 sm:py-5"
                  >
                    <span className="font-mono text-[10px] text-[color:var(--color-ink-faint)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap font-[var(--font-display)] text-sm font-medium text-[color:var(--color-ink)] sm:text-base">
                      {stage}
                    </span>
                  </motion.div>
                </motion.div>

                {i < pipelineStages.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[color:var(--color-accent-2)]/50"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
