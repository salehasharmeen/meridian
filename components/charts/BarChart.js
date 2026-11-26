"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const WIDTH = 640;
const HEIGHT = 260;
const PAD_X = 12;
const LABEL_HEIGHT = 28;
const TOP = 36;
const TOOLTIP = { width: 60, height: 26 };

const THEMES = {
  light: { bar: "fill-ink/15", active: "fill-ink", label: "fill-muted", tipBg: "fill-lime", tipText: "fill-ink" },
  dark: { bar: "fill-bone/15", active: "fill-lime", label: "fill-bone/60", tipBg: "fill-bone", tipText: "fill-ink" },
};

/** Rounded bar chart with hover tooltips. `data` is in thousands of dollars. */
export default function BarChart({ data, labels, theme = "light" }) {
  const [hovered, setHovered] = useState(null);
  const colors = THEMES[theme];
  const active = hovered ?? data.length - 1;

  const slot = (WIDTH - PAD_X * 2) / data.length;
  const barWidth = slot * 0.62;
  const chartHeight = HEIGHT - LABEL_HEIGHT - TOP;
  const max = Math.max(...data);
  const center = (i) => PAD_X + slot * i + slot / 2;
  const heightOf = (value) => Math.max((value / max) * chartHeight, 8);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={`Revenue from ${labels[0]} to ${labels.at(-1)}, ending at $${data.at(-1)}k`}
      className="w-full"
      onPointerLeave={() => setHovered(null)}
    >
      {data.map((value, i) => {
        const height = heightOf(value);
        return (
          <g key={`${data.length}-${labels[i]}`} onPointerEnter={() => setHovered(i)}>
            <rect x={PAD_X + slot * i} y="0" width={slot} height={HEIGHT} fill="transparent" />
            <rect
              x={center(i) - barWidth / 2}
              y={HEIGHT - LABEL_HEIGHT - height}
              width={barWidth}
              height={height}
              rx="10"
              style={{ animationDelay: `${i * 40}ms` }}
              className={cn("origin-bottom animate-grow transition-colors [transform-box:fill-box]", i === active ? colors.active : colors.bar)}
            />
            <text x={center(i)} y={HEIGHT - 8} textAnchor="middle" className={cn("text-[11px]", colors.label)}>
              {labels[i]}
            </text>
          </g>
        );
      })}

      <g pointerEvents="none" transform={`translate(${center(active) - TOOLTIP.width / 2}, ${HEIGHT - LABEL_HEIGHT - heightOf(data[active]) - 34})`}>
        <rect width={TOOLTIP.width} height={TOOLTIP.height} rx={TOOLTIP.height / 2} className={colors.tipBg} />
        <text x={TOOLTIP.width / 2} y="17.5" textAnchor="middle" className={cn("text-xs font-semibold", colors.tipText)}>
          ${data[active]}k
        </text>
      </g>
    </svg>
  );
}
