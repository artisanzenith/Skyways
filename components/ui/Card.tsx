import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@lib/utils";

export type CardVariant = "default" | "glass" | "hover" | "outlined" | "muted" | "dark" | "empty";
export type CardProps<T extends ElementType = "div"> = ComponentPropsWithoutRef<T> & { as?: T; variant?: CardVariant; padding?: "none" | "sm" | "md" | "lg" };

const variants: Record<CardVariant, string> = {
  default: "border border-slate-200 bg-white shadow-sm",
  glass: "border border-white/30 bg-white/70 shadow-xl shadow-slate-900/5 backdrop-blur",
  hover: "border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl",
  outlined: "border border-slate-300 bg-transparent",
  muted: "border border-slate-100 bg-slate-50",
  dark: "border border-slate-800 bg-slate-950 text-white",
  empty: "border border-dashed border-slate-300 bg-slate-50 text-slate-600",
};
const padding = { none: "", sm: "p-4", md: "p-6", lg: "p-8" };

export function Card<T extends ElementType = "div">({ as, variant = "default", padding: cardPadding = "md", className, ...props }: CardProps<T>) {
  const Component = as || "div";
  return <Component className={cn("rounded-3xl", variants[variant], padding[cardPadding], className)} {...props} />;
}

export function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("flex items-start justify-between gap-4", className)} {...props} />; }
export function CardTitle({ className, ...props }: ComponentPropsWithoutRef<"h3">) { return <h3 className={cn("text-lg font-semibold tracking-tight text-slate-950", className)} {...props} />; }
export function CardDescription({ className, ...props }: ComponentPropsWithoutRef<"p">) { return <p className={cn("mt-2 text-sm leading-6 text-slate-600", className)} {...props} />; }
export function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("mt-5", className)} {...props} />; }
export function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("mt-6 flex items-center gap-3", className)} {...props} />; }

type PresetCardProps = { title: string; description?: string; media?: ReactNode; footer?: ReactNode; className?: string; children?: ReactNode };
export function ContentCard({ title, description, media, footer, className, children }: PresetCardProps) { return <Card variant="hover" className={className}>{media}<CardContent className={media ? "mt-5" : "mt-0"}><CardTitle>{title}</CardTitle>{description && <CardDescription>{description}</CardDescription>}{children}</CardContent>{footer && <CardFooter>{footer}</CardFooter>}</Card>; }
export const ServiceCard = ContentCard;
export const FeatureCard = ContentCard;
export const IndustryCard = ContentCard;
export const EquipmentCard = ContentCard;
export const TestimonialCard = ContentCard;
export const TeamCard = ContentCard;
export const BlogCard = ContentCard;
export const PricingCard = ContentCard;
export const QuoteCard = ContentCard;
export const CarrierCard = ContentCard;
export const DashboardCard = ContentCard;
export const InformationCard = ContentCard;
export function StatisticsCard({ title, description, children, className }: PresetCardProps) { return <Card className={className}><p className="text-sm font-medium text-slate-600">{title}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{children}</p>{description && <p className="mt-2 text-sm text-slate-500">{description}</p>}</Card>; }
export function EmptyCard({ title, description, children, className }: PresetCardProps) { return <Card variant="empty" className={cn("text-center", className)}><CardTitle>{title}</CardTitle>{description && <CardDescription>{description}</CardDescription>}{children && <CardContent>{children}</CardContent>}</Card>; }
