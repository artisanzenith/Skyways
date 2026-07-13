import type { NextRequest } from "next/server";
export function getRequestId(request: NextRequest): string { return request.headers.get("x-request-id") ?? crypto.randomUUID(); }
/** Integration boundary for a future rate-limit provider. */
export async function enforceRateLimit(request: NextRequest): Promise<void> { void request; }
/** Integration boundary for future session and permission checks. */
export async function authorizeRequest(request: NextRequest): Promise<void> { void request; }
