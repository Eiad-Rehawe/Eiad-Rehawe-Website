import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { technologyCategories } from "@/data/technology";

export function Technology() {
  return (
    <section id="technology" className="relative py-24 sm:py-32" aria-label="Technology stack">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Technology"
          title="The Technology Behind The Work."
          description="Proven tools, chosen deliberately for the problem at hand — not for the sake of using them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.id} delay={i * 0.06}>
                <TiltCard className="glass-panel group rounded-2xl p-6">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--color-accent)]/0 blur-2xl transition-all duration-500 group-hover:bg-[color:var(--color-accent)]/15" />
                  </div>
                  <div className="depth-2 mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border)] text-[color:var(--color-accent-2)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="depth-1 font-[var(--font-display)] text-lg font-medium text-[color:var(--color-ink)]">
                    {category.title}
                  </h3>
                  <ul className="depth-1 mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[color:var(--color-ink-muted)] transition-colors duration-300 group-hover:border-[color:var(--color-accent-2)]/40 group-hover:text-[color:var(--color-ink)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
