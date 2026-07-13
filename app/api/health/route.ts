import { createApiRoute } from "@server/api/route";
import { apiSuccess } from "@server/api/response";
import { getHealthStatus } from "@server/monitoring/health";

export const GET = createApiRoute(async (_request, { requestId }) => apiSuccess(getHealthStatus(), requestId));
