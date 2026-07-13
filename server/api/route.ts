import type { NextRequest } from "next/server";
import { apiError } from "@server/api/response";
import { toAppError } from "@server/errors";
import { logger } from "@server/logger";
import { enforceRateLimit, getRequestId } from "@server/security";
export type RouteContext = { requestId: string };
export type RouteHandler = (request: NextRequest, context: RouteContext) => Promise<Response>;
/** Shared guard for API routes; authentication and authorization plug in here later. */
export function createApiRoute(handler: RouteHandler) { return async (request: NextRequest): Promise<Response> => { const requestId = getRequestId(request); try { await enforceRateLimit(request); const response = await handler(request, { requestId }); response.headers.set("X-Request-Id", requestId); return response; } catch (error) { const appError = toAppError(error); logger.error("API request failed", { requestId, code: appError.code, statusCode: appError.statusCode }); return apiError({ code: appError.code, message: appError.message, details: appError.details }, requestId, appError.statusCode); } }; }
