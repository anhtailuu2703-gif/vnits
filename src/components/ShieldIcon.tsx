import React from "react";

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