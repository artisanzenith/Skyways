import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactConfig } from "@config/contact";
import { Button, Input, Label, Textarea } from "@components/ui";

export const metadata: Metadata = {
  title: "Contact Skyways Logistics",
  description: "Reach the Skyways Logistics team for freight quotes, support, and partnership discussions.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build a better freight plan together"
          description="Reach out for quote requests, specialized freight needs, or carrier partnership conversations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">Talk to our team</h3>
            <div className="mt-8 space-y-6 text-sm text-slate-300">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-400" /> {contactConfig.email}</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-400" /> {contactConfig.phone}</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sky-400" /> {contactConfig.address}</div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div><Label htmlFor="contact-name" className="sr-only">Name</Label><Input id="contact-name" autoComplete="name" placeholder="Name" /></div>
                <div><Label htmlFor="contact-email" className="sr-only">Email</Label><Input id="contact-email" type="email" autoComplete="email" placeholder="Email" /></div>
              </div>
              <div><Label htmlFor="contact-company" className="sr-only">Company</Label><Input id="contact-company" autoComplete="organization" placeholder="Company" /></div>
              <div><Label htmlFor="contact-message" className="sr-only">How can we help?</Label><Textarea id="contact-message" rows={5} placeholder="How can we help?" /></div>
              <Button type="submit" variant="secondary">Send message</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
