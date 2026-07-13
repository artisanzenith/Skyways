import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@lib/utils";
export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />; }
export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) { return <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props} />; }
export function Grid({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("grid gap-6", className)} {...props} />; }
export function Flex({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("flex", className)} {...props} />; }
export function Stack({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("flex flex-col gap-4", className)} {...props} />; }
export function Sidebar({ className, ...props }: ComponentPropsWithoutRef<"aside">) { return <aside className={cn("w-full lg:w-72 lg:shrink-0", className)} {...props} />; }
export function PageWrapper({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("min-h-screen bg-white", className)} {...props} />; }
export function ContentWrapper({ className, ...props }: ComponentPropsWithoutRef<"div">) { return <div className={cn("mx-auto w-full max-w-5xl", className)} {...props} />; }
export const ResponsiveWrapper = Container;
