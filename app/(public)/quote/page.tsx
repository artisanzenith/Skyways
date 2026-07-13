import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Request a Freight Quote | Skyways Logistics",
  description: "Submit your freight details and get a prompt quote from Skyways Logistics for your next shipment.",
};

export default function QuotePage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Quote"
              title="Start your next freight move with confidence"
              description="Share shipment details and one of our team members will follow up quickly with pricing, service options, and next steps."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 text-sky-700">
                <div className="rounded-full bg-sky-100 p-2">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">What to expect</h3>
              </div>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" /> Fast response from a freight specialist.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" /> Clear equipment and rate options.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" /> Secure document handling and proactive updates.</li>
              </ul>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Your information is handled securely and never shared without consent.
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
