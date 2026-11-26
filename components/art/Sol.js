const RAYS = Array.from({ length: 12 }, (_, i) => i * 30);

/** Meridian's sun mascot. Rays turn slowly; the face stays still. */
export default function Sol({ className }) {
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label="Sol, the Meridian sun mascot">
      <g className="origin-center animate-spin [animation-duration:40s] [transform-box:fill-box]">
        {RAYS.map((angle) => (
          <rect key={angle} x="114" y="4" width="12" height="30" rx="6" transform={`rotate(${angle} 120 120)`} className="fill-ink" />
        ))}
      </g>
      <circle cx="120" cy="120" r="76" className="fill-sun" />
      <circle cx="78" cy="148" r="9" className="fill-coral" opacity="0.8" />
      <circle cx="162" cy="148" r="9" className="fill-coral" opacity="0.8" />
      <g className="fill-ink">
        <circle cx="92" cy="112" r="21" />
        <circle cx="148" cy="112" r="21" />
        <rect x="108" y="108" width="24" height="7" rx="3.5" />
      </g>
      <g className="fill-bone">
        <circle cx="85" cy="105" r="5" />
        <circle cx="141" cy="105" r="5" />
      </g>
      <path d="M96 150q24 24 48 0" fill="none" strokeWidth="7" strokeLinecap="round" className="stroke-ink" />
    </svg>
  );
}
