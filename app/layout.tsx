import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skroll.lk"),
  title: "Skroll — Event Ticketing Platform & Business Technology Solutions",
  description:
    "Sri Lanka's premier event ticketing platform and custom software solutions studio. Instant QR tickets, local payments, and bespoke business automation.",
  openGraph: {
    title: "Skroll — Event Ticketing Platform & Business Technology Solutions",
    description:
      "Sri Lanka's premier event ticketing platform and custom software solutions studio. Instant QR tickets, local payments, and bespoke business automation.",
    url: "https://skroll.lk",
    siteName: "Skroll",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skroll — Event Ticketing Platform & Business Technology Solutions",
    description:
      "Sri Lanka's premier event ticketing platform and custom software solutions studio. Instant QR tickets, local payments, and bespoke business automation.",
    images: ["/og-image.png"],
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
      className={`${plusJakarta.variable} ${inter.variable} antialiased`}
    >
      <body className="font-body-md text-body-md bg-background text-on-background relative flex flex-col min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

