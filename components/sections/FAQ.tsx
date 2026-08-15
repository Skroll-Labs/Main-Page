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
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
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
      question: "How fast can we get started with event ticketing?",
      answer:
        "Most event organizers in Sri Lanka are up and running within a single day with zero technical setup required.",
    },
    {
      question: "What payment gateways are supported?",
      answer:
        "We integrate with leading Sri Lankan (PayHere, etc.) and international card processors for smooth, secure checkout in LKR and USD.",
    },
    {
      question: "Do attendees receive both Email and SMS tickets?",
      answer:
        "Yes. Every ticket purchase automatically triggers instant delivery via both Email and SMS with unique QR codes.",
    },
    {
      question: "How does the Business Solutions arm work?",
      answer:
        "We conduct a deep discovery session into your operational bottleneck, design a bespoke software solution, and build it from the ground up — no generic templates.",
    },
    {
      question: "Can we white-label tickets and interfaces with our own brand?",
      answer:
        "Absolutely. Your tickets, confirmation messages, and customer-facing interfaces are fully customized with your brand identity.",
    },
    {
      question: "Is Skroll built for high-volume scale?",
      answer:
        "Yes. Engineered on modern cloud infrastructure, our systems effortlessly handle high-traffic ticket drops and enterprise-grade data loads.",
    },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className="w-full py-16 md:py-section-gap bg-background border-t border-glass-border relative overflow-hidden"
    >
      <AmbientCanvasBackground />
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <SectionHeading title="Got Questions? We've Got Answers" className="mb-10 md:mb-16" />

        <div className="faq-list space-y-3.5 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="faq-item group rounded-2xl sm:rounded-3xl border border-glass-border [&_summary::-webkit-details-marker]:hidden hover:shadow-hover-card transition-all duration-300 bg-surface/90 backdrop-blur-sm"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer font-button-text text-sm sm:text-button-text text-on-background outline-none min-h-[56px] select-none">
                <span className="group-hover:text-brand-coral transition-colors duration-300 pr-4 text-balance">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-text-secondary group-hover:text-brand-coral" />
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-text-secondary font-body-md text-xs sm:text-sm md:text-body-md leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

