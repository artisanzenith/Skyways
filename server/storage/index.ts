export type StoredFile = { key: string; url: string; contentType: string; size: number };
/** Provider-neutral storage boundary for local, S3-compatible, and cloud providers. */
export interface StorageProvider { upload(file: Blob, options: { key: string; contentType: string }): Promise<StoredFile>; delete(key: string): Promise<void>; getUrl(key: string): Promise<string>; }
