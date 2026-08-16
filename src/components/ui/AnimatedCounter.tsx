import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 90 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.floor(latest)}${suffix}`;
        }
      }),
    [springValue, suffix]
  );

  return (
    <motion.span ref={ref} aria-label={`${value}${suffix}`}>
      0{suffix}
    </motion.span>
  );
}
