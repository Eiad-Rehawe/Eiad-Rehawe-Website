import type { LucideIcon } from "lucide-react";
import { Search, PenTool, Hammer, Rocket } from "lucide-react";

export const pipelineStages = [
  "Idea",
  "Discovery",
  "Architecture",
  "Development",
  "Testing",
  "Deployment",
  "Scaling",
] as const;

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understand the idea, goals and requirements.",
    icon: Search,
  },
  {
    index: "02",
    title: "Design",
    description: "Plan the architecture, user experience and technical solution.",
    icon: PenTool,
  },
  {
    index: "03",
    title: "Build",
    description: "Develop, integrate and test the product.",
    icon: Hammer,
  },
  {
    index: "04",
    title: "Launch",
    description: "Deploy, monitor and continuously improve.",
    icon: Rocket,
  },
];
