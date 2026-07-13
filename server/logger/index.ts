import "server-only";
import { getServerEnvironment } from "@server/config/env";
export type LogLevel = "debug" | "info" | "warn" | "error";
export type LogContext = Record<string, unknown>;
const severity: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 };
function write(level: LogLevel, message: string, context: LogContext = {}) { if (severity[level] < severity[getServerEnvironment().LOG_LEVEL]) return; const entry = JSON.stringify({ level, message, timestamp: new Date().toISOString(), ...context }); if (level === "error") console.error(entry); else if (level === "warn") console.warn(entry); else console.info(entry); }
export const logger = { debug: (message: string, context?: LogContext) => write("debug", message, context), info: (message: string, context?: LogContext) => write("info", message, context), warn: (message: string, context?: LogContext) => write("warn", message, context), error: (message: string, context?: LogContext) => write("error", message, context) };
