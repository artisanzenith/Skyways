export type ApiSuccess<T> = { success: true; data: T; meta: { requestId: string; timestamp: string } };
export type ApiFailure = { success: false; error: { code: string; message: string; details?: Record<string, string[]> }; meta: { requestId: string; timestamp: string } };
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
export type ActionResult<T> = { success: true; data: T; message?: string } | { success: false; error: { code: string; message: string; fieldErrors?: Record<string, string[]> } };
