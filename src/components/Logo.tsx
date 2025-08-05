import React from "react";

// Wellplate Logo: plate + leaf + checkmark, fresh and friendly
const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Wellplate Logo"
  >
    {/* Plate background */}
    <circle cx="32" cy="32" r="28" fill="#10151B" stroke="#38bdf8" strokeWidth="3" />
    {/* Leaf accent */}
    <ellipse cx="44" cy="22" rx="7" ry="13" fill="#34d399" transform="rotate(-25 44 22)" />
    {/* Plate highlight */}
    <ellipse cx="28" cy="26" rx="13" ry="7" fill="#f0fdfa" fillOpacity="0.12" />
    {/* Checkmark for health */}
    <path
      d="M22 37l7 7 13-13"
      stroke="#34d399"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Plate shadow */}
    <ellipse cx="32" cy="46" rx="16" ry="4" fill="#0f172a" fillOpacity="0.3" />
  </svg>
);

export default Logo;
