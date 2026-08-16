import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ index, label, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("mb-4 flex items-center gap-3 font-mono text-xs", align === "center" && "justify-center")}>
        <span className="text-[color:var(--color-accent)]">{index}</span>
        <span className="h-px w-8 bg-[color:var(--color-border)]" />
        <span className="section-label">{label}</span>
      </div>
      <h2 className="text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-[color:var(--color-ink-muted)] sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
