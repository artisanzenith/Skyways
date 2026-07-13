import type { Metadata } from "next";
import { ArrowRight, Boxes, Container, Droplets, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";

export const metadata: Metadata = {
  title: "Freight Brokerage Services | Skyways Logistics",
  description: "Explore FTL, LTL, flatbed, reefer, power-only, and dedicated freight solutions from Skyways Logistics.",
};

const services = [
  { title: "FTL", description: "Dedicated full truckload support for time-sensitive freight and high-volume lanes.", icon: Truck, href: "/services/ftl" },
  { title: "LTL", description: "Flexible less-than-truckload solutions for regional and national distribution.", icon: Boxes, href: "/services/ltl" },
  { title: "Dry Van", description: "Reliable dry van coverage for palletized, boxed, and general commodity freight.", icon: Container, href: "/services/dry-van" },
  { title: "Reefer", description: "Temperature-sensitive logistics with strict handling and live coordination.", icon: Droplets, href: "/services/reefer" },
  { title: "Flatbed", description: "Specialized open-deck transport for oversized and specialty equipment.", icon: Warehouse, href: "/services/flatbed" },
  { title: "Dedicated Freight", description: "Recurring capacity for manufacturers, retailers, and high-velocity distribution.", icon: ShieldCheck, href: "/services/dedicated" },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Flexible freight solutions for every load and lane"
          description="From full truckload to specialty equipment, we build a transportation plan around your priorities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.7)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Need a custom lane?</p>
              <h2 className="mt-3 text-3xl font-semibold">Let our team route the right capacity for your freight.</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Whether you move one shipment or a nationwide network, we can align service, equipment, and pricing around your flow.
              </p>
            </div>
            <a href="/quote" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Get a quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
