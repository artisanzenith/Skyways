export type EmailMessage = { to: string[]; subject: string; html: string; text?: string };
/** Provider-neutral email boundary for transactional and notification delivery. */
export interface EmailProvider { send(message: EmailMessage): Promise<{ id: string }>; }
