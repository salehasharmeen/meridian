import { cn } from "@/lib/utils";

const THEMES = {
  light: { track: "bg-ink/10", selected: "bg-ink text-bone", idle: "text-muted hover:text-ink" },
  dark: { track: "bg-bone/10", selected: "bg-lime text-ink", idle: "text-bone/60 hover:text-bone" },
};

export default function SegmentedControl({ label, options, value, onChange, theme = "light" }) {
  const colors = THEMES[theme];

  return (
    <div role="group" aria-label={label} className={cn("inline-flex rounded-full p-1 text-xs font-semibold", colors.track)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
          className={cn("rounded-full px-3.5 py-1.5 transition-colors", option.value === value ? colors.selected : colors.idle)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
