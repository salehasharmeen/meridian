import { cn } from "@/lib/utils";

export default function Card({ className, ...props }) {
  return <div className={cn("rounded-3xl bg-bone", className)} {...props} />;
}
