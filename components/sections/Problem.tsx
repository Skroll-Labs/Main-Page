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
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-headline-xl text-4xl md:text-6xl tracking-tight text-white mb-6">
            Still Managing Tickets the Hard Way?
          </h2>
          <p className="font-body-lg text-lg md:text-xl text-white/80 leading-relaxed">
            Spreadsheets. Manual emails. Payment reconciliation nightmares. If you're spending more time managing logistics than your actual event, something's broken.
          </p>
        </div>

        <div className="problem-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="problem-card relative opacity-0 bg-white/5 border border-white/10 p-8 rounded-3xl shadow-none cursor-hover group overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 border border-brand-coral/20 rounded-full flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5 text-brand-coral" />
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-2">Manually tracking</h3>
              <p className="font-body-md text-body-md text-white/70">Manually tracking ticket sales across spreadsheets.</p>
            </div>
          </div>

          <div className="problem-card relative opacity-0 bg-white/5 border border-white/10 p-8 rounded-3xl shadow-none cursor-hover group overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 border border-brand-coral/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-brand-coral" />
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-2">Delays in sending</h3>
              <p className="font-body-md text-body-md text-white/70">Delays in sending QR codes and ticket PDFs to buyers.</p>
            </div>
          </div>

          <div className="problem-card relative opacity-0 bg-white/5 border border-white/10 p-8 rounded-3xl shadow-none cursor-hover group overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 border border-brand-coral/20 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5 text-brand-coral" />
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-2">Payment issues</h3>
              <p className="font-body-md text-body-md text-white/70">Payment gateway issues slowing down checkout.</p>
            </div>
          </div>

          <div className="problem-card relative opacity-0 bg-white/5 border border-white/10 p-8 rounded-3xl shadow-none cursor-hover group overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 border border-brand-coral/20 rounded-full flex items-center justify-center mb-4">
                <EyeOff className="w-5 h-5 text-brand-coral" />
              </div>
              <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-2">No visibility</h3>
              <p className="font-body-md text-body-md text-white/70">No real-time visibility into how your event is selling.</p>
            </div>
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
