import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Industries Served | Skyways Logistics",
  description: "Skyways Logistics supports manufacturers, retailers, warehouses, importers, exporters, and other supply chain organizations.",
};

const industries = [
  "Manufacturing",
  "Retail",
  "Warehousing",
  "Food & Beverage",
  "Construction",
  "E-Commerce",
  "Import / Export",
  "Automotive",
];

export default function IndustriesPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for high-velocity supply chains"
          description="We support operations that need dependable execution, clear communication, and flexible capacity strategies."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{industry}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tailored freight brokerage support for complex logistics demands and recurring lanes.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
