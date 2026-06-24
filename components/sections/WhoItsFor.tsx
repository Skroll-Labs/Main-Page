"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section id="who-its-for" ref={ref} className="w-full py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <SectionHeading 
        title="Engineered for Operations Teams"
      />
      <div className="audience-grid grid grid-cols-1 md:grid-cols-12 gap-6">
        {[
          {
            title: "Event Organizers",
            description: "Stop juggling spreadsheets and focus on creating memorable experiences.",
            spanClass: "md:col-span-8",
          },
          {
            title: "Marketing Teams",
            description: "Capture leads and track campaign conversions with real-time analytics.",
            spanClass: "md:col-span-4",
          },
          {
            title: "Ops Teams",
            description: "Ensure instant check-ins and eliminate queues at the door.",
            spanClass: "md:col-span-5",
          },
          {
            title: "Enterprise",
            description: "Scale your ticketing operations with custom integrations and dedicated support.",
            spanClass: "md:col-span-7",
          },
        ].map((item, idx) => (
          <div key={idx} className={`audience-card ${item.spanClass} opacity-0 p-10 rounded-[2.5rem] cursor-hover transition-all duration-300 hover:-translate-y-2 hover:shadow-hover-card bg-background border border-glass-border flex flex-col justify-end min-h-[240px]`}>
            <h3 className={`font-headline-md text-xl md:text-2xl tracking-tight mb-3 text-on-background`}>{item.title}</h3>
            <p className={`font-body-md text-body-md text-text-secondary`}>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
