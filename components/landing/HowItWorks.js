import { steps } from "@/lib/content";
import { Section, SectionHeading } from "./Section";

const ART = [
  <svg key="connect" viewBox="0 0 120 80" aria-hidden="true">
    <circle cx="38" cy="40" r="26" className="fill-lime" />
    <circle cx="82" cy="40" r="26" className="fill-sun" opacity="0.9" />
  </svg>,
  <svg key="import" viewBox="0 0 120 80" aria-hidden="true">
    <rect x="8" y="8" width="104" height="18" rx="9" className="fill-coral" />
    <rect x="8" y="31" width="76" height="18" rx="9" className="fill-lime" />
    <rect x="8" y="54" width="48" height="18" rx="9" className="fill-sun" />
  </svg>,
  <svg key="read" viewBox="0 0 120 80" aria-hidden="true">
    <path d="M8 72a52 52 0 01104 0z" className="fill-lime" />
    <path d="M30 72a30 30 0 0160 0z" className="fill-bone" />
  </svg>,
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-4">
      <div className="mx-auto max-w-6xl rounded-[3rem] bg-ink px-6 py-20 text-bone sm:px-12">
        <SectionHeading>Live in one coffee break</SectionHeading>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(({ title, text }, index) => (
            <li key={title} className="flex flex-col rounded-[2rem] bg-bone/10 p-7 transition-colors hover:bg-bone/15">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-lime font-display text-xl font-extrabold text-ink">
                  {index + 1}
                </span>
                <span className="w-24">{ART[index]}</span>
              </div>
              <h3 className="mt-8 text-2xl font-extrabold">{title}</h3>
              <p className="mt-2 text-bone/70">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
