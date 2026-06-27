"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AlertTriangle, Clock, XOctagon, TrendingDown, FileSpreadsheet, XCircle, CreditCard, EyeOff } from "lucide-react";
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
          start: "top 90%"
        }
      }
    );
  });

  return (
    <div className="relative z-10">
      <div className="w-full h-px bg-glass-border relative overflow-hidden">
        <div id="divider1" className="absolute top-0 left-0 h-full bg-brand-coral w-full transform -translate-x-full transition-transform duration-1000"></div>
      </div>

      <section ref={ref} className="w-full py-section-gap bg-section-dark relative">
        <AmbientCanvasBackground />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        <SectionHeading
          title="Still Managing Tickets the Hard Way?"
          subtitle="Spreadsheets. Manual emails. Payment reconciliation nightmares. If you're spending more time managing logistics than your actual event, something's broken."
          titleClassName="!text-white"
        />

        <div className="problem-grid grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-16">
          <div className="problem-card relative opacity-0 pt-8 border-t border-white/10 group cursor-hover">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
              <FileSpreadsheet className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
            </div>
            <h3 className="font-headline-md text-2xl text-white mb-3">Manual Tracking</h3>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed">Manually tracking ticket sales and reconciling payments across disjointed spreadsheets.</p>
          </div>

          <div className="problem-card relative opacity-0 pt-8 border-t border-white/10 group cursor-hover">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
              <Clock className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
            </div>
            <h3 className="font-headline-md text-2xl text-white mb-3">Delivery Delays</h3>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed">Painful delays in generating and sending QR codes and ticket PDFs to eager buyers.</p>
          </div>

          <div className="problem-card relative opacity-0 pt-8 border-t border-white/10 group cursor-hover">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
              <CreditCard className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
            </div>
            <h3 className="font-headline-md text-2xl text-white mb-3">Payment Friction</h3>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed">Clunky payment gateway issues that slow down checkout and increase cart abandonment.</p>
          </div>

          <div className="problem-card relative opacity-0 pt-8 border-t border-white/10 group cursor-hover">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-coral/10 group-hover:border-brand-coral/30 group-hover:-translate-y-1 transition-all duration-300">
              <EyeOff className="w-5 h-5 text-white/70 group-hover:text-brand-coral transition-colors duration-300" />
            </div>
            <h3 className="font-headline-md text-2xl text-white mb-3">Zero Visibility</h3>
            <p className="font-body-lg text-lg text-white/60 leading-relaxed">No real-time visibility into how your event is selling, leaving you guessing on marketing.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="problem-card opacity-0 font-headline-md text-xl md:text-headline-md text-white/90 max-w-3xl mx-auto">
            There's a faster, simpler way to run ticketing — and it's built for teams like yours.
          </p>
        </div>
        </div>
      </section>
    </div>
  );
}
