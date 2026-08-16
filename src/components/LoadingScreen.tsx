import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[color:var(--color-bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-display)] text-xl tracking-[0.3em] text-[color:var(--color-ink)] sm:text-2xl"
          >
            Eiad Rehawe
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-3 text-xs tracking-[0.4em] text-[color:var(--color-accent)]"
          >
            SOFTWARE ENGINEER
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 h-px w-32 origin-left bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
