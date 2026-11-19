import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { useIsTouchDevice, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. */
  intensity?: number;
  /** Show the moving light glare that follows the pointer. */
  glare?: boolean;
}

const SPRING = { stiffness: 220, damping: 20, mass: 0.5 };

/**
 * A card that tilts in 3D toward the pointer, lifts off the page and casts a
 * moving glare. Children marked with the `.depth-*` utilities float above the
 * card surface. Falls back to a flat card on touch devices / reduced motion.
 */
export function TiltCard({ children, className, intensity = 12, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = !isTouch && !reducedMotion;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), SPRING);
  const lift = useSpring(useTransform(hover, [0, 1], [0, 30]), SPRING);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareOpacity = useSpring(hover, SPRING);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(111,147,255,0.22), transparent 55%)`;

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !enabled) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleEnter = () => enabled && hover.set(1);
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    hover.set(0);
  };

  return (
    <div className="h-full [perspective:1100px]">
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        style={enabled ? { rotateX, rotateY, z: lift, transformStyle: "preserve-3d" } : undefined}
        className={cn("tilt-card relative h-full will-change-transform", className)}
      >
        {children}
        {glare && enabled && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-screen"
            style={{ background: glareBg, opacity: glareOpacity }}
          />
        )}
      </motion.div>
    </div>
  );
}
