"use client";

import Link from "next/link";
import { Ticket, Cpu, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function TwoPathSplit() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".path-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".path-grid",
          start: "top 85%",
        },
      }
    );
  });

  return (
    <section ref={ref} className="py-12 md:py-24 bg-background px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="path-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Card: For Events */}
        <Link
          href="#events"
          className="path-card bg-surface p-6 sm:p-8 md:p-12 rounded-3xl border border-glass-border hover:-translate-y-2 hover:shadow-hover-card transition-all duration-300 group cursor-hover flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-coral/10 transition-colors duration-300" />
          
          <div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Ticket className="w-6 h-6 md:w-7 md:h-7" />
            </div>

            <span className="font-label-lg text-xs uppercase tracking-widest text-brand-coral font-bold block mb-2 md:mb-3">
              FOR EVENTS
            </span>

            <h2 className="font-headline-lg text-xl sm:text-2xl md:text-3xl font-bold text-on-background tracking-tight mb-3 md:mb-4 group-hover:text-brand-coral transition-colors duration-300 text-balance">
              Ticketing, reimagined.
            </h2>

            <p className="font-body-md text-sm sm:text-base text-text-secondary leading-relaxed mb-6 md:mb-8">
              Sell tickets, send instant QR codes, and run frictionless check-ins without lifting a finger.
            </p>
          </div>

          <div className="flex items-center gap-2 font-button-text text-sm font-semibold text-on-background group-hover:text-brand-coral group-hover:translate-x-1 transition-all duration-300">
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4 text-brand-coral" />
          </div>
        </Link>

        {/* Right Card: For Business */}
        <Link
          href="#solutions"
          className="path-card bg-surface p-6 sm:p-8 md:p-12 rounded-3xl border border-glass-border hover:-translate-y-2 hover:shadow-hover-card transition-all duration-300 group cursor-hover flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-coral/10 transition-colors duration-300" />

          <div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-6 h-6 md:w-7 md:h-7" />
            </div>

            <span className="font-label-lg text-xs uppercase tracking-widest text-brand-coral font-bold block mb-2 md:mb-3">
              FOR BUSINESS
            </span>

            <h2 className="font-headline-lg text-xl sm:text-2xl md:text-3xl font-bold text-on-background tracking-tight mb-3 md:mb-4 group-hover:text-brand-coral transition-colors duration-300 text-balance">
              Problems, solved differently.
            </h2>

            <p className="font-body-md text-sm sm:text-base text-text-secondary leading-relaxed mb-6 md:mb-8">
              Custom software systems and automations built for your exact operational bottleneck. No templates.
            </p>
          </div>

          <div className="flex items-center gap-2 font-button-text text-sm font-semibold text-on-background group-hover:text-brand-coral group-hover:translate-x-1 transition-all duration-300">
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 text-brand-coral" />
          </div>
        </Link>
      </div>
    </section>
  );
}
