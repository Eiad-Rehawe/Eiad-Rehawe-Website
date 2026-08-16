import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className,
  as = "button",
  href,
  target,
  rel,
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors",
    className
  );

  if (as === "a") {
    return (
      <motion.a
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        data-cursor="interactive"
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      onClick={onClick}
      aria-label={ariaLabel}
      data-cursor="interactive"
      className={classes}
    >
      {children}
    </motion.button>
  );
}
