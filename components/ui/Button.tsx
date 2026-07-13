import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "danger" | "success" | "warning" | "cta" | "gradient";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500",
  secondary: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost: "bg-transparent text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-400",
  link: "h-auto rounded-none bg-transparent px-0 py-0 text-sky-700 underline-offset-4 hover:underline focus-visible:ring-sky-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  success: "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500",
  warning: "bg-amber-400 text-slate-950 hover:bg-amber-500 focus-visible:ring-amber-500",
  cta: "bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:ring-sky-500",
  gradient: "bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-lg shadow-sky-600/20 hover:from-sky-700 hover:to-blue-800 focus-visible:ring-sky-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
  icon: "h-11 w-11 p-0",
};

export function Button({
  className, variant = "primary", size = "md", fullWidth, loading, disabled, leftIcon, rightIcon, children, type = "button", ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return <button type={type} disabled={isDisabled} aria-busy={loading || undefined} className={cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant], sizeStyles[size], fullWidth && "w-full", className
  )} {...props}>
    {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : leftIcon ? <span aria-hidden="true">{leftIcon}</span> : null}
    {size !== "icon" ? children : <span className="sr-only">{children}</span>}
    {!loading && rightIcon ? <span aria-hidden="true">{rightIcon}</span> : null}
  </button>;
}
