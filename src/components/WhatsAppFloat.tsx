import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { useScrolled } from "@/hooks/useScrollProgress";

export function WhatsAppFloat() {
  const visible = useScrolled(400);

  return (
    <motion.a
      href={createWhatsAppLink(siteConfig.whatsappMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="interactive"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="safe-b safe-r fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-white shadow-[0_8px_28px_-8px_rgba(59,109,251,0.65)] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={20} strokeWidth={2} />
    </motion.a>
  );
}
