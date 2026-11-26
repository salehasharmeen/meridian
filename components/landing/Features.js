import Icon from "@/components/ui/Icon";
import { features } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";

const TONES = {
  sun: "bg-sun",
  mint: "bg-mint",
  coral: "bg-coral",
  lime: "bg-lime",
  ink: "bg-ink text-bone",
};

const BAR_HEIGHTS = ["h-8", "h-12", "h-10", "h-16", "h-14", "h-20"];
const PLAN_WIDTHS = ["w-4/5", "w-3/5", "w-2/5"];

function MrrDoodle() {
  return (
    <div className="mt-8 flex items-end gap-2" aria-hidden="true">
      {BAR_HEIGHTS.map((height, i) => (
        <span key={i} className={cn("w-full rounded-t-xl", height, i === BAR_HEIGHTS.length - 1 ? "bg-ink" : "bg-ink/20")} />
      ))}
    </div>
  );
}

function PlansDoodle() {
  return (
    <div className="mt-8 space-y-2" aria-hidden="true">
      {PLAN_WIDTHS.map((width, i) => (
        <span key={width} className={cn("block h-6 rounded-full", width, ["bg-lime", "bg-sun", "bg-coral"][i])} />
      ))}
    </div>
  );
}

const DOODLES = { chart: MrrDoodle, layers: PlansDoodle };

export default function Features() {
  return (
    <Section id="features">
      <SectionHeading>Everything a finance lead asks for on Monday morning</SectionHeading>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {features.map(({ icon, title, text, tone, wide }) => {
          const Doodle = DOODLES[icon];
          return (
            <article
              key={title}
              className={cn(
                "group rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1.5",
                TONES[tone],
                wide ? "sm:col-span-1 lg:col-span-3" : "lg:col-span-2",
              )}
            >
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-full transition-transform duration-300 group-hover:-rotate-12",
                  tone === "ink" ? "bg-lime text-ink" : "bg-ink text-bone",
                )}
              >
                <Icon name={icon} />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
              <p className={cn("mt-2 max-w-sm leading-relaxed", tone === "ink" ? "text-bone/70" : "text-ink/70")}>{text}</p>
              {Doodle && <Doodle />}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
