"use client";

import { useState } from "react";
import BarChart from "@/components/charts/BarChart";
import SegmentedControl from "@/components/ui/SegmentedControl";
import { previewStats } from "@/lib/content";
import { months, revenue } from "@/lib/mock-data";

const RANGES = [
  { value: 3, label: "3M" },
  { value: 6, label: "6M" },
  { value: 12, label: "12M" },
];

export default function ProductPreview() {
  const [range, setRange] = useState(12);

  return (
    <div className="rounded-[2rem] bg-ink p-5 text-bone sm:p-6">
      <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-bone/60">Monthly recurring revenue</p>
          <p className="mt-1 flex items-center gap-3 font-display text-4xl font-extrabold">
            $52,400
            <span className="rounded-full bg-lime px-2.5 py-1 font-sans text-xs font-bold text-ink">+11.3%</span>
          </p>
        </div>
        <SegmentedControl theme="dark" label="Chart range" options={RANGES} value={range} onChange={setRange} />
      </div>

      <BarChart theme="dark" data={revenue.slice(-range)} labels={months.slice(-range)} />

      <dl className="mt-3 grid grid-cols-3 gap-2">
        {previewStats.map(({ label, value }) => (
          <div key={label} className="rounded-2xl bg-bone/10 p-3">
            <dt className="text-xs text-bone/60">{label}</dt>
            <dd className="font-display text-xl font-bold">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
