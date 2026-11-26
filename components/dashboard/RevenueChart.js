"use client";

import { useState } from "react";
import BarChart from "@/components/charts/BarChart";
import Card from "@/components/ui/Card";
import SegmentedControl from "@/components/ui/SegmentedControl";
import { months, revenue } from "@/lib/mock-data";

const RANGES = [
  { value: 6, label: "6 months" },
  { value: 12, label: "12 months" },
];

export default function RevenueChart() {
  const [range, setRange] = useState(12);

  return (
    <Card className="p-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-extrabold">Revenue analytics</h2>
        <SegmentedControl label="Chart range" options={RANGES} value={range} onChange={setRange} />
      </div>
      <BarChart data={revenue.slice(-range)} labels={months.slice(-range)} />
    </Card>
  );
}
