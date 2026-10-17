"use client";

import React from "react";

interface LogoProps {
  variant?: "dark" | "light"; // dark = for light backgrounds, light = for dark backgrounds
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "h-12 w-auto",
  showText = true,
}) => {
  const isLight = variant === "light";
  const primaryTextColor = isLight ? "#FFFFFF" : "#242021";
  const secondaryTextColor = isLight ? "#EF4444" : "#991B1B";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Exact Vector Recreation of Instagram Silhouette Logo */}
      <svg
        viewBox="0 0 240 76"
        fill="none"
        className="h-full w-auto max-h-14 drop-shadow-sm"
      >
        {/* Car Silhouette Main Flowing Roofline */}
        <path
          d="M 16,36 C 28,31 48,28 76,27 C 92,18 116,10 148,10 C 178,10 206,17 230,28 C 214,29 190,25 168,20 C 146,15 124,13 105,14 C 86,15 67,21 54,28 C 38,31 24,34 16,36 Z"
          fill={primaryTextColor}
        />

        {/* Car Nose / Lower Front Highlight */}
        <path
          d="M 11,40 C 18,36 28,34 40,33 C 32,35 22,37 11,40 Z"
          fill={primaryTextColor}
        />

        {/* Cockpit Window Arc Cutout */}
        <path
          d="M 86,25 C 104,18 130,15 162,17 C 186,19 206,23 218,27 C 200,23 178,19 154,19 C 130,19 108,21 86,25 Z"
          fill={primaryTextColor}
          opacity={isLight ? 0.95 : 0.9}
        />

        {/* Rear Ducktail Spoiler Accent */}
        <path
          d="M 216,27 C 222,26 228,27 232,30 C 226,31 220,30 216,27 Z"
          fill={primaryTextColor}
        />

        {/* Text Line 1: AUTOS CERTIFICADOS */}
        <text
          x="120"
          y="52"
          textAnchor="middle"
          fill={primaryTextColor}
          fontSize="15"
          fontWeight="900"
          fontFamily="var(--font-montserrat), ui-sans-serif, system-ui, sans-serif"
          letterSpacing="2.2"
        >
          AUTOS CERTIFICADOS
        </text>

        {/* Text Line 2: TLALPAN (Wine Red) */}
        <text
          x="120"
          y="69"
          textAnchor="middle"
          fill={secondaryTextColor}
          fontSize="13.5"
          fontWeight="900"
          fontFamily="var(--font-montserrat), ui-sans-serif, system-ui, sans-serif"
          letterSpacing="4.5"
        >
          TLALPAN
        </text>
      </svg>
    </div>
  );
};
