"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function HowItWorks() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".step-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section id="how-it-works" ref={ref} className="w-full py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <SectionHeading title="From Setup to Sold Out — In Four Simple Steps" />

      <div className="steps-grid grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-glass-border"></div>

        {[
          {
            step: "1",
            title: "Set Up Your Event",
            description: "Create ticket tiers, set pricing, and define capacity in minutes.",
          },
          {
            step: "2",
            title: "Customers Buy Tickets",
            description: "Buyers check out securely through your integrated payment gateway.",
          },
          {
            step: "3",
            title: "Instant Delivery",
            description: "QR codes and PDF tickets are automatically sent via email or SMS — no manual work required.",
          },
          {
            step: "4",
            title: "Track & Check In",
            description: "Monitor sales in real time and check attendees in seamlessly at the door.",
          },
        ].map((item) => (
          <div key={item.step} className="step-card opacity-0 relative text-center cursor-hover group">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-coral to-[#ff7e54] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10 border-8 border-surface shadow-sm group-hover:scale-105 group-hover:shadow-hover-button transition-all duration-300">
              {item.step}
            </div>
            <h3 className="font-headline-md text-xl md:text-headline-md text-on-background mb-3">{item.title}</h3>
            <p className="font-body-md text-body-md text-text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
