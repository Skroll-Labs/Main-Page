"use client";

import { WebGLHeroBackground } from "@/components/ui/WebGLHeroBackground";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const ref = useScrollAnimation(() => {
    // Page load animations
    gsap.fromTo(
      ".hero-headline",
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, ease: "power3.out", delay: 0.1 }
    );

    gsap.fromTo(
      ".hero-fade-up",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.3 }
    );
  });

  return (
    <section
      ref={ref}
      className="relative pt-48 pb-40 px-margin-mobile md:px-margin-desktop w-full overflow-hidden flex items-center justify-center min-h-screen"
    >
      <WebGLHeroBackground />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-ambient-glow rounded-full mix-blend-screen opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-10 flex flex-col items-start text-left">
          <h1 className="hero-headline font-display-lg text-display-lg-mobile md:text-display-lg text-on-background tracking-tighter [clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)]">
            Sell Tickets.<br />
            <span className="brand-coral">Send QR Codes.</span><br />
            Skip Logistics.
          </h1>
          
          <p className="hero-fade-up opacity-0 font-body-lg text-base md:text-body-lg text-text-secondary max-w-xl">
            The ticketing platform built for organizers. Handle payments, ticket delivery, and door check-ins without lifting a finger.
          </p>

          <div className="hero-fade-up opacity-0 flex flex-wrap items-center gap-6">
            <Link href="#contact">
              <Button variant="primary" className="active:scale-95 transition-transform">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <p className="hero-fade-up opacity-0 font-label-lg text-label-lg text-text-secondary uppercase tracking-widest mt-12">
            Trusted by operations teams across Tech & Europe
          </p>
        </div>
        
        <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[400px]">
          {/* Asymmetric visual counterweight container */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/10 to-transparent rounded-3xl border border-glass-border backdrop-blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
