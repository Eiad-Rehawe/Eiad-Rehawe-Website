import { siteConfig } from "@/config/site";

/**
 * Builds a wa.me deep link with a pre-filled message.
 * Always source the number from siteConfig — never hard-code it in a component.
 */
export function createWhatsAppLink(message: string = siteConfig.whatsappMessages.default): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encoded}`;
}
