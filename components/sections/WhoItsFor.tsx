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
        title="Built for Teams That Move Fast"
      />
      <div className="audience-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Event Organizers",
            description: "Stop juggling spreadsheets and focus on creating memorable experiences.",
          },
          {
            title: "Marketing Teams",
            description: "Capture leads and track campaign conversions with real-time analytics.",
          },
          {
            title: "Ops Teams",
            description: "Ensure seamless check-ins and eliminate queues at the door.",
          },
          {
            title: "Enterprise",
            description: "Scale your ticketing operations with custom integrations and dedicated support.",
          },
        ].map((item, idx) => (
          <div key={idx} className={`audience-card opacity-0 p-8 rounded-3xl cursor-hover transition-all duration-300 hover:-translate-y-2 hover:shadow-hover-card bg-background border border-glass-border`}>
            <h3 className={`font-headline-md text-xl md:text-headline-md mb-4  text-on-background`}>{item.title}</h3>
            <p className={`font-body-md text-body-md text-text-secondary`}>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
