import { NextResponse } from "next/server";
import type { ApiFailure, ApiSuccess } from "@server/types/api";
export function apiSuccess<T>(data: T, requestId: string, status = 200): NextResponse<ApiSuccess<T>> { return NextResponse.json({ success: true, data, meta: { requestId, timestamp: new Date().toISOString() } }, { status, headers: { "X-Request-Id": requestId } }); }
export function apiError(error: ApiFailure["error"], requestId: string, status = 500): NextResponse<ApiFailure> { return NextResponse.json({ success: false, error, meta: { requestId, timestamp: new Date().toISOString() } }, { status, headers: { "X-Request-Id": requestId } }); }
