import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "cyan" | "purple" | "emerald" | "amber" | "rose" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  className,
}) => {
  const variantClasses = {
    blue: "bg-brand-blue/15 text-blue-400 border border-brand-blue/30",
    cyan: "bg-brand-cyan/15 text-cyan-400 border border-brand-cyan/30",
    purple: "bg-brand-purple/15 text-purple-300 border border-brand-purple/30",
    emerald: "bg-brand-emerald/15 text-emerald-400 border border-brand-emerald/30",
    amber: "bg-brand-amber/15 text-amber-400 border border-brand-amber/30",
    rose: "bg-brand-rose/15 text-rose-400 border border-brand-rose/30",
    outline: "bg-space-900/60 text-slate-300 border border-slate-700",
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase",
          variantClasses[variant],
          className
        )
      )}
    >
      {children}
    </span>
  );
};
