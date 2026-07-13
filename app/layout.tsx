import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { Providers } from "@providers/Providers";
import { seoDefaults } from "@config/seo";

export const metadata: Metadata = {
  metadataBase: seoDefaults.metadataBase,
  title: {
    default: seoDefaults.title,
    template: "%s | Skyways Logistics LLC",
  },
  description: seoDefaults.description,
  alternates: {
    canonical: seoDefaults.metadataBase.toString(),
  },
  openGraph: seoDefaults.openGraph,
  twitter: seoDefaults.twitter,
  applicationName: "Skyways Logistics",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-950">
        <Providers>
          <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-slate-950 px-4 py-2 font-semibold text-white focus:not-sr-only">
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div id="main-content" className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
