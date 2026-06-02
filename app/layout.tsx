import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jobflowsos.com"),
  title: "JobflowsOS — Revenue Systems for Local Service Businesses",
  description:
    "We install automated systems that help local service businesses capture inbound leads, respond faster, recover missed calls, automate follow-up, and manage every opportunity in one pipeline. Live in 7 days.",
  keywords: [
    "local service business automation",
    "missed call text back",
    "CRM for contractors",
    "lead follow-up automation",
    "roofing HVAC plumbing CRM",
  ],
  authors: [{ name: "JobflowsOS" }],
  alternates: {
    canonical: "https://jobflowsos.com",
  },
  openGraph: {
    type: "website",
    url: "https://jobflowsos.com",
    siteName: "JobflowsOS",
    title: "JobflowsOS — Revenue Systems for Local Service Businesses",
    description:
      "Automated lead capture, instant response, missed-call recovery, follow-up, and a CRM pipeline — installed and live in 7 days. Built for owner-operators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JobflowsOS — Operational revenue infrastructure for local operators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JobflowsOS — Revenue Systems for Local Service Businesses",
    description:
      "Automated lead capture, instant response, missed-call recovery, follow-up, and a CRM pipeline — installed and live in 7 days.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Script
          id="leadconnector-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a100761975ecd303115e9aa"
          data-source="WEB_USER"
          strategy="afterInteractive"
        /></body>
    </html>
  );
}
