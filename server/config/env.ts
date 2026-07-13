import "server-only";

import { z } from "zod";

const serverEnvironmentSchema = z.object({
  DATABASE_URL: z.string().url().optional(),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export type ServerEnvironment = z.infer<typeof serverEnvironmentSchema>;

/** Validates server-only configuration when a server capability is initialized. */
export function getServerEnvironment(): ServerEnvironment {
  return serverEnvironmentSchema.parse({ DATABASE_URL: process.env.DATABASE_URL || undefined, LOG_LEVEL: process.env.LOG_LEVEL, NODE_ENV: process.env.NODE_ENV });
}

export function requireDatabaseUrl(): string {
  const databaseUrl = getServerEnvironment().DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is required before database access can be used.");
  return databaseUrl;
}
