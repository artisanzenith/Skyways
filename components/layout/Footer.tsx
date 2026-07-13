import Link from "next/link";
import { footerLinkGroups } from "@config/footer";
import { socialLinks } from "@config/social";
import { contactConfig } from "@config/contact";
import { siteConfig } from "@config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{siteConfig.logoText}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Freight brokerage built for scale.</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Modern logistics connections for shippers, carriers, and supply chain teams.
          </p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <div>{contactConfig.email}</div>
            <div>{contactConfig.phone}</div>
            <div>{contactConfig.address}</div>
          </div>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 bg-slate-950/95 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
