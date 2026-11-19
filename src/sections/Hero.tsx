import { lazy, Suspense, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { ArrowDown, /* ArrowRight, */ MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useIsTouchDevice, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const HeroCanvas = lazy(() => import("@/components/three/HeroCanvas").then((m) => ({ default: m.HeroCanvas })));

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE_OUT } },
};

const SPRING = { stiffness: 90, damping: 20, mass: 0.6 };

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const interactive = !isTouch && !reducedMotion;

  // Scroll: the text block tips back into the screen and fades as you leave the hero.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const exitRotateX = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const exitY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const exitScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Pointer: a gentle 3D lean toward the cursor.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const leanY = useSpring(useTransform(mx, [-1, 1], [-6, 6]), SPRING);
  const leanX = useSpring(useTransform(my, [-1, 1], [5, -5]), SPRING);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    mx.set((e.clientX / window.innerWidth) * 2 - 1);
    my.set((e.clientY / window.innerHeight) * 2 - 1);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-radial-glow bg-grid pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-0 opacity-90 [mask-image:radial-gradient(ellipse_60%_60%_at_78%_50%,black,transparent)] md:[mask-image:radial-gradient(ellipse_48%_60%_at_76%_50%,black,transparent)]">
        <Suspense fallback={<div className="h-full w-full" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="container-page relative z-10 [perspective:1200px]">
        <motion.div
          style={
            reducedMotion
              ? undefined
              : { rotateX: exitRotateX, y: exitY, scale: exitScale, opacity: exitOpacity, transformOrigin: "50% 0%" }
          }
        >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={interactive ? { rotateX: leanX, rotateY: leanY, transformStyle: "preserve-3d" } : undefined}
          className="max-w-2xl [transform-origin:0%_50%]"
        >
          <motion.p variants={item} className="section-label mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[color:var(--color-accent-2)]" />
            {siteConfig.title}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold leading-[1.08] text-[color:var(--color-ink)] sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            I Build Software
            <br />
            That Moves <span className="text-gradient">Businesses Forward.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base text-[color:var(--color-ink-muted)] sm:text-lg">
            {siteConfig.shortBio}
          </motion.p>

          <motion.p variants={item} className="mt-3 font-mono text-xs tracking-wide text-[color:var(--color-ink-faint)] sm:text-sm">
            Web platforms&nbsp;·&nbsp;Mobile apps&nbsp;·&nbsp;Business systems&nbsp;·&nbsp;AI-powered solutions
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href={createWhatsAppLink(siteConfig.whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Start a project with Eiad on WhatsApp"
              className="btn-primary glow-accent hover:brightness-110"
            >
              <MessageCircle size={18} />
              Start a Project
            </MagneticButton>

            {/* <MagneticButton
              as="a"
              href="#work"
              className="border border-[color:var(--color-border-strong)] text-[color:var(--color-ink)] hover:border-[color:var(--color-accent-2)]/60"
            >
              Explore My Work
              <ArrowRight size={16} />
            </MagneticButton> */}
          </motion.div>
        </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-ink-faint)] sm:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
