"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function FAQ() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        },
      }
    );
  });

  const faqs = [
    {
      q: "How long does setup take?",
      a: "Most teams are up and running within a day — no technical expertise required.",
    },
    {
      q: "What payment gateways do you support?",
      a: "We integrate with leading payment providers to keep checkout fast and secure.",
    },
    {
      q: "Can we white-label our tickets?",
      a: "Yes — fully customize your tickets and checkout pages with your own branding.",
    },
    {
      q: "Is there a free trial?",
      a: "Absolutely. Start your free trial today, no credit card required.",
    },
    {
      q: "What happens if a customer doesn't receive their ticket?",
      a: "Our delivery system automatically retries failed sends and provides full visibility into delivery status.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="w-full py-section-gap bg-background">
      <div className="max-w-3xl mx-auto px-margin-desktop">
      <SectionHeading title="Got Questions? We've Got Answers." />

      <div className="faq-list space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="faq-item opacity-0 group bg-surface rounded-2xl border border-glass-border [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-button-text text-button-text text-on-background outline-none">
              <span>{faq.q}</span>
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-text-secondary font-body-md text-body-md">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
