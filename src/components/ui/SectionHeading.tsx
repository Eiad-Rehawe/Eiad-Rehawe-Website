import { motion, type Variants } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const EASE = [0.16, 1, 0.3, 1] as const;

const titleContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const word: Variants = {
  hidden: { opacity: 0, rotateX: -90, y: "0.4em" },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function SectionHeading({ index, label, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal rotate={0}>
        <div className={cn("mb-4 flex items-center gap-3 font-mono text-xs", align === "center" && "justify-center")}>
          <span className="text-[color:var(--color-accent)]">{index}</span>
          <motion.span
            className="h-px w-8 origin-left bg-[color:var(--color-accent-2)]/60"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          />
          <span className="section-label">{label}</span>
        </div>
      </Reveal>

      <motion.h2
        variants={titleContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        aria-label={title}
        className="text-3xl font-semibold text-[color:var(--color-ink)] [perspective:900px] sm:text-4xl md:text-5xl"
      >
        {title.split(" ").map((w, i) => (
          <span key={i} aria-hidden="true" className="inline-block whitespace-pre">
            <motion.span
              variants={word}
              className="inline-block [transform-origin:50%_100%] [backface-visibility:hidden]"
            >
              {w}
            </motion.span>
            {" "}
          </span>
        ))}
      </motion.h2>

      {description && (
        <Reveal delay={0.25} rotate={0}>
          <p className="mt-4 text-base text-[color:var(--color-ink-muted)] sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
