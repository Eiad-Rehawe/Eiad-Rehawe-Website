import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Testimonials } from "@/components/Testimonials";
import { projectCategories } from "@/data/profile";

export function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32" aria-label="Types of problems solved">
      <div className="container-page">
        <SectionHeading
          index="08"
          label="Track Record"
          title="Built Around Real-World Problems."
          description="Every project below started as a real operational or business problem — not a demo."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectCategories.map((category, i) => (
            <Reveal key={category} delay={i * 0.06}>
              <TiltCard intensity={14} className="glass-panel flex items-center justify-center rounded-2xl px-5 py-8 text-center">
                <span className="depth-2 font-[var(--font-display)] text-sm font-medium text-[color:var(--color-ink)] sm:text-base">
                  {category}
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Testimonials />
      </div>
    </section>
  );
}
