import Portrait from "@/components/art/Portrait";
import { cn } from "@/lib/utils";

export default function Avatar({ name, className }) {
  return <Portrait name={name} className={cn("h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} />;
}
