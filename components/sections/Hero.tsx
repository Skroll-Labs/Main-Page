"use client";

import { WebGLHeroBackground } from "@/components/ui/WebGLHeroBackground";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const ref = useScrollAnimation(() => {
    // Page load animations
    gsap.fromTo(
      ".hero-headline",
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.6, ease: "power3.out", delay: 0 }
    );

    gsap.fromTo(
      ".hero-fade-up",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out", delay: 0.15 }
    );
  });

  return (
    <section
      ref={ref}
      className="relative pt-40 md:pt-48 pb-24 md:pb-36 px-margin-mobile md:px-margin-desktop w-full overflow-hidden flex items-center justify-center min-h-[100dvh]"
    >
      <WebGLHeroBackground />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-ambient-glow rounded-full mix-blend-screen opacity-70" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-8 md:space-y-10 flex flex-col items-start text-left">
          <h1 className="hero-headline font-display-lg text-4xl sm:text-5xl md:text-display-lg text-on-background tracking-tighter [clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)] text-balance">
            Skroll.<br />
            <span className="brand-coral">Makes everything</span><br />
            better.
          </h1>
          
          <p className="hero-fade-up opacity-0 font-body-lg text-base md:text-body-lg text-text-secondary max-w-xl leading-relaxed text-balance">
            We build the systems that make events run themselves and businesses run better.
          </p>

          <div className="hero-fade-up opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
            <Link href="#ticketing" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto min-h-[44px]">
                Explore Ticketing
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#solutions" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto min-h-[44px]">
                Explore Solutions
              </Button>
            </Link>
          </div>

          <p className="hero-fade-up opacity-0 font-label-lg text-xs md:text-label-lg text-text-secondary uppercase tracking-widest pt-2 md:pt-4">
            Built with engineering precision. Trusted across events &amp; enterprises.
          </p>
        </div>
        
        <div className="hero-fade-up opacity-0 lg:col-span-5 relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] w-full rounded-3xl overflow-hidden border border-glass-border shadow-hover-card transform transition-transform hover:scale-[1.02] duration-700 bg-surface">
          <Image 
            src="/images/hero-dashboard.png" 
            alt="Skroll Event & Business Operations Interface" 
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
    </section>
  );
}
