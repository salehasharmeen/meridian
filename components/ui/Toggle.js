import { cn } from "@/lib/utils";

export default function Toggle({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn("h-7 w-12 shrink-0 rounded-full p-1 transition-colors", checked ? "bg-ink" : "bg-ink/20")}
      >
        <span className={cn("block h-5 w-5 rounded-full transition-all", checked ? "translate-x-5 bg-lime" : "bg-bone")} />
      </button>
    </div>
  );
}
