"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { XCircle, FileSpreadsheet, Clock, CreditCard, EyeOff } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function Problem() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".problem-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problem-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <>
      {/* Divider */}
      <div className="w-full h-px bg-glass-border relative overflow-hidden">
        <div id="divider1" className="absolute top-0 left-0 h-full bg-brand-coral w-full transform -translate-x-full transition-transform duration-1000"></div>
      </div>

      <section ref={ref} className="w-full py-16 bg-surface-bright">
        <div className="max-w-container-max mx-auto px-margin-desktop">
        <SectionHeading
          title="Still Managing Tickets the Hard Way?"
          subtitle="Spreadsheets. Manual emails. Payment reconciliation nightmares. If you're spending more time managing logistics than your actual event, something's broken."
        />

        <div className="problem-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="problem-card opacity-0 bg-surface p-8 rounded-[24px] shadow-sm cursor-hover">
            <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-5 h-5 text-error" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-2">Manually tracking</h3>
            <p className="font-body-md text-body-md text-text-secondary">Manually tracking ticket sales across spreadsheets.</p>
          </div>

          <div className="problem-card opacity-0 bg-surface p-8 rounded-[24px] shadow-sm cursor-hover">
            <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-error" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-2">Delays in sending</h3>
            <p className="font-body-md text-body-md text-text-secondary">Delays in sending QR codes and ticket PDFs to buyers.</p>
          </div>

          <div className="problem-card opacity-0 bg-surface p-8 rounded-[24px] shadow-sm cursor-hover">
            <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-5 h-5 text-error" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-2">Payment issues</h3>
            <p className="font-body-md text-body-md text-text-secondary">Payment gateway issues slowing down checkout.</p>
          </div>

          <div className="problem-card opacity-0 bg-surface p-8 rounded-[24px] shadow-sm cursor-hover">
            <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center mb-4">
              <EyeOff className="w-5 h-5 text-error" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-2">No visibility</h3>
            <p className="font-body-md text-body-md text-text-secondary">No real-time visibility into how your event is selling.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="problem-card opacity-0 font-headline-md text-headline-md text-on-background">
            There's a faster, simpler way to run ticketing — and it's built for teams like yours.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}
