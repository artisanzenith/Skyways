"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "@components/icons/registry";
import { ROUTES } from "@constants/routes";
import { navItems, mobileNavItems } from "@config/navigation";
import { siteConfig } from "@config/site";
import { cn } from "@lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-white/95 transition-shadow duration-300 backdrop-blur",
      isSticky ? "shadow-sm" : "shadow-none"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} className="flex items-center gap-3 text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-lg font-semibold text-white">
            {siteConfig.logoText[0]}
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{siteConfig.logoText}</p>
            <p className="text-base font-semibold text-slate-950">{siteConfig.legalName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={ROUTES.contact} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
            Contact
          </Link>
          <Link
            href={ROUTES.quote}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="space-y-3">
            {mobileNavItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                {item.label}
              </Link>
            ))}
            <Link href={ROUTES.contact} onClick={() => setIsOpen(false)} className="block rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white text-center">
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
