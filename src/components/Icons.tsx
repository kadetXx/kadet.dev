/* v2 pulled these from the FontAwesome CDN (far fa-clock, far fa-calendar-alt,
   fas fa-long-arrow-alt-*). Inlined so the blog doesn't load a whole icon
   stylesheet for four glyphs. */

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ClockIcon = () => (
  <svg {...base}>
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 4.4V8l2.4 1.5" />
  </svg>
);

export const CalendarIcon = () => (
  <svg {...base}>
    <rect x="1.9" y="3.1" width="12.2" height="11" rx="1.4" />
    <path d="M1.9 6.6h12.2M5.3 1.8v2.6M10.7 1.8v2.6" />
  </svg>
);

export const ArrowLeftIcon = () => (
  <svg {...base}>
    <path d="M13.4 8H2.6M6.5 3.9 2.4 8l4.1 4.1" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg {...base}>
    <path d="M2.6 8h10.8M9.5 3.9 13.6 8l-4.1 4.1" />
  </svg>
);
