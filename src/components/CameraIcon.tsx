import React from "react";

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