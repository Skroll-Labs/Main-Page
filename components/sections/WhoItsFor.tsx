"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function WhoItsFor() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".audience-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".audience-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section id="who-its-for" ref={ref} className="w-full py-section-gap bg-surface relative">
      {/* Soft ambient radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-coral opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      <SectionHeading 
        title="Engineered for Operations Teams"
      />
      <div className="audience-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Event Organizers",
            description: "Stop juggling spreadsheets and focus on creating memorable experiences.",
            image: "/images/ops-organizer.png"
          },
          {
            title: "Marketing Teams",
            description: "Capture leads and track campaign conversions with real-time analytics.",
            image: "/images/ops-marketing.png"
          },
          {
            title: "Ops Teams",
            description: "Ensure instant check-ins and eliminate queues at the door.",
            image: "/images/ops-checkin.png"
          },
          {
            title: "Enterprise",
            description: "Scale your ticketing operations with custom integrations and dedicated support.",
            image: "/images/ops-enterprise.png"
          },
        ].map((item, idx) => (
          <div key={idx} className="audience-card relative opacity-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-hover transition-all duration-500 hover:-translate-y-1 hover:shadow-hover-card border border-glass-border flex flex-col justify-end min-h-[360px] group">
            
            {/* Background Image */}
            <Image 
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent opacity-90 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <h3 className="font-headline-md text-xl md:text-2xl tracking-tight mb-3 text-white">{item.title}</h3>
              <p className="font-body-md text-body-md text-white/80 max-w-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
