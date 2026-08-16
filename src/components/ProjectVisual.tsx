import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GRADIENTS = [
  "from-[#3b6dfb]/25 via-[#22d3ee]/10 to-transparent",
  "from-[#22d3ee]/20 via-[#3b6dfb]/15 to-transparent",
  "from-[#0b1c4a]/60 via-[#3b6dfb]/15 to-transparent",
  "from-[#3b6dfb]/20 via-[#0b1c4a]/40 to-transparent",
];

interface ProjectVisualProps {
  index: number;
  name: string;
  category: string;
}

export function ProjectVisual({ index, name, category }: ProjectVisualProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div ref={ref} className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[color:var(--color-surface)] sm:aspect-[16/9]">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <motion.div style={{ y }} className={`absolute inset-[-6%] bg-gradient-to-br ${gradient}`} aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-start justify-between p-6 sm:p-8" aria-hidden="true">
        <span className="font-mono text-xs text-[color:var(--color-ink-faint)]">
          {String(index + 1).padStart(2, "0")} / {category.toUpperCase()}
        </span>
        <span className="font-[var(--font-display)] text-2xl font-semibold leading-tight text-[color:var(--color-ink)]/90 sm:text-3xl md:text-4xl">
          {name}
        </span>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5" aria-hidden="true" />
    </div>
  );
}
