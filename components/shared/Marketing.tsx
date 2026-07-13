import type { ReactNode } from "react";
import { Card, ContentCard } from "@components/ui/Card";
import { CTASection } from "./Sections";
import { Accordion } from "@components/ui/DataDisplay";

export const HeroBanner = CTASection;
export const CTABanner = CTASection;
export function PartnerLogos({ logos }: { logos: Array<{ name: string; logo?: ReactNode }> }) { return <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">{logos.map((logo) => <div key={logo.name} aria-label={logo.name} className="text-sm font-semibold uppercase tracking-wider text-slate-400">{logo.logo || logo.name}</div>)}</div>; }
export function TrustBadges({ badges }: { badges: Array<{ label: string; icon?: ReactNode }> }) { return <div className="flex flex-wrap gap-3">{badges.map((badge) => <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">{badge.icon}{badge.label}</span>)}</div>; }
export const ReviewCard = ContentCard;
export function FAQAccordion({ items }: { items: Array<{ title: string; content: ReactNode; defaultOpen?: boolean }> }) { return <Accordion items={items} />; }
export function CoverageMapPlaceholder({ className }: { className?: string }) { return <div className={`flex min-h-72 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500 ${className || ""}`}>Coverage map</div>; }
export function ServiceGrid({ children }: { children: ReactNode }) { return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>; }
export const IndustryGrid = ServiceGrid;
export const EquipmentGrid = ServiceGrid;
export function NewsletterBlock({ children }: { children: ReactNode }) { return <Card variant="muted" className="p-6 sm:p-8">{children}</Card>; }
export function ContactBlock({ children }: { children: ReactNode }) { return <Card>{children}</Card>; }
export const CallToActionStrip = CTASection;
