import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CustomCursor } from "@/components/CustomCursor";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg)]">
      <div className="noise-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
