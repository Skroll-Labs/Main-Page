"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { Users, Megaphone, Settings, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    id: "ORG-01",
    title: "Event Organizers",
    description: "Stop juggling spreadsheets and focus on creating memorable experiences.",
    image: "/images/ops_organizer_light_1782468894503.png",
    className: "md:col-span-8 md:row-span-2 min-h-[400px] md:min-h-[500px]",
    stats: "TKT // 99.9%"
  },
  {
    id: "MKT-02",
    title: "Marketing Teams",
    description: "Capture leads and track campaign conversions with real-time analytics.",
    image: "/images/ops_marketing_light_1782468925575.png",
    className: "md:col-span-4 min-h-[300px]",
    stats: "CONV // 4.2X"
  },
  {
    id: "OPS-03",
    title: "Ops Teams",
    description: "Ensure instant check-ins and eliminate queues at the door.",
    image: "/images/ops_checkin_light_1782468950015.png",
    className: "md:col-span-4 min-h-[300px]",
    stats: "CHK // 0.8S"
  },
  {
    id: "ENT-04",
    title: "Enterprise",
    description: "Scale your ticketing operations with custom integrations and dedicated support.",
    image: "/images/ops_enterprise_light_1782468973849.png",
    className: "md:col-span-12 min-h-[350px]",
    stats: "SLA // 100%"
  },
];

export function WhoItsFor() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(".audience-card", 
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
    <section id="who-its-for" ref={ref} className="w-full py-section-gap bg-section-dark relative border-t border-surface-dim/20">
      {/* Industrial mechanical background accents remain */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-surface-dim) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16">
          <div className="font-semibold text-xs text-deep-teal tracking-[0.2em] mb-4 uppercase inline-flex items-center gap-2">
            Deployment Vectors
          </div>
          <SectionHeading
            title="Engineered For Operations"
            align="center"
            className="!mb-0"
            titleClassName="!text-white"
          />
        </div>

        <div className="audience-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, idx) => {
            // Assign icons based on ID
            let Icon = Users;
            let iconColor = "text-brand-coral";
            if(item.id.includes("MKT")) { Icon = Megaphone; iconColor = "text-fuchsia-400"; }
            if(item.id.includes("OPS")) { Icon = Settings; iconColor = "text-green-400"; }
            if(item.id.includes("ENT")) { Icon = Building2; iconColor = "text-warm-amber"; }

            return (
              <div 
                key={item.id} 
                className="audience-card bg-white/5 border border-surface-dim/10 rounded-[2rem] p-8 md:p-10 hover:-translate-y-1 hover:border-surface-dim/30 transition-all duration-300 cursor-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 ${iconColor}`} strokeWidth={2} />
                  <h3 className="font-headline-md text-2xl md:text-3xl text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body-lg text-lg text-surface-dim/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
