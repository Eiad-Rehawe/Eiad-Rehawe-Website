import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/data/technology";

export function Technology() {
  return (
    <section id="technology" className="relative py-24 sm:py-32" aria-label="Technology stack">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Technology"
          title="The Technology Behind The Work."
          description="Proven tools, chosen deliberately for the problem at hand — not for the sake of using them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.id} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="glass-panel group relative h-full overflow-hidden rounded-2xl p-6"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--color-accent)]/0 blur-2xl transition-all duration-500 group-hover:bg-[color:var(--color-accent)]/12"
                    aria-hidden="true"
                  />
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border)] text-[color:var(--color-accent-2)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-[var(--font-display)] text-lg font-medium text-[color:var(--color-ink)]">
                    {category.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[color:var(--color-ink-muted)] transition-colors duration-300 group-hover:border-[color:var(--color-accent-2)]/40 group-hover:text-[color:var(--color-ink)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
