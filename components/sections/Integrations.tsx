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
        duration: 0.5, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%"
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
        stagger: 0.05, 
        ease: "back.out(1.5)", 
        scrollTrigger: {
          trigger: ".integration-grid",
          start: "top 90%"
        }
      }
    );
  });

  return (
    <section ref={ref} className="py-12 md:py-20 border-y border-glass-border overflow-hidden bg-section-gradient relative">
      <AmbientCanvasBackground />
      <div className="integration-header text-center mb-10 px-margin-mobile md:px-margin-desktop opacity-0 relative z-10">
        <h3 className="font-headline-md text-2xl md:text-headline-md text-on-background mb-4">Works With the Tools You Already Use</h3>
        <p className="font-body-md text-body-md text-text-secondary max-w-2xl mx-auto">Connect your favorite payment gateways, SMS providers, and email tools — no complicated setup required.</p>
      </div>

      <div className="marquee-container w-full overflow-hidden py-4">
        <div className="marquee-content flex w-max flex-nowrap gap-16 md:gap-24 items-center px-8">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                { name: "Stripe", icon: "stripe", color: "008CDD" },
                { name: "PayPal", icon: "paypal", color: "00457C" },
                { name: "Mailchimp", icon: "mailchimp" },
                { name: "Apple Pay", icon: "applepay" },
                { name: "Google Pay", icon: "googlepay" },
                { name: "Slack", icon: "slack", color: "E01E5A" },
                { name: "Zapier", icon: "zapier", color: "FF4A00" },
                { name: "Twilio", icon: "twilio", color: "F22F46" }
              ].map((partner) => (
                <div 
                  key={partner.name} 
                  className="flex items-center gap-3 flex-shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${partner.icon}${partner.color ? `/${partner.color}` : ''}`} 
                    alt={partner.name} 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                  />
                  <span className="font-headline-md text-xl md:text-3xl text-on-background font-bold tracking-tight">
                    {partner.name}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
