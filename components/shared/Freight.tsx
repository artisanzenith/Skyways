import type { ReactNode } from "react";
import { Circle, FileText, MapPin, Truck } from "lucide-react";
import { Card, CardDescription, CardTitle, ContentCard } from "@components/ui/Card";
import { DataList, Timeline } from "@components/ui/DataDisplay";
import { StatusBadge, type Status } from "@components/ui/Feedback";

export function ShipmentStatus({ status, label }: { status: Status; label: string }) { return <StatusBadge status={status}>{label}</StatusBadge>; }
export const TrackingTimeline = Timeline;
export function QuoteSummary({ items, total }: { items: Array<{ label: ReactNode; value: ReactNode }>; total?: ReactNode }) { return <Card><CardTitle>Quote summary</CardTitle><DataList items={items} />{total && <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 font-semibold text-slate-950"><span>Total</span><span>{total}</span></div>}</Card>; }
export const CarrierProfile = ContentCard;
export const TruckCard = ContentCard;
export const TrailerCard = ContentCard;
export function ShipmentCard({ title, origin, destination, status = "info", statusLabel = "In transit", children }: { title: string; origin: string; destination: string; status?: Status; statusLabel?: string; children?: ReactNode }) { return <Card variant="hover"><div className="flex items-start justify-between gap-4"><div><CardTitle>{title}</CardTitle><CardDescription>{origin} → {destination}</CardDescription></div><ShipmentStatus status={status} label={statusLabel} /></div>{children && <div className="mt-5">{children}</div>}</Card>; }
export const InvoiceSummary = QuoteSummary;
export const LoadSummary = QuoteSummary;
export function DocumentCard({ title, description, action }: { title: string; description?: string; action?: ReactNode }) { return <Card variant="outlined" className="flex items-center gap-4"><FileText className="h-8 w-8 text-sky-600" aria-hidden="true" /><div className="flex-1"><CardTitle>{title}</CardTitle>{description && <CardDescription>{description}</CardDescription>}</div>{action}</Card>; }
export const RateConfirmationCard = DocumentCard;
export function FutureDispatchBoard({ children }: { children?: ReactNode }) { return <div className="grid gap-4 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 md:grid-cols-3">{children || <p className="text-sm text-slate-500">Dispatch board columns will be composed here.</p>}</div>; }
export function FutureLoadCard({ reference = "Load", origin = "Origin", destination = "Destination" }: { reference?: string; origin?: string; destination?: string }) { return <Card variant="outlined"><div className="flex items-center gap-3 text-slate-500"><Truck className="h-5 w-5" /><span className="text-sm font-medium">{reference}</span></div><div className="mt-4 flex items-center gap-3 text-sm text-slate-700"><MapPin className="h-4 w-4 text-sky-600" />{origin} → {destination}</div></Card>; }
export function FutureTMSComponents({ children }: { children?: ReactNode }) { return <section aria-label="Future TMS component area" className="rounded-3xl border border-dashed border-slate-300 p-6">{children || <div className="flex items-center gap-3 text-sm text-slate-500"><Circle className="h-4 w-4" />TMS UI elements will be assembled here.</div>}</section>; }
