import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-ink text-bone hover:bg-ink/85",
  accent: "bg-lime text-ink hover:bg-bone",
  secondary: "border-2 border-ink hover:bg-ink hover:text-bone",
  ghost: "hover:bg-ink/10",
  danger: "bg-danger text-bone hover:bg-danger/85",
};

const sizes = {
  icon: "h-9 w-9",
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/** Renders a link when `href` is given, otherwise a button. */
export default function Button({ href, variant = "primary", size = "md", className, ...props }) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) return <Link href={href} className={classes} {...props} />;
  return <button type="button" className={classes} {...props} />;
}
