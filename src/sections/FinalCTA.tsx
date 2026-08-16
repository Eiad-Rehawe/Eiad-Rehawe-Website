import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

const secondaryChannels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "View my work",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
  },
].filter((channel) => Boolean(channel.href));

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32" aria-label="Start a project">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Let's Talk</span>
          <h2 className="text-balance mt-4 text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl md:text-5xl">
            Have an idea? Let's build something worth talking about.
          </h2>
          <p className="mt-5 text-base text-[color:var(--color-ink-muted)] sm:text-lg">
            Tell me what you're trying to build, what problem you're solving, or even just where you're stuck.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <MagneticButton
            as="a"
            href={createWhatsAppLink(siteConfig.whatsappMessages.finalCta)}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Start a conversation with Eiad on WhatsApp"
            className="btn-primary glow-accent px-9 py-4 text-base hover:brightness-110"
          >
            <MessageCircle size={20} />
            Start a Conversation
          </MagneticButton>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-md gap-4 sm:grid-cols-2">
          {secondaryChannels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.label} delay={0.1 + i * 0.06}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  data-cursor="interactive"
                  className="glass-panel flex flex-col items-center gap-3 rounded-2xl px-4 py-7 text-center transition-colors hover:border-[color:var(--color-accent-2)]/40"
                >
                  <Icon size={20} className="text-[color:var(--color-accent-2)]" />
                  <span className="text-sm font-medium text-[color:var(--color-ink)]">{channel.label}</span>
                  <span className="break-all text-xs text-[color:var(--color-ink-muted)]">{channel.value}</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
