import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@lib/utils";

type TextProps<T extends ElementType> = ComponentPropsWithoutRef<T> & { as?: T };
export function Heading<T extends ElementType = "h2">({ as, className, ...props }: TextProps<T>) { const Tag = as || "h2"; return <Tag className={cn("text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl", className)} {...props} />; }
export function HeroTitle({ className, ...props }: ComponentPropsWithoutRef<"h1">) { return <h1 className={cn("text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl", className)} {...props} />; }
export function GradientTitle({ className, ...props }: ComponentPropsWithoutRef<"span">) { return <span className={cn("bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent", className)} {...props} />; }
export function Subheading({ className, ...props }: ComponentPropsWithoutRef<"p">) { return <p className={cn("text-lg leading-8 text-slate-600", className)} {...props} />; }
export function Paragraph({ className, ...props }: ComponentPropsWithoutRef<"p">) { return <p className={cn("text-base leading-7 text-slate-600", className)} {...props} />; }
export function Caption({ className, ...props }: ComponentPropsWithoutRef<"span">) { return <span className={cn("text-sm text-slate-500", className)} {...props} />; }
export function Label({ className, ...props }: ComponentPropsWithoutRef<"label">) { return <label className={cn("mb-2 block text-sm font-medium text-slate-700", className)} {...props} />; }
export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) { return <p className={cn("text-sm font-semibold uppercase tracking-[0.25em] text-sky-600", className)} {...props} />; }
export const SectionTitle = Heading;
export function HighlightText({ className, ...props }: ComponentPropsWithoutRef<"mark">) { return <mark className={cn("rounded bg-sky-100 px-1 text-sky-900", className)} {...props} />; }
export function QuoteText({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) { return <blockquote className={cn("border-l-4 border-sky-500 pl-4 text-lg italic leading-8 text-slate-700", className)} {...props} />; }
export function BadgeText({ className, ...props }: ComponentPropsWithoutRef<"span">) { return <span className={cn("inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-800", className)} {...props} />; }
