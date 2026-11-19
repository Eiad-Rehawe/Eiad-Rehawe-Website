import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { useScrolled } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
// import { MagneticButton } from "@/components/ui/MagneticButton";
// import { createWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5 sm:py-6"
      )}
    >
      <div className="container-page">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass-panel border-[color:var(--color-accent)]/20 shadow-[0_8px_40px_-16px_rgba(59,109,251,0.35)]"
              : "border border-transparent bg-transparent"
          )}
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="font-[var(--font-display)] text-sm font-semibold tracking-widest text-[color:var(--color-ink)]"
            data-cursor="interactive"
          >
            Eiad<span className="text-[color:var(--color-accent-2)]"> </span>Rehawe
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-sm text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-accent-2)]"
                  data-cursor="interactive"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* <div className="hidden lg:block">
            <MagneticButton
              as="a"
              href={createWhatsAppLink(siteConfig.whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Message Eiad on WhatsApp"
              className="btn-primary glow-accent hover:brightness-110"
            >
              Let's Talk
            </MagneticButton>
          </div> */}

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink)] lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-cursor="interactive"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="container-page mt-3 lg:hidden"
          >
            <div className="glass-panel flex flex-col gap-1 rounded-2xl p-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="rounded-lg px-3 py-3 text-sm text-[color:var(--color-ink-muted)] transition-colors hover:bg-white/5 hover:text-[color:var(--color-accent-2)]"
                >
                  {item.label}
                </a>
              ))}
              {/* <a
                href={createWhatsAppLink(siteConfig.whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 rounded-lg px-3 py-3 text-center text-sm font-medium"
              >
                Let's Talk
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
