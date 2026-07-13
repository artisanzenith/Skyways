import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About Skyways Logistics LLC",
  description: "Learn how Skyways Logistics builds trusted freight brokerage partnerships for shippers and carriers.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Freight brokerage built for clarity, speed, and control"
          description="We combine expert account management, modern operations, and dependable carrier relationships to keep freight moving efficiently."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">Why shippers choose us</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our team brings operational discipline to every shipment, from first-mile coordination to final delivery visibility.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">Why carriers stay with us</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We respect your equipment, your time, and your margins with transparent load planning and dependable communication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
