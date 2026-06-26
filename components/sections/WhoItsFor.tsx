"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

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
    gsap.fromTo(".bento-card", 
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        opacity: 0,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(".bento-label", 
      { opacity: 0, y: 10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 70%",
        }
      }
    );
  });

  return (
    <section id="who-its-for" ref={ref} className="w-full py-section-gap bg-section-dark relative border-t border-surface-dim/20">
      {/* Industrial mechanical background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-surface-dim) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-4 md:left-10 w-[1px] h-full bg-surface-dim/10 pointer-events-none" />
      <div className="absolute top-0 right-4 md:right-10 w-[1px] h-full bg-surface-dim/10 pointer-events-none" />
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="font-semibold text-xs text-deep-teal tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-warm-amber inline-block" />
              Deployment Vectors
            </div>
            <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight text-white uppercase">
              Engineered For<br/>Operations
            </h2>
          </div>
          <div className="font-semibold text-xs text-surface-dim/40 tracking-widest text-left md:text-right max-w-xs">
            MODULAR IMPLEMENTATION<br/>SCALABLE ARCHITECTURE
          </div>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          {audiences.map((item) => (
            <div 
              key={item.id} 
              className={`bento-card relative group overflow-hidden bg-white/5 border border-surface-dim/10 ${item.className}`}
            >
              {/* Background Image with industrial overlay */}
              <div className="absolute inset-0">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-60 opacity-40 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-section-dark via-section-dark/80 to-transparent"></div>
                {/* Mechanical scanline effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-surface-dim/30" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-surface-dim/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-surface-dim/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-surface-dim/30" />

              {/* Content */}
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start bento-label">
                  <div className="font-semibold text-[10px] text-surface-dim/50 tracking-widest px-2 py-1 border border-surface-dim/10 bg-black/50 backdrop-blur-sm">
                    {item.id}
                  </div>
                  <div className="font-semibold text-[10px] text-warm-amber tracking-widest">
                    {item.stats}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-4 text-white uppercase bento-label group-hover:text-warm-amber transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-medium text-sm md:text-base text-surface-dim/60 max-w-md bento-label group-hover:text-surface-dim/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
