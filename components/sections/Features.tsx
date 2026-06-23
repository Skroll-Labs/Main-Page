"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Send, Lock, LineChart, MailCheck, Palette, Rocket } from "lucide-react";
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
      <div className="max-w-container-max mx-auto px-margin-desktop">
      <SectionHeading 
        title="Everything You Need to Run Ticketing Like a Pro" 
        subtitle="Tools designed for people, not programmers"
      />

      <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "send",
            title: "Automated Ticket Delivery",
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
          <div key={idx} className="feature-card opacity-0 bg-surface p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-hover">
            <div className="w-12 h-12 bg-brand-coral/10 rounded-full flex items-center justify-center mb-6">
              {feature.icon === "send" && <Send className="w-6 h-6 text-brand-coral" />}
              {feature.icon === "lock" && <Lock className="w-6 h-6 text-brand-coral" />}
              {feature.icon === "insights" && <LineChart className="w-6 h-6 text-brand-coral" />}
              {feature.icon === "mark_email_read" && <MailCheck className="w-6 h-6 text-brand-coral" />}
              {feature.icon === "palette" && <Palette className="w-6 h-6 text-brand-coral" />}
              {feature.icon === "rocket_launch" && <Rocket className="w-6 h-6 text-brand-coral" />}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-3">{feature.title}</h3>
            <p className="font-body-md text-body-md text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
