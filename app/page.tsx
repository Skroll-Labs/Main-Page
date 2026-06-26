import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { RecentBlogs } from "@/components/sections/RecentBlogs";

const SITE_URL = "https://ticketflow.lk";

function HomePageJsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "TicketFlow",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Event ticketing platform for Sri Lankan organizers.",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TicketFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "LKR",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does setup take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most teams in Sri Lanka are up and running within a single day — no developer or technical expertise required.",
        },
      },
      {
        "@type": "Question",
        name: "What payment gateways do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TicketFlow integrates with leading Sri Lankan and international payment providers to keep checkout fast, secure, and familiar to your buyers.",
        },
      },
      {
        "@type": "Question",
        name: "Can we white-label our tickets and checkout pages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — fully customise ticket designs, confirmation emails, and checkout pages with your own branding. Your attendees never see TicketFlow's name unless you want them to.",
        },
      },
      {
        "@type": "Question",
        name: "Do you support both email and SMS delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Every ticket is delivered via both email and SMS by default, so no attendee misses their QR code or PDF ticket.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if an attendee doesn't receive their ticket?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our automated delivery system retries failed sends and provides your team with full visibility into every delivery status in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Is TicketFlow suitable for large events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — the platform is built to scale from intimate corporate workshops to major concerts and festivals with thousands of attendees.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default function Home() {
  return (
    <>
      <HomePageJsonLd />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Integrations />
        <Problem />
        <HowItWorks />
        <Features />
        {/*<SocialProof />*/}
        <WhoItsFor />
        <FAQ />
        <RecentBlogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
