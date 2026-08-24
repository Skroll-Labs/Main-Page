"use client";

import Link from "next/link";
import {
  Ticket,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

const eventCapabilities = [
  "Instant QR Gate Validation",
  "Automated SMS & Email Delivery",
  "Local Payment Gateway",
  "Real Time Revenue Analytics",
];

const solutionCapabilities = [
  "Bespoke Internal Tools & Web Apps",
  "Workflow & Data Pipeline Automation",
  "Custom API Integrations & Sync",
  "High Availability Cloud Architecture",
];

export function AboutSkroll() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".about-reveal",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".service-col",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-diptych",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section
      id="about"
      ref={ref}
      className="about-section w-full py-12 md:py-20 bg-background text-on-background px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto flex flex-col gap-12 md:gap-16">
        {/* Identity & Mission Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="about-reveal font-label-lg text-xs uppercase tracking-widest text-brand-coral font-bold block">
              Who We Are
            </span>
            <h2 className="about-reveal font-headline-xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-background text-balance leading-tight">
              We engineer the digital systems that power modern events and businesses.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-8">
            <p className="about-reveal font-body-lg text-base md:text-lg text-text-secondary leading-relaxed">
              Skroll is a software engineering company built in Sri Lanka. We exist to eliminate operational friction transforming chaotic manual processes into seamless, automated digital platforms.
            </p>
            <p className="about-reveal font-body-md text-sm md:text-base text-text-secondary leading-relaxed">
              Whether you are organizing a high capacity festival or automating critical business workflows, we provide the reliable software foundation so you can focus on building what matters.
            </p>
          </div>
        </div>

        {/* Services Diptych (50/50 Structural Split) */}
        <div className="services-diptych border-t border-b border-glass-border py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-glass-border gap-y-10 md:gap-y-0">
            {/* Service 1: Skroll Events */}
            <div className="service-col flex flex-col justify-between md:pr-10 lg:pr-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral">
                    <Ticket className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-label-lg text-xs uppercase tracking-wider text-brand-coral font-semibold block">
                      Arm 01
                    </span>
                    <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-background">
                      Skroll Ticketing
                    </h3>
                  </div>
                </div>

                <p className="font-body-md text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                  A high-performance ticketing and gate access infrastructure. Sell out your events, deliver instant SMS/WhatsApp QR codes, and validate attendees in real time without gate lag.
                </p>

                <div className="space-y-2.5 mb-8">
                  {eventCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-on-background">
                      <CheckCircle2 className="w-4 h-4 text-brand-coral shrink-0" />
                      <span className="font-body-md font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#ticketing"
                className="inline-flex items-center gap-2 font-button-text text-sm font-semibold text-brand-coral hover:gap-3 transition-all cursor-hover"
              >
                <span>Explore Ticketing Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 2: Skroll Business Solutions */}
            <div className="service-col flex flex-col justify-between pt-10 md:pt-0 md:pl-10 lg:pl-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-label-lg text-xs uppercase tracking-wider text-brand-coral font-semibold block">
                      Arm 02
                    </span>
                    <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-background">
                      Business Solutions
                    </h3>
                  </div>
                </div>

                <p className="font-body-md text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                  Custom software engineering and operational automation. We analyze your team’s bottlenecks, design tailored software architectures and deploy custom tools that eliminate repetitive work.
                </p>

                <div className="space-y-2.5 mb-8">
                  {solutionCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-on-background">
                      <CheckCircle2 className="w-4 h-4 text-brand-coral shrink-0" />
                      <span className="font-body-md font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 font-button-text text-sm font-semibold text-brand-coral hover:gap-3 transition-all cursor-hover"
              >
                <span>Explore Custom Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Origin & Commitment Note */}
        <div className="about-reveal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-surface p-6 sm:p-8 rounded-3xl border border-glass-border">
          <div className="max-w-2xl">
            <h4 className="font-headline-md text-lg sm:text-xl font-bold text-on-background mb-1">
              Engineered with pride in Sri Lanka.
            </h4>
            <p className="font-body-md text-sm text-text-secondary leading-relaxed">
              We combine world class engineering standards with deep local context to give organizers and businesses a decisive operational edge.
            </p>
          </div>

          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-coral text-white font-button-text text-sm font-semibold hover:shadow-hover-button transition-all cursor-hover"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
