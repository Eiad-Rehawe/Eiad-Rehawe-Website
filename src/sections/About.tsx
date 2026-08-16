import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutParagraphs } from "@/data/profile";

function AbstractMark() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center" aria-hidden="true">
      <div className="absolute h-full w-full animate-pulse-glow rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
      <div className="absolute h-4/5 w-4/5 rounded-full border border-[color:var(--color-border-strong)]" />
      <div className="absolute h-3/5 w-3/5 animate-spin rounded-full border border-dashed border-[color:var(--color-accent-2)]/30 [animation-duration:40s]" />
      <div className="glass-panel flex h-28 w-28 items-center justify-center rounded-2xl border-[color:var(--color-accent)]/25">
        <span className="font-[var(--font-display)] text-2xl font-semibold text-gradient">ER</span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-label="About Eiad Rehawe">
      <div className="container-page">
        <SectionHeading index="08" label="About" title="Behind The Code." />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="hidden lg:block">
            <AbstractMark />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
