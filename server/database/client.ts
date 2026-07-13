import "server-only";

import { PrismaClient } from "@prisma/client";
import { requireDatabaseUrl } from "@server/config/env";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export function getDatabase(): PrismaClient {
  requireDatabaseUrl();
  return globalForPrisma.prisma ?? (globalForPrisma.prisma = new PrismaClient());
}

export const db = new Proxy({} as PrismaClient, {
  get(_target, property) { return Reflect.get(getDatabase(), property); },
});
