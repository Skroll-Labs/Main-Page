import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TicketFlow — Ticketing Made Simple, Faster, and Local",
  description:
    "The all-in-one ticketing platform for event organizers. Sell tickets, send QR codes, and check in attendees — without the spreadsheets.",
  openGraph: {
    title: "TicketFlow",
    description: "Sell Tickets. Send QR Codes. Skip the Headaches.",
    url: "https://ticketflow.com",
    siteName: "TicketFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TicketFlow",
    description: "Ticketing made simple, faster, and local.",
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
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="font-body-md text-body-md relative min-h-full flex flex-col">
        <MagneticCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
