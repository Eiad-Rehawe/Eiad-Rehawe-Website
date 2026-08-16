import type { LucideIcon } from "lucide-react";
import { Server, MonitorSmartphone, Smartphone, Database, Cloud, BrainCircuit } from "lucide-react";

export interface TechCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const technologyCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    items: ["Laravel", "PHP", "FastAPI", "Python"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: MonitorSmartphone,
    items: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQL Server", "Redis"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: Cloud,
    items: ["Docker", "Linux", "Git"],
  },
  {
    id: "ai",
    title: "AI",
    icon: BrainCircuit,
    items: ["RAG", "LLM APIs", "AI Integrations"],
  },
];
