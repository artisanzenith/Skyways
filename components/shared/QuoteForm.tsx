"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@components/ui/Button";
import { quoteSchema, type QuoteFormValues } from "@lib/validation/quote";

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
      <div className="flex items-center gap-3 text-sky-700">
        <div className="rounded-full bg-sky-100 p-2">
          <Truck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em]">
            Instant Quote
          </p>
          <p className="text-sm text-slate-600">Secure, fast, and human-backed</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
            <input
              {...register("name")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-sky-500"
              placeholder="Jordan Ellis"
            />
            {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
            <input
              {...register("company")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-sky-500"
              placeholder="Northwind Supply"
            />
            {errors.company ? <p className="mt-1 text-sm text-red-600">{errors.company.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
              placeholder="ops@company.com"
            />
            {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
            <input
              {...register("phone")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
              placeholder="(555) 010-2024"
            />
            {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Freight Type</label>
            <select
              {...register("freightType")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
            >
              <option value="">Select service</option>
              <option value="FTL">FTL</option>
              <option value="LTL">LTL</option>
              <option value="Reefer">Reefer</option>
              <option value="Flatbed">Flatbed</option>
            </select>
            {errors.freightType ? <p className="mt-1 text-sm text-red-600">{errors.freightType.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Reference</label>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
              placeholder="PO-1042"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Pickup</label>
            <input
              {...register("pickup")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
              placeholder="Chicago, IL"
            />
            {errors.pickup ? <p className="mt-1 text-sm text-red-600">{errors.pickup.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Delivery</label>
            <input
              {...register("delivery")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
              placeholder="Dallas, TX"
            />
            {errors.delivery ? <p className="mt-1 text-sm text-red-600">{errors.delivery.message}</p> : null}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Shipment Details</label>
          <textarea
            {...register("details")}
            rows={4}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500"
            placeholder="Describe your freight, dimensions, special handling, or deadlines."
          />
        </div>

        <Button type="submit" variant="secondary" fullWidth loading={isSubmitting} rightIcon={<ArrowRight className="h-4 w-4" />}>
          Request a Quote
        </Button>

        <div className="flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Dedicated support
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Secure documents
          </span>
        </div>
      </form>
    </div>
  );
}
