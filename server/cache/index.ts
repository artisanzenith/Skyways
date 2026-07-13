/** Future cache-provider boundary (memory, Redis, or managed cache). */
export interface CacheProvider { get<T>(key: string): Promise<T | null>; set<T>(key: string, value: T, ttlSeconds?: number): Promise<void>; delete(key: string): Promise<void>; }
