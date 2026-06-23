"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function SocialProof() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".social-proof-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".social-proof-grid",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".stat-item",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section ref={ref} className="py-section-gap bg-surface-bright border-y border-glass-border">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <SectionHeading title="Event Organizers Trust Us to Get It Right" />

        <div className="social-proof-grid grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="social-proof-card opacity-0 bg-surface p-8 rounded-2xl shadow-sm cursor-hover">
            <div className="flex text-brand-coral mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="font-body-lg text-body-lg italic text-on-background mb-6">
              "We cut our ticket delivery time from hours to seconds. Our attendees noticed — and so did our team."
            </p>
            <p className="font-button-text text-button-text font-bold text-text-secondary">
              — Sarah J., Ops Lead, TechCon
            </p>
          </div>

          <div className="social-proof-card opacity-0 bg-surface p-8 rounded-2xl shadow-sm cursor-hover">
            <div className="flex text-brand-coral mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="font-body-lg text-body-lg italic text-on-background mb-6">
              "Setup took less than a day. The real-time dashboard alone saved us from three different spreadsheets."
            </p>
            <p className="font-button-text text-button-text font-bold text-text-secondary">
              — Mark T., Founder, IndieFest
            </p>
          </div>
        </div>

        <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="stat-item opacity-0">
            <h4 className="font-display-lg text-display-lg-mobile text-brand-coral mb-2">10,000+</h4>
            <p className="font-body-md text-body-md text-text-secondary uppercase tracking-wider">Events Powered</p>
          </div>
          <div className="stat-item opacity-0">
            <h4 className="font-display-lg text-display-lg-mobile text-brand-coral mb-2">1M+</h4>
            <p className="font-body-md text-body-md text-text-secondary uppercase tracking-wider">Tickets Delivered</p>
          </div>
          <div className="stat-item opacity-0">
            <h4 className="font-display-lg text-display-lg-mobile text-brand-coral mb-2">99.9%</h4>
            <p className="font-body-md text-body-md text-text-secondary uppercase tracking-wider">Delivery Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
