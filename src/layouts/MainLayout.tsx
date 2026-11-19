import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingShapes, ScrollProgressBar } from "@/components/FloatingShapes";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg)]">
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgressBar />
      <FloatingShapes />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
