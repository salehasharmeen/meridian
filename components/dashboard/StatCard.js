import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const TONES = {
  lime: "bg-lime",
  ink: "bg-ink text-bone",
  sun: "bg-sun",
  coral: "bg-coral",
};

export default function StatCard({ label, value, delta, icon, tone }) {
  return (
    <div className={cn("rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1", TONES[tone])}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{label}</span>
        <span className={cn("grid h-9 w-9 place-items-center rounded-full", tone === "ink" ? "bg-lime text-ink" : "bg-ink text-bone")}>
          <Icon name={icon} className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 font-display text-4xl font-extrabold">{value}</p>
      <p className="mt-1 text-sm font-semibold">
        {delta} <span className="font-normal opacity-70">vs last month</span>
      </p>
    </div>
  );
}
