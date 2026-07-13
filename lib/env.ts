export const env = {
  public: {
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://skywayslogistics.com",
    analyticsProvider: process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "none",
  },
  server: {
    sentryDsn: process.env.SENTRY_DSN ?? "",
    databaseUrl: process.env.DATABASE_URL ?? "",
  },
} as const;
