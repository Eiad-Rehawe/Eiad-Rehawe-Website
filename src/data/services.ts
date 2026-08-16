import type { LucideIcon } from "lucide-react";
import { Globe, Workflow, Smartphone, Sparkles, Server, Layers } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "web-applications",
    title: "Custom Web Applications",
    description: "Business platforms, dashboards, SaaS products and custom web systems.",
    benefit: "A platform built around how your business actually works, not a generic template.",
    icon: Globe,
  },
  {
    id: "business-systems",
    title: "Business Management Systems",
    description: "Turn manual processes into organized, automated digital workflows.",
    benefit: "Less time on repetitive work, fewer errors, and a clear view of your operations.",
    icon: Workflow,
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Cross-platform mobile apps designed for real-world users.",
    benefit: "One codebase, native-quality experience, faster time to market.",
    icon: Smartphone,
  },
  {
    id: "ai-software",
    title: "AI-Powered Software",
    description: "Integrate AI into existing products or build intelligent applications from scratch.",
    benefit: "Automate decisions and content that used to require manual effort.",
    icon: Sparkles,
  },
  {
    id: "backend-systems",
    title: "APIs & Backend Systems",
    description: "Secure, scalable backend infrastructure for modern applications.",
    benefit: "A foundation that stays stable as your users and data grow.",
    icon: Server,
  },
  {
    id: "system-architecture",
    title: "System Architecture",
    description: "Design the technical foundation before development starts.",
    benefit: "Fewer costly rewrites later — the system is built right the first time.",
    icon: Layers,
  },
];
