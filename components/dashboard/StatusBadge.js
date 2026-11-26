import { cn } from "@/lib/utils";

const STYLES = {
  Active: "bg-lime",
  Invited: "bg-sun",
  Suspended: "bg-coral",
};

export default function StatusBadge({ status }) {
  return <span className={cn("inline-block rounded-full px-3 py-1 text-xs font-bold", STYLES[status])}>{status}</span>;
}
