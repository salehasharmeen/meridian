const SKINS = ["#F3D3B5", "#D9A57B", "#B9784B", "#8A5333"];
const BACKDROPS = ["fill-lime", "fill-sun", "fill-coral", "fill-mint"];

// Each hairstyle is split into a layer behind the head and a fringe in front of it.
const HAIRSTYLES = [
  {
    back: (
      <>
        <circle cx="38" cy="50" r="16" />
        <circle cx="82" cy="50" r="16" />
        <circle cx="48" cy="34" r="18" />
        <circle cx="72" cy="34" r="18" />
        <circle cx="60" cy="30" r="16" />
        <circle cx="34" cy="68" r="12" />
        <circle cx="86" cy="68" r="12" />
      </>
    ),
    front: <path d="M37 50c0-14 10-22 23-22s23 8 23 22c-9 0-18-5-23-12-5 7-14 12-23 12z" />,
  },
  {
    back: <path d="M30 92V55c0-19 13-30 30-30s30 11 30 30v37z" />,
    front: <path d="M36 52c0-12 10-20 24-20s24 8 24 20c-12-1-20-6-24-12-4 6-12 11-24 12z" />,
  },
  {
    front: <path d="M35 54c-2-18 8-30 25-30s27 12 25 30c-4-8-10-12-16-14-8 3-20 4-34 14z" />,
  },
  {
    back: <circle cx="60" cy="46" r="34" />,
    front: <path d="M37 52c2-10 12-14 23-14s21 4 23 14c-8-4-14-8-23-8s-15 4-23 8z" />,
  },
  {
    back: <circle cx="60" cy="20" r="11" />,
    front: <path d="M34 58c0-20 12-30 26-30s26 10 26 30c-8-6-16-12-26-14-10 2-18 8-26 14z" />,
    glasses: true,
  },
  {
    back: <path d="M32 100V54c0-20 12-32 28-32s28 12 28 32v46c-6-4-8-10-8-16V60H40v24c0 6-2 12-8 16z" />,
    front: <path d="M36 56c10-4 20-12 24-22 6 10 16 18 26 22-1-14-10-26-26-26S37 42 36 56z" />,
  },
];

const hash = (text) => [...text].reduce((value, char) => (value * 31 + char.charCodeAt(0)) >>> 0, 7);

/** Flat illustrated avatar. The same name always produces the same character. */
export default function Portrait({ name, className }) {
  const seed = hash(name);
  const skin = SKINS[seed % SKINS.length];
  const hair = HAIRSTYLES[(seed >>> 3) % HAIRSTYLES.length];
  const backdrop = BACKDROPS[(seed >>> 5) % BACKDROPS.length];

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect width="120" height="120" className={backdrop} />
      <path d="M16 120c0-22 20-30 44-30s44 8 44 30z" className="fill-ink" />
      <g className="fill-ink">{hair.back}</g>
      <rect x="52" y="78" width="16" height="16" fill={skin} />
      <ellipse cx="60" cy="58" rx="24" ry="27" fill={skin} />
      <g className="fill-ink">{hair.front}</g>
      <g className="fill-ink">
        <circle cx="50" cy="60" r="2.8" />
        <circle cx="70" cy="60" r="2.8" />
      </g>
      <path d="M52 71q8 7 16 0" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-ink" />
      {hair.glasses && (
        <g fill="none" strokeWidth="2.5" className="stroke-ink">
          <circle cx="50" cy="60" r="8" />
          <circle cx="70" cy="60" r="8" />
          <path d="M58 60h4" />
        </g>
      )}
    </svg>
  );
}
