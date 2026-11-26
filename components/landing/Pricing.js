"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SegmentedControl from "@/components/ui/SegmentedControl";
import { YEARLY_DISCOUNT, plans } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";

const BILLING = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: `Yearly (save ${YEARLY_DISCOUNT * 100}%)` },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const priceOf = ({ price }) => (billing === "yearly" ? Math.round(price * (1 - YEARLY_DISCOUNT)) : price);

  return (
    <div className="bg-mint">
      <Section id="pricing">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading>Pricing that grows with your revenue</SectionHeading>
          <SegmentedControl label="Billing period" options={BILLING} value={billing} onChange={setBilling} />
        </div>

        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1.5",
                plan.featured ? "bg-ink text-bone md:-my-4 md:py-12" : "bg-bone",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-4 right-6 rotate-3 rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-ink">
                  Most chosen
                </span>
              )}
              <h3 className="text-2xl font-extrabold">{plan.name}</h3>
              <p className={cn("mt-1 text-sm", plan.featured ? "text-bone/70" : "text-muted")}>{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl font-extrabold">${priceOf(plan)}</span>
                <span className="opacity-60">/month</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm font-medium">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-ink">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="#top" variant={plan.featured ? "accent" : "primary"} className="mt-8">
                Choose {plan.name}
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
