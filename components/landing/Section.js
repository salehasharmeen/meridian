import { cn } from "@/lib/utils";

export function Section({ id, className, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className={cn("mx-auto max-w-6xl px-5 py-24", className)}>{children}</div>
    </section>
  );
}

export function SectionHeading({ children, className }) {
  return (
    <h2 className={cn("max-w-3xl font-extrabold leading-[1.02] text-4xl sm:text-5xl lg:text-6xl", className)}>{children}</h2>
  );
}
