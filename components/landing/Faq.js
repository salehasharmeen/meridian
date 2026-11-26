"use client";

import { useState } from "react";
import Sol from "@/components/art/Sol";
import Icon from "@/components/ui/Icon";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <SectionHeading>Questions, answered</SectionHeading>
        <Sol className="mt-10 hidden w-44 lg:block" />
      </div>

      <div className="space-y-3">
        {faqs.map(({ question, answer }, index) => {
          const open = openIndex === index;
          return (
            <div key={question} className={cn("rounded-3xl px-6 transition-colors duration-300", open ? "bg-lime" : "bg-mint")}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-bold"
              >
                {question}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-bone">
                  <Icon name="plus" className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-45")} />
                </span>
              </button>
              <div className={cn("grid transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")} aria-hidden={!open}>
                <div className="overflow-hidden">
                  <p className="pb-5 leading-relaxed text-ink/75">{answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
