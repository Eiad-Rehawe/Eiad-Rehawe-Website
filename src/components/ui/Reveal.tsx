import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** Tilt back in 3D (rotateX) while entering. Set to 0 for a flat reveal. */
  rotate?: number;
}

export function Reveal({ children, className, delay = 0, y = 24, once = true, rotate = 14 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y, rotateX: rotate, scale: rotate ? 0.96 : 1, filter: "blur(6px)" },
        visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" },
      }}
      style={{ transformPerspective: 1200, transformOrigin: "50% 100%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
