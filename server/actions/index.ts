import "server-only";
import { toAppError } from "@server/errors";
import { logger } from "@server/logger";
import type { ActionResult } from "@server/types/api";
export type ActionContext = { requestId: string };
/** Wrap future "use server" actions to standardize validation, errors, and observability. */
export function createServerAction<Input, Output>(action: (input: Input, context: ActionContext) => Promise<Output>, successMessage?: string) { return async (input: Input): Promise<ActionResult<Output>> => { const requestId = crypto.randomUUID(); try { const data = await action(input, { requestId }); logger.info("Server action completed", { requestId }); return { success: true, data, message: successMessage }; } catch (error) { const appError = toAppError(error); logger.error("Server action failed", { requestId, code: appError.code }); return { success: false, error: { code: appError.code, message: appError.message, fieldErrors: appError.details } }; } }; }
