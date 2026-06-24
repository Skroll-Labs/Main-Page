"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section id="features" ref={ref} className="w-full py-section-gap bg-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <SectionHeading 
        title="The Complete Toolset for Operations Teams" 
        subtitle="Tools designed for speed and reliability, not programmers"
      />

      <div className="features-grid grid grid-cols-1 md:grid-cols-12 gap-6">
        {[
          {
            icon: "send",
            title: "Automated Ticket Delivery",
            description: "QR codes and PDF tickets generated and sent instantly — every time, without fail.",
            spanClass: "md:col-span-7",
          },
          {
            icon: "lock",
            title: "Secure Payment Integration",
            description: "Connect your preferred payment gateway and accept payments with confidence.",
            spanClass: "md:col-span-5",
          },
          {
            icon: "insights",
            title: "Real-Time Analytics",
            description: "See ticket sales, revenue, and attendance trends as they happen.",
            spanClass: "md:col-span-4",
          },
          {
            icon: "mark_email_read",
            title: "Multi-Channel Delivery",
            description: "Reach buyers via email and SMS, so no ticket gets lost or missed.",
            spanClass: "md:col-span-8",
          },
          {
            icon: "palette",
            title: "Custom Branding",
            description: "White-label tickets and checkout pages to match your event's identity.",
            spanClass: "md:col-span-6",
          },
          {
            icon: "rocket_launch",
            title: "Built to Scale",
            description: "From a 50-person meetup to a 50,000-person festival — one platform handles it all.",
            spanClass: "md:col-span-6",
          },
        ].map((feature, idx) => (
          <div key={idx} className={`feature-card ${feature.spanClass} relative opacity-0 bg-surface p-10 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-hover-card transition-all duration-300 cursor-hover group overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 border border-brand-coral/10 rounded-full flex items-center justify-center mb-auto shadow-sm">
                {feature.icon === "send" && <Navigation className="w-6 h-6 text-brand-coral" />}
                {feature.icon === "lock" && <Fingerprint className="w-6 h-6 text-brand-coral" />}
                {feature.icon === "insights" && <Activity className="w-6 h-6 text-brand-coral" />}
                {feature.icon === "mark_email_read" && <Smartphone className="w-6 h-6 text-brand-coral" />}
                {feature.icon === "palette" && <Brush className="w-6 h-6 text-brand-coral" />}
                {feature.icon === "rocket_launch" && <Zap className="w-6 h-6 text-brand-coral" />}
              </div>
              <div className="mt-16">
                <h3 className="font-headline-md text-xl md:text-2xl tracking-tight text-on-background mb-3">{feature.title}</h3>
                <p className="font-body-md text-body-md text-text-secondary">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
