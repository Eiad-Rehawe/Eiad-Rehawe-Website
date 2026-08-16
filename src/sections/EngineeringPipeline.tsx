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
          index="06"
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
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel flex flex-col items-center gap-2 rounded-2xl px-5 py-4 sm:px-6 sm:py-5"
                >
                  <span className="font-mono text-[10px] text-[color:var(--color-ink-faint)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap font-[var(--font-display)] text-sm font-medium text-[color:var(--color-ink)] sm:text-base">
                    {stage}
                  </span>
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
