// Pictogrammes en SVG inline, dessinés au même trait (pas de dépendance).
type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};
const Svg = ({ className = "h-5 w-5", children }: P & { children: React.ReactNode }) => (
  <svg {...base} className={className}>
    {children}
  </svg>
);

export const IconPhone = ({ className }: P) => (
  <Svg className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </Svg>
);
export const IconMail = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
);
export const IconPin = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);
export const IconCalendar = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </Svg>
);
export const IconVisio = ({ className }: P) => (
  <Svg className={className}>
    <rect x="2.5" y="6" width="13" height="12" rx="2" />
    <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
  </Svg>
);
export const IconCabinet = ({ className }: P) => (
  <Svg className={className}>
    <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
  </Svg>
);
export const IconExternal = ({ className = "h-4 w-4" }: P) => (
  <Svg className={className}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Svg>
);
export const IconRetour = ({ className = "h-4 w-4" }: P) => (
  <Svg className={className}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
);
// Flèche des boutons et liens (animée au survol via .fleche)
export const Fleche = ({ className = "fleche h-4 w-4" }: P) => (
  <Svg className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

// ── Pictogrammes des domaines d'intervention (clé = champ icon d'EXPERTISES)
export const ICONES_DOMAINES: Record<string, (p: P) => JSX.Element> = {
  sun: ({ className }) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Svg>
  ),
  shield: ({ className }) => (
    <Svg className={className}>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  creditcard: ({ className }) => (
    <Svg className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19M6 15h4" />
    </Svg>
  ),
  umbrella: ({ className }) => (
    <Svg className={className}>
      <path d="M3 12a9 9 0 0 1 18 0H3ZM12 12v7a2 2 0 0 1-4 0" />
    </Svg>
  ),
  building: ({ className }) => (
    <Svg className={className}>
      <path d="M4 21V5l8-2v18M12 8l8 2v11M2 21h20M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
    </Svg>
  ),
  car: ({ className }) => (
    <Svg className={className}>
      <path d="M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M3 17v-4l2-5h14l2 5v4" />
      <path d="M3 13h18" />
    </Svg>
  ),
  scale: ({ className }) => (
    <Svg className={className}>
      <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7ZM19 7l-3 7a3 3 0 0 0 6 0l-3-7Z" />
    </Svg>
  ),
  heart: ({ className }) => (
    <Svg className={className}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </Svg>
  ),
  key: ({ className }) => (
    <Svg className={className}>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 9-9M17 6l2 2M15 8l2 2" />
    </Svg>
  ),
  users: ({ className }) => (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M18 14a6 6 0 0 1 3 6" />
    </Svg>
  ),
};
