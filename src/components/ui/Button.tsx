import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "outline" | "glass" | "ghost" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "gradient",
  size = "md",
  icon,
  className,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-blue/50";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5 shadow-lg",
  };

  const variantClasses = {
    gradient: "bg-blue-cyan-gradient text-white hover:opacity-95 hover:shadow-brand-blue/25 hover:scale-[1.02] active:scale-[0.98]",
    outline: "border border-slate-700 bg-space-900/50 text-slate-200 hover:border-brand-blue hover:text-white hover:bg-space-800/80",
    glass: "glass-card text-white hover:border-brand-cyan/60 hover:bg-white/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700",
    danger: "bg-rose-600 text-white hover:bg-rose-500",
  };

  return (
    <button
      className={twMerge(clsx(baseClasses, sizeClasses[size], variantClasses[variant], className))}
      {...props}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </button>
  );
};
