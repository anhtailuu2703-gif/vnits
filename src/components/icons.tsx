import React from "react";

interface IconProps {
  size?: number;
  color?: string;
}

export const ServerIcon: React.FC<IconProps> = ({
  size = 48,
  color = "#0b2c5d",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base rectangle */}
    <rect x="8" y="12" width="48" height="12" rx="2" stroke={color} strokeWidth="2"/>
    <rect x="8" y="28" width="48" height="12" rx="2" stroke={color} strokeWidth="2"/>
    <rect x="8" y="44" width="48" height="12" rx="2" stroke={color} strokeWidth="2"/>
    
    {/* Small dots / indicators */}
    <circle cx="16" cy="18" r="2" fill={color}/>
    <circle cx="16" cy="34" r="2" fill={color}/>
    <circle cx="16" cy="50" r="2" fill={color}/>
  </svg>
);


interface IconProps {
  size?: number;
  color?: string;
}

export const CameraIcon: React.FC<IconProps> = ({
  size = 48,
  color = "#0b2c5d",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="12" y="20" width="40" height="24" rx="4" stroke={color} strokeWidth="2"/>
    <circle cx="32" cy="32" r="6" stroke={color} strokeWidth="2"/>
    <path d="M20 20 L16 16 H48 L44 20" stroke={color} strokeWidth="2" />
  </svg>
);


interface IconProps {
  size?: number;
  color?: string;
}

export const ShieldIcon: React.FC<IconProps> = ({
  size = 48,
  color = "#0b2c5d",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 2 L58 14 V34 C58 50 32 62 32 62 C32 62 6 50 6 34 V14 L32 2 Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M32 16 L32 38"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="32" cy="46" r="4" stroke={color} strokeWidth="2"/>
  </svg>
);