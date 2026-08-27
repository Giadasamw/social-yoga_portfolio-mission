/**
 * Simple, elegant line icons for the "We host" cards.
 * Drawn in the cream card-text colour via `currentColor`, one glyph per card.
 */

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: "false" as const,
};

/** Yoga — lotus flower */
export function YogaIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M20 29C16.5 22 16.5 14 20 8C23.5 14 23.5 22 20 29Z" />
      <path d="M20 29C13 24 9 18 9 11C16 13 19 21 20 29" />
      <path d="M20 29C27 24 31 18 31 11C24 13 21 21 20 29" />
      <path d="M8 30C13.5 33.5 26.5 33.5 32 30" />
    </svg>
  );
}

/** Pilates — stacked balance stones (cairn), an allegory of balance and control */
export function PilatesIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <ellipse cx="20" cy="30" rx="10" ry="3.1" />
      <ellipse cx="20" cy="22" rx="7.5" ry="2.8" />
      <ellipse cx="20" cy="14.5" rx="5.4" ry="2.5" />
      <circle cx="20" cy="8.5" r="2.4" />
    </svg>
  );
}

/** Sound — singing bowl with mallet */
export function SoundIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <ellipse cx="20" cy="19" rx="12" ry="3" />
      <path d="M9 19C11 30 29 30 31 19" />
      <path d="M27 7l-3 10" />
      <circle cx="28" cy="6" r="2" />
    </svg>
  );
}

/** Movement — flowing motion lines */
export function MovementIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M8 14C16 10 24 18 32 14" />
      <path d="M8 20C16 16 24 24 32 20" />
      <path d="M8 26C16 22 24 30 32 26" />
    </svg>
  );
}
