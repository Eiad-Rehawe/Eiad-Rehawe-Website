import { MessageCircleQuestion, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { clientProblems } from "@/data/profile";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ClientProblems() {
  return (
    <section className="relative py-24 sm:py-32" aria-label="Problems I solve">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="Sound Familiar?"
          title="Have a Problem? Let's Turn It Into Software."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {clientProblems.map((problem, i) => (
            <Reveal key={problem} delay={i * 0.05}>
              <div className="glass-panel flex items-start gap-4 rounded-2xl p-5 sm:p-6">
                <MessageCircleQuestion
                  size={20}
                  className="mt-0.5 shrink-0 text-[color:var(--color-accent-2)]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
                  &ldquo;{problem}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-6 text-center">
          <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
            I Build The Solution.
          </h3>
          <MagneticButton
            as="a"
            href={createWhatsAppLink(siteConfig.whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Tell Eiad about your problem on WhatsApp"
            className="btn-primary glow-accent hover:brightness-110"
          >
            Tell Me What You're Building
            <ArrowRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
