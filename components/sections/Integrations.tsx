"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

export function Integrations() {
  const ref = useScrollAnimation(() => {
    // We can add subtle fade in for the header
    gsap.fromTo(
      ".integration-header",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section ref={ref} className="py-16 border-y border-glass-border overflow-hidden bg-surface-bright">
      <div className="integration-header text-center mb-10 px-margin-desktop opacity-0">
        <h3 className="font-headline-md text-headline-md text-on-background mb-4">Works With the Tools You Already Use</h3>
        <p className="font-body-md text-body-md text-text-secondary max-w-2xl mx-auto">Connect your favorite payment gateways, SMS providers, and email tools — no complicated setup required.</p>
      </div>

      <div className="marquee-container w-full">
        <div className="marquee-content flex gap-16 items-center px-8 opacity-60">
          <span className="font-headline-md text-headline-md text-on-background font-bold">Stripe</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">PayPal</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Mailchimp</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Salesforce</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Twilio</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Zapier</span>
          
          <span className="font-headline-md text-headline-md text-on-background font-bold">Stripe</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">PayPal</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Mailchimp</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Salesforce</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Twilio</span>
          <span className="font-headline-md text-headline-md text-on-background font-bold">Zapier</span>
        </div>
      </div>
    </section>
  );
}
