import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

type CursorState = "default" | "interactive" | "project";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const [isActive, setIsActive] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (isTouch) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isActive) setIsActive(true);

      const target = e.target as HTMLElement;
      const projectTarget = target.closest("[data-cursor='project']");
      const interactiveTarget = target.closest("a, button, [data-cursor='interactive']");

      setCursorState(projectTarget ? "project" : interactiveTarget ? "interactive" : "default");
    };

    const onLeave = () => setIsActive(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouch, isActive, x, y]);

  if (isTouch) return null;

  const isBig = cursorState !== "default";

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: cursorState === "project" ? 84 : isBig ? 44 : 16,
          height: cursorState === "project" ? 84 : isBig ? 44 : 16,
          backgroundColor:
            cursorState === "project" ? "rgba(59,109,251,0.15)" : isBig ? "rgba(34,211,238,0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex items-center justify-center rounded-full border border-[color:var(--color-accent-2)]"
      >
        {cursorState === "project" && (
          <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[color:var(--color-ink)]">
            VIEW
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
