export default function Logo({ inverted = false }) {
  return (
    <span className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="9" className={inverted ? "fill-lime" : "fill-ink"} />
        <path d="M7 21a8 8 0 0116 0z" className={inverted ? "fill-ink" : "fill-lime"} />
        <rect x="5" y="22.5" width="20" height="2.5" rx="1.25" className={inverted ? "fill-ink" : "fill-lime"} />
      </svg>
      Meridian
    </span>
  );
}
