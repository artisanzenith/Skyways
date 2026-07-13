import type { Metadata } from "next";
import { PackageSearch, MapPin, ShieldCheck, TimerReset } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button, Input, Label } from "@components/ui";

export const metadata: Metadata = {
  title: "Shipment Tracking | Skyways Logistics",
  description: "Track your freight shipment status, location, ETA, and proof of delivery with Skyways Logistics.",
};

export default function TrackingPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tracking"
          title="Real-time shipment visibility for every move"
          description="Stay informed with milestone updates, current location, and delivery progress from dispatch through arrival."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-sky-100 p-2 text-sky-700">
                <PackageSearch className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Live tracking</p>
                <p className="text-lg font-semibold text-slate-950">Track by reference or BOL</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Label htmlFor="tracking-number" className="sr-only">Tracking number</Label>
              <Input id="tracking-number" placeholder="Enter tracking number" />
            </div>
            <Button className="mt-4" variant="secondary">Check shipment</Button>
          </div>

          <div className="space-y-4">
            {[
              { title: "In Transit", description: "Current route is active and progressing on schedule.", icon: MapPin },
              { title: "ETA Updated", description: "Delivery estimate refreshed with live route conditions.", icon: TimerReset },
              { title: "Secure Status", description: "Documents and milestones remain protected and accessible.", icon: ShieldCheck },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-sky-100 p-2 text-sky-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
