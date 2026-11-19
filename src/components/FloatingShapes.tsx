import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { CSSProperties } from "react";

type ShapeKind = "cube" | "gyro" | "prism";

interface ShapeConfig {
  kind: ShapeKind;
  size: number;
  top: string;
  left?: string;
  right?: string;
  /** How far (px) the shape drifts across the whole page scroll — the parallax depth. */
  depth: number;
  duration: number;
  reverse?: boolean;
  className?: string;
}

const SHAPES: ShapeConfig[] = [
  { kind: "cube", size: 90, top: "18%", right: "6%", depth: 520, duration: 26 },
  { kind: "gyro", size: 140, top: "62%", left: "-2%", depth: 380, duration: 30, reverse: true },
  { kind: "prism", size: 64, top: "38%", left: "46%", depth: 760, duration: 22, className: "hidden lg:block" },
  { kind: "cube", size: 46, top: "84%", right: "18%", depth: 900, duration: 18, reverse: true },
  { kind: "gyro", size: 70, top: "8%", left: "30%", depth: 640, duration: 24, className: "hidden md:block" },
];

function Cube({ size }: { size: number }) {
  return (
    <div className="shape-cube" style={{ "--s": `${size}px` } as CSSProperties}>
      {["front", "back", "right", "left", "top", "bottom"].map((face) => (
        <span key={face} className={`face face-${face}`} />
      ))}
    </div>
  );
}

function Gyro({ size }: { size: number }) {
  return (
    <div className="shape-gyro" style={{ width: size, height: size }}>
      {[0, 60, 120].map((deg) => (
        <span key={`y${deg}`} style={{ transform: `rotateY(${deg}deg)` }} />
      ))}
      <span className="ring-x" style={{ transform: "rotateX(90deg)" }} />
    </div>
  );
}

function Prism({ size }: { size: number }) {
  return (
    <div className="shape-prism" style={{ width: size, height: size }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} style={{ transform: `translateZ(${(i - 2) * (size / 5)}px) rotateZ(${i * 9}deg)` }} />
      ))}
    </div>
  );
}

function FloatingShape({ shape, progress }: { shape: ShapeConfig; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -shape.depth]);
  const rotate = useTransform(progress, [0, 1], [0, shape.reverse ? -120 : 120]);

  const Shape = shape.kind === "cube" ? Cube : shape.kind === "gyro" ? Gyro : Prism;

  return (
    <motion.div
      className={`absolute ${shape.className ?? ""}`}
      style={{ top: shape.top, left: shape.left, right: shape.right, y, rotateZ: rotate }}
    >
      <div
        className="shape-spin"
        style={{
          animationDuration: `${shape.duration}s`,
          animationDirection: shape.reverse ? "reverse" : "normal",
        }}
      >
        <Shape size={shape.size} />
      </div>
    </motion.div>
  );
}

/** Fixed layer of slowly rotating wireframe 3D shapes with scroll parallax. */
export function FloatingShapes() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60 [perspective:900px]" aria-hidden="true">
      {SHAPES.map((shape, i) => (
        <FloatingShape key={i} shape={shape} progress={progress} />
      ))}
    </div>
  );
}

/** Thin gradient bar at the very top showing reading progress. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-[color:var(--color-accent)] via-[color:var(--color-accent-soft)] to-[color:var(--color-accent-2)]"
      style={{ scaleX }}
    />
  );
}
