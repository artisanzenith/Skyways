export type HealthStatus = { status: "ok"; timestamp: string; service: string };
export function getHealthStatus(): HealthStatus { return { status: "ok", timestamp: new Date().toISOString(), service: "skyways" }; }
