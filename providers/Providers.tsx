"use client";

import type { PropsWithChildren } from "react";
import { AnalyticsProvider } from "@providers/AnalyticsProvider";
import { AuthProvider } from "@providers/AuthProvider";
import { NotificationProvider } from "@providers/NotificationProvider";
import { ThemeProvider } from "@providers/ThemeProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
