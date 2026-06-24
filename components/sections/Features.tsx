"use client";

import { Navigation, Fingerprint, Activity, Smartphone, Brush, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function Features() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section id="features" ref={ref} className="w-full py-section-gap bg-section-gradient relative overflow-hidden">
      {/* Soft ambient radial background */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[60vw] h-[60vw] bg-brand-coral opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="mb-16 max-w-2xl">
        <h2 className="font-headline-lg text-3xl md:text-5xl tracking-tight text-on-background mb-4">The Complete Toolset</h2>
        <p className="font-body-lg text-text-secondary">Designed for speed and reliability, so you can focus on the event, not the software.</p>
      </div>

      <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: "send",
            title: "Automated Delivery",
            description: "QR codes and PDF tickets generated and sent instantly — every time, without fail.",
          },
          {
            icon: "lock",
            title: "Secure Payment Integration",
            description: "Connect your preferred payment gateway and accept payments with confidence.",
          },
          {
            icon: "insights",
            title: "Real-Time Analytics",
            description: "See ticket sales, revenue, and attendance trends as they happen.",
          },
          {
            icon: "mark_email_read",
            title: "Multi-Channel Delivery",
            description: "Reach buyers via email and SMS, so no ticket gets lost or missed.",
          },
          {
            icon: "palette",
            title: "Custom Branding",
            description: "White-label tickets and checkout pages to match your event's identity.",
          },
          {
            icon: "rocket_launch",
            title: "Built to Scale",
            description: "From a 50-person meetup to a 50,000-person festival — one platform handles it all.",
          },
        ].map((feature, idx) => (
          <div key={idx} className="feature-card relative opacity-0 bg-surface p-8 rounded-2xl border border-glass-border hover:-translate-y-1 hover:shadow-hover-card transition-all duration-300 cursor-hover flex flex-col group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 border border-brand-coral/10 rounded-xl flex items-center justify-center mb-8 shadow-sm">
                {feature.icon === "send" && <Navigation className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />}
                {feature.icon === "lock" && <Fingerprint className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />}
                {feature.icon === "insights" && <Activity className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />}
                {feature.icon === "mark_email_read" && <Smartphone className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />}
                {feature.icon === "palette" && <Brush className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />}
                {feature.icon === "rocket_launch" && <Zap className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />}
              </div>
              <div className="mt-auto">
                <h3 className="font-headline-md text-xl tracking-tight text-on-background mb-3">{feature.title}</h3>
                <p className="font-body-md text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
