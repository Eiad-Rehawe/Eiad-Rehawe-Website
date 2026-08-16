import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats, trustPoints } from "@/data/profile";

export function TrustStrip() {
  return (
    <section className="relative border-y border-[color:var(--color-border)] py-8 sm:py-10" aria-label="Capabilities overview">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
              {trustPoints.map((point) => (
                <li key={point} className="font-mono text-[11px] tracking-[0.15em] text-[color:var(--color-ink-faint)] sm:text-xs">
                  {point.toUpperCase()}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-[var(--font-display)] text-2xl font-semibold text-[color:var(--color-accent-2)] sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-[color:var(--color-ink-muted)] sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
