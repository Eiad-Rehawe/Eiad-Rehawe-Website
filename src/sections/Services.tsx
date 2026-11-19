import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32" aria-label="Services">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Services"
          title="What You Get, Not What I Use."
          description="Every engagement is built around a business outcome — the technology is simply how I get you there."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={i * 0.06}>
                <TiltCard className="group flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition-colors duration-500 hover:border-[color:var(--color-accent)]/40 sm:p-7">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[color:var(--color-accent)]/0 blur-2xl transition-all duration-500 group-hover:bg-[color:var(--color-accent)]/15" />
                  </div>
                  <div className="depth-2 mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent-2)] shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="depth-1 font-[var(--font-display)] text-lg font-medium text-[color:var(--color-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {service.description}
                  </p>
                  <p className="mt-3 border-t border-[color:var(--color-border)] pt-3 text-sm leading-relaxed text-[color:var(--color-ink-faint)]">
                    {service.benefit}
                  </p>

                  <a
                    href={createWhatsAppLink(siteConfig.whatsappMessages.service(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="interactive"
                    className="depth-1 mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent-2)] transition-opacity hover:opacity-80"
                  >
                    Discuss Your Project
                    <ArrowUpRight size={15} />
                  </a>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
