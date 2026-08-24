"use client";

import Link from "next/link";
import { 
  CreditCard, 
  QrCode, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  ArrowRight 
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function EventsShowcase() {
  const ref = useScrollAnimation(() => {
    // 3-Beat cards animation
    gsap.fromTo(
      ".story-beat-card",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-beat-grid",
          start: "top 80%",
        },
      }
    );

    // Quiet details cards animation
    gsap.fromTo(
      ".detail-card",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".details-grid",
          start: "top 85%",
        },
      }
    );

    // CTA bar animation
    gsap.fromTo(
      ".ticketing-cta-bar",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ticketing-cta-bar",
          start: "top 90%",
        },
      }
    );
  });

  const storyBeats = [
    {
      step: "01",
      title: "Instant Checkout",
      description: "Attendees purchase through secure local (LKR) & international payment gateways in seconds.",
      icon: CreditCard,
    },
    {
      step: "02",
      title: "Silent QR Delivery",
      description: "Automated QR code & PDF tickets delivered via Email & SMS with automated retries.",
      icon: QrCode,
    },
    {
      step: "03",
      title: "Frictionless Gate Entry",
      description: "Sub-second QR scanning that eliminates queues, even in low-connectivity venues.",
      icon: Zap,
    },
  ];

  const quietDetails = [
    {
      title: "White-Labeled Branding",
      description: "Your custom logo, checkout styling, and branded ticket PDFs.",
      icon: Sparkles,
    },
    {
      title: "Fraud-Secure Anti-Duplication",
      description: "Cryptographically verified unique QR codes prevent duplicate entry.",
      icon: ShieldCheck,
    },
    {
      title: "Real-Time Sales Analytics",
      description: "Watch revenue, attendee check-in velocity, and sales channels live.",
      icon: BarChart3,
    },
    {
      title: "Built to Scale",
      description: "Handles high-concurrency ticket drops from 50 to 50,000+ attendees.",
      icon: Layers,
    },
  ];

  return (
    <section 
      id="ticketing" 
      ref={ref} 
      className="w-full py-16 md:py-section-gap bg-background border-t border-glass-border relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Section Heading */}
        <SectionHeading
          title="Sell tickets like it's effortless. Because it is"
          subtitle="Payments, QR entry, and check-ins — running quietly in the background while you focus on the event itself."
          align="center"
          className="mb-12 md:mb-20"
        />

        {/* 3-Beat Visual Story */}
        <div className="story-beat-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-28">
          {storyBeats.map((beat, index) => {
            const Icon = beat.icon;
            return (
              <div
                key={beat.title}
                className="story-beat-card bg-surface rounded-3xl p-6 sm:p-8 md:p-10 border border-glass-border shadow-sm hover:shadow-hover-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group cursor-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <span className="font-display-lg text-2xl md:text-3xl font-black text-text-secondary/30 group-hover:text-brand-coral/40 transition-colors duration-300">
                      {beat.step}
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-lg sm:text-xl md:text-2xl font-bold text-on-background tracking-tight mb-2 md:mb-3 text-balance">
                    {beat.title}
                  </h3>

                  <p className="font-body-md text-sm sm:text-base text-text-secondary leading-relaxed">
                    {beat.description}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-glass-border/60 flex items-center gap-2 text-xs font-label-lg uppercase tracking-wider text-text-secondary/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                  <span>Beat {index + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Quiet Details Grid */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <span className="font-label-lg text-xs uppercase tracking-widest text-brand-coral font-bold block mb-2">
              PRECISION FEATURES
            </span>
            <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-background tracking-tight text-balance">
              The Quiet Details
            </h3>
          </div>

          <div className="details-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quietDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.title}
                  className="detail-card bg-surface rounded-2xl p-5 sm:p-6 md:p-7 border border-glass-border hover:-translate-y-1 hover:border-brand-coral/30 hover:shadow-hover-card transition-all duration-300 group cursor-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center text-brand-coral mb-4 md:mb-5 group-hover:bg-brand-coral group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-headline-md text-base md:text-lg font-bold text-on-background mb-1.5 md:mb-2 text-balance">
                      {detail.title}
                    </h4>
                    <p className="font-body-md text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="ticketing-cta-bar max-w-3xl mx-auto rounded-3xl bg-surface border border-glass-border p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-headline-md text-lg md:text-xl font-bold text-on-background mb-1 text-balance">
              Ready to streamline your next event?
            </h4>
            <p className="font-body-md text-sm text-text-secondary text-balance">
              Set up ticket drops and attendee check-ins in minutes.
            </p>
          </div>
          <Link href="#contact" className="w-full sm:w-auto shrink-0">
            <Button variant="primary" className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 text-sm">
              Bring your event to Skroll
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
