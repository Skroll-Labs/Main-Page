"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import { AmbientCanvasBackground } from "@/components/ui/AmbientCanvasBackground";

export function FAQ() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
    );
  });

  const faqs = [
    {
      question: "How long does it take to get set up?",
      answer: "Minutes. You can create an event, connect your Stripe account, and start selling tickets the same day. No technical knowledge required."
    },
    {
      question: "Do you take a cut of my ticket sales?",
      answer: "We charge a flat platform fee per ticket sold, plus standard Stripe processing fees. You can choose to absorb these fees or pass them on to your buyers."
    },
    {
      question: "Can I customize the checkout experience?",
      answer: "Yes. You can add your own logo, brand colors, and custom fields to collect specific attendee information during the checkout process."
    },
    {
      question: "How do check-ins work on the day of the event?",
      answer: "Use our mobile app to scan QR codes at the door. It syncs in real-time across multiple devices, ensuring nobody can use the same ticket twice."
    },
    {
      question: "Is there a limit on how many tickets I can sell?",
      answer: "No limits. Whether you're hosting an intimate workshop for 20 people or a multi-day festival for 20,000, TicketFlow scales automatically."
    }
  ];

  return (
    <section id="faq" ref={ref} className="w-full py-section-gap bg-section-gradient relative">
      <AmbientCanvasBackground />
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      <SectionHeading title="Got Questions? We've Got Answers." />

      <div className="faq-list space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="faq-item opacity-0 group bg-surface rounded-3xl border border-glass-border [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-button-text text-button-text text-on-background outline-none">
              <span>{faq.question}</span>
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-text-secondary font-body-md text-body-md">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
