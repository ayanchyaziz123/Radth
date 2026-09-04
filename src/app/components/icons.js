const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const IconChip = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconGear = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18.02 5.98l-1.77 1.77M7.75 16.27l-1.77 1.77M18.02 18.02l-1.77-1.77M7.75 7.73L5.98 5.98" />
  </svg>
);

export const IconController = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M7 9h10a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3c-.7 0-1.36-.28-1.85-.77L15 15H9l-1.15 1.23A2.6 2.6 0 0 1 6 17a3 3 0 0 1-3-3v-1a4 4 0 0 1 4-4Z" />
    <path d="M8.5 11v2.5M7.25 12.25h2.5" />
    <circle cx="15.5" cy="11.5" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="13.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const IconRobot = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="5" y="9" width="14" height="10" rx="3" />
    <path d="M12 9V6" />
    <circle cx="12" cy="4.5" r="1.5" />
    <circle cx="9.5" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none" />
    <path d="M9 17.5h6M5 13H3M21 13h-2" />
  </svg>
);

export const IconMonitor = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

export const IconRocket = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M14.5 9.5c1.5-2.5 1.5-5.5 1.5-5.5s-3 0-5.5 1.5C8 7 6.5 10 6.5 10l7.5 7.5s3-1.5 4.5-4c1.5-2.5 1.5-5.5 1.5-5.5" />
    <path d="M6.5 10 4 11.5 6 13.5 6.5 10ZM14 17.5l1.5-2.5 2 2-3.5.5Z" />
    <circle cx="14" cy="10" r="1.5" />
    <path d="M6 16c-1.5 1.5-1.5 4-1.5 4s2.5 0 4-1.5" />
  </svg>
);

export const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);
