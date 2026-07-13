import type { LoadingState } from "../types/loading";

export type { LoadingState } from "../types/loading";

export function createLoadingState(hasData: boolean, isLoading: boolean, hasError: boolean): LoadingState {
  if (hasError) return "error";
  if (isLoading) return "loading";
  if (hasData) return "success";
  return "idle";
}
