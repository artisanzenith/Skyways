import type { PrismaClient } from "@prisma/client";
import { db } from "@server/database/client";

/** Base class for repositories. Keep Prisma access inside this layer. */
export abstract class BaseRepository {
  protected readonly database: PrismaClient;
  protected constructor(database: PrismaClient = db) { this.database = database; }
}
