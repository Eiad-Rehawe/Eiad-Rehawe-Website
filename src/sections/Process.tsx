import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { processSteps } from "@/data/process";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32" aria-label="How we work">
      <div className="container-page">
        <SectionHeading index="06" label="How We Work" title="A Clear Path From Idea to Launch." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.index} delay={i * 0.08}>
                <TiltCard className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition-colors duration-500 hover:border-[color:var(--color-accent)]/40">
                  <span className="depth-2 inline-block font-[var(--font-display)] text-3xl font-semibold text-[color:var(--color-border-strong)]">
                    {step.index}
                  </span>
                  <div className="depth-1 mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent-2)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="depth-1 mt-4 font-[var(--font-display)] text-lg font-medium text-[color:var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {step.description}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-16 flex flex-col items-center gap-6 text-center">
          <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
            Have a Project in Mind?
          </h3>
          <MagneticButton
            as="a"
            href={createWhatsAppLink(siteConfig.whatsappMessages.process)}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Start the conversation on WhatsApp"
            className="btn-primary glow-accent hover:brightness-110"
          >
            Let's Get Started
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
