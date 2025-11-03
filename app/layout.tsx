import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pivota — Manage Your Organization Smarter",
    template: "%s | Pivota",
  },
  description:
    "Pivota helps organizations centralize operations, communication, and document management — all in one smart platform built for productivity.",
  keywords: [
    "organization management",
    "team collaboration",
    "document management",
    "business automation",
    "Pivota platform",
  ],
  authors: [{ name: "Pivota Team" }],
  metadataBase: new URL("https://www.pivota.co.ke"),
  openGraph: {
    title: "Pivota — Manage Your Organization Smarter",
    description:
      "All-in-one platform for managing your organization — streamline operations, communication, and growth effortlessly.",
    url: "https://www.pivota.co.ke",
    siteName: "Pivota",
    images: [
      {
        url: "/background.jpg",
        width: 1200,
        height: 630,
        alt: "Pivota platform dashboard preview",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pivota — Manage Your Organization Smarter",
    description:
      "Centralize your operations, teams, and communication in one intuitive platform.",
    images: ["/background.jpg"],
    creator: "@pivota_tech",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.pivota.co.ke",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#165dfc" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="author" content="Pivota Team" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
