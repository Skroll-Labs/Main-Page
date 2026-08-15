"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FileSpreadsheet, Clock, CreditCard, EyeOff } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import { AmbientCanvasBackground } from "@/components/ui/AmbientCanvasBackground";

export function Problem() {
  const ref = useScrollAnimation(() => {
    // Divider line animation
    gsap.fromTo(
      "#divider1",
      { x: "-100%" },
      { x: "100%", duration: 1.5, ease: "power2.inOut", delay: 0.1 }
    );

    // Fade up staggered items
    gsap.fromTo(
      ".problem-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problem-grid",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <div id="problem" className="relative z-10">
      <div className="w-full h-px bg-glass-border relative overflow-hidden">
        <div
          id="divider1"
          className="absolute top-0 left-0 h-full bg-brand-coral w-full transform -translate-x-full transition-transform duration-1000"
        />
      </div>

      <section
        ref={ref}
        className="w-full py-16 md:py-section-gap bg-section-dark relative overflow-hidden"
      >
        <AmbientCanvasBackground />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <SectionHeading
            title="Still Managing Operations the Hard Way?"
            subtitle="Spreadsheets. Manual follow-ups. Payment reconciliation at midnight. If you're spending more time firefighting than growing, something's broken."
            titleClassName="!text-white"
          />

          <div className="problem-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-16 mb-12 md:mb-16">
            <div className="problem-card relative pt-6 md:pt-8 border-t border-white/10 group cursor-hover">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
                <FileSpreadsheet className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
              </div>
              <h3 className="font-headline-md text-xl md:text-2xl text-white mb-2 md:mb-3 text-balance">
                Manual Spreadsheets
              </h3>
              <p className="font-body-lg text-base md:text-lg text-white/60 leading-relaxed">
                Juggling attendee lists or customer data across disconnected sheets.
              </p>
            </div>

            <div className="problem-card relative pt-6 md:pt-8 border-t border-white/10 group cursor-hover">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
                <Clock className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
              </div>
              <h3 className="font-headline-md text-xl md:text-2xl text-white mb-2 md:mb-3 text-balance">
                Delivery &amp; Follow-up Delays
              </h3>
              <p className="font-body-lg text-base md:text-lg text-white/60 leading-relaxed">
                Sending confirmations or invoices one by one, leading to missed messages.
              </p>
            </div>

            <div className="problem-card relative pt-6 md:pt-8 border-t border-white/10 group cursor-hover">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
                <CreditCard className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
              </div>
              <h3 className="font-headline-md text-xl md:text-2xl text-white mb-2 md:mb-3 text-balance">
                Payment &amp; Checkout Friction
              </h3>
              <p className="font-body-lg text-base md:text-lg text-white/60 leading-relaxed">
                Clunky gateways that frustrate buyers and cause drop-offs.
              </p>
            </div>

            <div className="problem-card relative pt-6 md:pt-8 border-t border-white/10 group cursor-hover">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
                <EyeOff className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
              </div>
              <h3 className="font-headline-md text-xl md:text-2xl text-white mb-2 md:mb-3 text-balance">
                Zero Real-Time Visibility
              </h3>
              <p className="font-body-lg text-base md:text-lg text-white/60 leading-relaxed">
                Flying blind with no live pulse on transactions or operations.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="problem-card font-headline-md text-lg sm:text-xl md:text-headline-md text-white/90 max-w-3xl mx-auto text-balance px-4">
              There&apos;s a faster, simpler way — built for teams that demand flow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
