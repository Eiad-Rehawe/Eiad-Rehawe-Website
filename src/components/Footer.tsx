import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-xs text-[color:var(--color-ink-faint)] sm:flex-row">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span className="font-mono">Eiad Rehawe</span>
      </div>
    </footer>
  );
}
