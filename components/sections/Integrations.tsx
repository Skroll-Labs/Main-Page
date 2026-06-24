"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import { AmbientCanvasBackground } from "@/components/ui/AmbientCanvasBackground";

export function Integrations() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".integration-header",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%"
        }
      }
    );
    gsap.fromTo(
      ".integration-logo",
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "back.out(1.5)", 
        delay: 0.2,
        scrollTrigger: {
          trigger: ".integration-grid",
          start: "top 85%"
        }
      }
    );
  });

  return (
    <section ref={ref} className="py-section-gap border-y border-glass-border overflow-hidden bg-section-gradient relative">
      <AmbientCanvasBackground />
      <div className="integration-header text-center mb-10 px-margin-mobile md:px-margin-desktop opacity-0 relative z-10">
        <h3 className="font-headline-md text-2xl md:text-headline-md text-on-background mb-4">Works With the Tools You Already Use</h3>
        <p className="font-body-md text-body-md text-text-secondary max-w-2xl mx-auto">Connect your favorite payment gateways, SMS providers, and email tools — no complicated setup required.</p>
      </div>

      <div className="marquee-container w-full overflow-hidden">
        <div className="marquee-content flex w-max flex-nowrap gap-16 items-center px-8 opacity-60">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold flex-shrink-0">Stripe</span>
              <span className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold flex-shrink-0">PayPal</span>
              <span className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold flex-shrink-0">Mailchimp</span>
              <span className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold flex-shrink-0">Salesforce</span>
              <span className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold flex-shrink-0">Twilio</span>
              <span className="font-headline-md text-2xl md:text-headline-md text-on-background font-bold flex-shrink-0">Zapier</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
