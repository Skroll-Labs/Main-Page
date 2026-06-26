import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TicketFlow — Event Ticketing Software for Sri Lanka",
  description:
    "Sell tickets, send QR codes, and track attendance in real time. TicketFlow is Sri Lanka's B2B ticketing platform built for event organizers.",
  openGraph: {
    title: "TicketFlow — Event Ticketing Software for Sri Lanka",
    description: "Sell tickets, send QR codes, and track attendance in real time. TicketFlow is Sri Lanka's B2B ticketing platform.",
    url: "https://ticketflow.lk",
    siteName: "TicketFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TicketFlow — Event Ticketing Software for Sri Lanka",
    description: "Sell tickets, send QR codes, and track attendance in real time. TicketFlow is Sri Lanka's B2B ticketing platform.",
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
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="font-body-md text-body-md relative min-h-full flex flex-col">
        <MagneticCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
