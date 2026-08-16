import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, i) => (
        <Reveal key={testimonial.name} delay={i * 0.06}>
          <blockquote className="glass-panel h-full rounded-2xl p-6">
            <p className="text-sm leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[color:var(--color-ink)]">
              <span className="font-medium">{testimonial.name}</span>
              <span className="text-[color:var(--color-ink-faint)]"> — {testimonial.role}</span>
            </footer>
          </blockquote>
        </Reveal>
      ))}
    </div>
  );
}
