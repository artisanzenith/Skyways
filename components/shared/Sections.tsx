import type { ReactNode } from "react";
import { cn } from "@lib/utils";
import { Container, Section } from "@components/ui/Layout";
import { Eyebrow, Heading, Subheading } from "@components/ui/Typography";

type SectionProps = { children: ReactNode; className?: string; containerClassName?: string; eyebrow?: string; title?: string; description?: string };
export function ContentSection({ children, className, containerClassName, eyebrow, title, description }: SectionProps) { return <Section className={className}><Container className={containerClassName}>{(eyebrow || title || description) && <div className="mb-10 max-w-2xl">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}{title && <Heading className={eyebrow ? "mt-3" : ""}>{title}</Heading>}{description && <Subheading className="mt-4">{description}</Subheading>}</div>}{children}</Container></Section>; }
export const HeroSection = ({ children, className, ...props }: SectionProps) => <ContentSection {...props} className={cn("py-20 sm:py-24 lg:py-32", className)}>{children}</ContentSection>;
export const FeatureSection = ContentSection;
export const StatisticsSection = ContentSection;
export const TimelineSection = ContentSection;
export const FAQSection = ContentSection;
export const NewsletterSection = ContentSection;
export function GridSection({ children, className, ...props }: SectionProps) { return <ContentSection {...props}><div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>{children}</div></ContentSection>; }
export function SplitSection({ children, className, ...props }: SectionProps) { return <ContentSection {...props}><div className={cn("grid items-center gap-10 lg:grid-cols-2", className)}>{children}</div></ContentSection>; }
export function CTASection({ children, className, ...props }: SectionProps) { return <Section className={className}><Container><div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10">{(props.eyebrow || props.title || props.description) && <div className="max-w-2xl">{props.eyebrow && <Eyebrow className="text-sky-400">{props.eyebrow}</Eyebrow>}{props.title && <Heading className="mt-3 text-white">{props.title}</Heading>}{props.description && <Subheading className="mt-4 text-slate-300">{props.description}</Subheading>}</div>}{children}</div></Container></Section>; }
