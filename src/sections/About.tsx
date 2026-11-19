import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutParagraphs } from "@/data/profile";

function AbstractMark() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center" aria-hidden="true">
      <div className="absolute h-full w-full animate-pulse-glow rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
      <div className="absolute inset-0 [perspective:900px] [transform-style:preserve-3d]">
        <div className="orbit-ring inset-[6%] animate-[orbit-tilt_22s_linear_infinite]" />
        <div className="orbit-ring inset-[18%] border-dashed animate-[orbit-tilt_14s_linear_infinite_reverse]" />
      </div>
      <div className="[perspective:900px]">
        <div className="cube-logo">
          {[...Array(6)].map((_, i) => (
            <span key={i}>
              <span className="font-[var(--font-display)] text-2xl font-semibold text-gradient">ER</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-label="About Eiad Rehawe">
      <div className="container-page">
        <SectionHeading index="07" label="About" title="Behind The Code." />

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
