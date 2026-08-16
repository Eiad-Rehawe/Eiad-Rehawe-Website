import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyWorkWithMe } from "@/data/profile";

export function WhyWorkWithMe() {
  return (
    <section className="relative py-24 sm:py-32" aria-label="Why work with me">
      <div className="container-page">
        <SectionHeading index="03" label="Why Me" title="Engineering With a Business Mindset." />

        <div className="mt-14 divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
          {whyWorkWithMe.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.05}>
              <div className="group flex flex-col gap-3 py-7 transition-colors sm:flex-row sm:items-center sm:gap-8 sm:py-8">
                <span className="font-[var(--font-display)] text-2xl text-[color:var(--color-ink-faint)] transition-colors group-hover:text-[color:var(--color-accent-2)] sm:w-20 sm:text-3xl">
                  {item.index}
                </span>
                <h3 className="font-[var(--font-display)] text-xl font-medium text-[color:var(--color-ink)] sm:w-72 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
