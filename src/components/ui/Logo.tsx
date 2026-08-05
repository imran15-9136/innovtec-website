"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  variant?: "light" | "dark" | "brand";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  height = 34,
  showTagline = false,
}) => {
  const [imgSrc, setImgSrc] = useState("/logo.png");

  return (
    <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
      {/* PNG Format Logo as Requested */}
      <img
        src={imgSrc}
        alt="Innovtec Logo"
        style={{ height: `${height}px`, width: "auto" }}
        onError={() => setImgSrc("/api/logo-image")}
        className="object-contain transition-transform group-hover:scale-105 duration-200"
      />
      {showTagline && (
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase border-l border-slate-700 pl-2 ml-1">
          AI Engineering
        </span>
      )}
    </Link>
  );
};
