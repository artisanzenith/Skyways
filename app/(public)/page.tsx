import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Boxes, Clock3, ShieldCheck, TrendingUp, Truck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { ServiceCard } from "@/components/shared/ServiceCard";

export const metadata: Metadata = {
  title: "Skyways Logistics LLC | Freight Brokerage for Modern Supply Chains",
  description: "Skyways Logistics provides premium freight brokerage, shipment visibility, and carrier solutions for modern supply chain operations.",
};

const services = [
  { title: "FTL", description: "Dedicated full truckload capacity for high-priority freight and recurring lanes.", icon: Truck, href: "/services" },
  { title: "LTL", description: "Flexible, cost-efficient solutions for smaller freight moves and mixed shipments.", icon: Boxes, href: "/services" },
  { title: "Reefer", description: "Temperature-sensitive freight with careful handling and clear coordination.", icon: Clock3, href: "/services" },
  { title: "Dedicated Freight", description: "Reliable, recurring capacity for manufacturers and distribution teams.", icon: ShieldCheck, href: "/services" },
];

const pillars = [
  { title: "Transparent operations", description: "Clear communication from quote through delivery.", icon: BadgeCheck },
  { title: "Carrier-ready network", description: "Access to dependable capacity across priority lanes.", icon: TrendingUp },
  { title: "Secure documentation", description: "Shipment records, proof of delivery, and support are all managed with care.", icon: ShieldCheck },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_40%),linear-gradient(135deg,#f8fbff_0%,#eef6ff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-sky-700">
              Premium freight brokerage
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Freight solutions that keep your supply chain moving with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Skyways Logistics helps shippers, carriers, and logistics teams secure reliable capacity, fast response times, and modern shipment visibility.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/tracking" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400">
                Track shipment
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Secure quote intake</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Responsive support</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Modern visibility tools</span>
            </div>
          </div>

          <div className="lg:pl-6">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Skyways"
          title="Enterprise-grade brokerage for growing freight operations"
          description="We give you the clarity and responsiveness needed to move freight smoothly across changing market conditions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Freight brokerage services built around your network"
            description="Choose the equipment and service model that matches each load, lane, and delivery requirement."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_25px_80px_-30px_rgba(15,23,42,0.85)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Ready to move freight?</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s plan the next shipment with a smarter brokerage partner.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                From urgent FTL moves to routine distribution work, our team is ready to support your logistics flow.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
