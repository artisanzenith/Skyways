/** Future queue boundary for scheduled and asynchronous work. */
export interface JobQueue { enqueue<T>(name: string, payload: T): Promise<void>; }
