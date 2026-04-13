export const ServerIcon = ({ size = 48, color = "#0b2c5d" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="12" width="48" height="12" rx="2" stroke={color} strokeWidth="2"/>
    <rect x="8" y="28" width="48" height="12" rx="2" stroke={color} strokeWidth="2"/>
    <rect x="8" y="44" width="48" height="12" rx="2" stroke={color} strokeWidth="2"/>
    <circle cx="16" cy="18" r="2" fill={color}/>
    <circle cx="16" cy="34" r="2" fill={color}/>
    <circle cx="16" cy="50" r="2" fill={color}/>
  </svg>
);

export const BenefitIcon1 = ({ size = 48, color = "#0b2c5d" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M32 4L4 16v16c0 20 28 24 28 24s28-4 28-24V16L32 4z" stroke={color} strokeWidth="2"/>
    <path d="M32 28v12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="24" r="2" fill={color}/>
  </svg>
);

export const BenefitIcon2 = ({ size = 48, color = "#0b2c5d" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="2"/>
    <path d="M32 12v20l16 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="2" fill={color}/>
  </svg>
);

export const BenefitIcon3 = ({ size = 48, color = "#0b2c5d" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="12" y="12" width="40" height="40" rx="4" stroke={color} strokeWidth="2"/>
    <path d="M12 24h40" stroke={color} strokeWidth="2"/>
    <path d="M24 12v40" stroke={color} strokeWidth="2"/>
  </svg>
);