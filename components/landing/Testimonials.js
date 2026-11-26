import Portrait from "@/components/art/Portrait";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";

const CARD_TONES = ["bg-lime", "bg-sun", "bg-mint"];

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading>Teams that stopped guessing</SectionHeading>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map(({ quote, name, role }, index) => (
          <figure
            key={name}
            className={cn(
              "flex flex-col justify-between gap-8 rounded-[2rem] p-7 transition-transform duration-300 hover:-rotate-1",
              CARD_TONES[index],
              index === 1 && "md:mt-10",
            )}
          >
            <blockquote className="font-display text-2xl font-bold leading-snug">“{quote}”</blockquote>
            <figcaption className="flex items-center gap-3">
              <Portrait name={name} className="h-20 w-20 shrink-0 overflow-hidden rounded-3xl" />
              <span>
                <span className="block font-bold">{name}</span>
                <span className="text-sm text-ink/70">{role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
