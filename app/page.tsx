import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TwoPathSplit } from "@/components/sections/TwoPathSplit";
import { Integrations } from "@/components/sections/Integrations";
import { Problem } from "@/components/sections/Problem";
import { EventsShowcase } from "@/components/sections/EventsShowcase";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { FAQ } from "@/components/sections/FAQ";
import { RecentBlogs } from "@/components/sections/RecentBlogs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const SITE_URL = "https://skroll.lk";

function HomePageJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Skroll",
    description:
      "Sri Lanka's premier event ticketing platform and custom software solutions studio.",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Skroll",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      "Sri Lanka's premier event ticketing platform and custom software solutions studio.",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Skroll Events",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "LKR",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Skroll Business Solutions",
    serviceType: "Custom Software Engineering & Workflow Automation",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Sri Lanka",
    description:
      "Bespoke digital systems and automated operational pipelines designed to eliminate friction for modern businesses.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can we get started with event ticketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most event organizers in Sri Lanka are up and running within a single day with zero technical setup required.",
        },
      },
      {
        "@type": "Question",
        name: "What payment gateways are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We integrate with leading Sri Lankan (PayHere, etc.) and international card processors for smooth, secure checkout in LKR and USD.",
        },
      },
      {
        "@type": "Question",
        name: "Do attendees receive both Email and SMS tickets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every ticket purchase automatically triggers instant delivery via both Email and SMS with unique QR codes.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Business Solutions arm work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We conduct a deep discovery session into your operational bottleneck, design a bespoke software solution, and build it from the ground up — no generic templates.",
        },
      },
      {
        "@type": "Question",
        name: "Can we white-label tickets and interfaces with our own brand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Your tickets, confirmation messages, and customer-facing interfaces are fully customized with your brand identity.",
        },
      },
      {
        "@type": "Question",
        name: "Is Skroll built for high-volume scale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Engineered on modern cloud infrastructure, our systems effortlessly handle high-traffic ticket drops and enterprise-grade data loads.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <TwoPathSplit />
        <Integrations />
        <Problem />
        <EventsShowcase />
        <SolutionsShowcase />
        <FAQ />
        <RecentBlogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
