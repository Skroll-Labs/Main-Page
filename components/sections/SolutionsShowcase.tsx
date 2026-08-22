"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Search,
  Sliders,
  Sparkles,
  XCircle,
} from "lucide-react";

const transformations = [
  {
    area: "Data & Sync",
    oldWay: {
      title: "Disconnected Spreadsheets & Slips",
      desc: "Conflicting file versions, missed WhatsApp receipts, and lost transactions.",
    },
    skrollWay: {
      title: "Single Live Source of Truth",
      desc: "Centralized database with automated real-time sync across all touchpoints.",
      badge: "Real-Time Sync",
    },
  },
  {
    area: "Operations",
    oldWay: {
      title: "Manual WhatsApp Follow-ups",
      desc: "Hours spent typing confirmations, sending manual PDFs, and chasing unverified slips.",
    },
    skrollWay: {
      title: "Zero-Touch Automated Dispatch",
      desc: "Sub-second webhook triggers dispatching instant QR/PDF tickets via Email & SMS.",
      badge: "Sub-Second",
    },
  },
  {
    area: "Finance",
    oldWay: {
      title: "Midnight Reconciliation & Lag",
      desc: "Manual bank slip verification, missing reference numbers, and human accounting errors.",
    },
    skrollWay: {
      title: "Real-Time Reconciled Ledgers",
      desc: "Direct payment gateway callbacks with automated ledger accounting and instant verification.",
      badge: "100% Verified",
    },
  },
];

const pillars = [
  {
    num: "01",
    icon: Search,
    title: "Problem-First Discovery",
    desc: "We diagnose your operational friction before proposing architecture or code. We build only what solves your exact bottleneck.",
  },
  {
    num: "02",
    icon: Code2,
    title: "Engineering Rigor",
    desc: "Built with high-performance modern web technologies (Next.js, TypeScript, resilient APIs) by engineers grounded in University of Moratuwa CSE standards.",
  },
  {
    num: "03",
    icon: Sliders,
    title: "Built for Your Reality",
    desc: "Designed specifically around your team's workflow, local payment systems, and operational quirks — not a cookie-cutter SaaS template.",
  },
];

export function SolutionsShowcase() {
  const ref = useScrollAnimation(() => {
    // Reveal architectural split rows
    gsap.fromTo(
      ".split-row",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".split-container",
          start: "top 80%",
        },
      }
    );

    // Reveal pillars
    gsap.fromTo(
      ".pillar-item",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pillars-container",
          start: "top 85%",
        },
      }
    );

    // Reveal CTA band
    gsap.fromTo(
      ".solutions-cta-band",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solutions-cta-band",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section
      id="solutions"
      ref={ref}
      className="w-full bg-background text-on-background relative overflow-hidden border-t border-glass-border"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-section-gap pb-12 md:pb-16">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral font-label-lg text-xs uppercase tracking-widest mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Technology Solutions</span>
          </div>
          <SectionHeading
            title="Your problem. Our build"
            subtitle="No templates. No generic fixes. We start with what's actually broken, and build only what solves it."
          />
        </div>

        {/* ── 1. Architectural Split (Large Typography) ── */}
        <div className="split-container space-y-8 md:space-y-12 mb-24 md:mb-32">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="split-row relative flex flex-col md:flex-row border border-glass-border rounded-2xl md:rounded-[2rem] overflow-hidden group hover:border-brand-coral/30 transition-colors duration-500 shadow-sm"
            >
              {/* Nexus Arrow (Absolute Center) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-surface border border-glass-border rounded-full flex items-center justify-center shadow-sm group-hover:border-brand-coral/40 group-hover:text-brand-coral transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-text-secondary group-hover:text-brand-coral rotate-90 md:rotate-0 transition-all duration-300" />
              </div>

              {/* Left Half: The Old Way */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-surface/40 md:border-r border-b md:border-b-0 border-glass-border flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <XCircle className="w-5 h-5 text-red-500/60" />
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-mono font-bold text-red-500/70">
                    {item.area} · Friction
                  </span>
                </div>
                <h4 className="font-headline-md text-2xl md:text-3xl text-on-background/50 font-semibold mb-4 line-through decoration-red-400/30 text-balance leading-tight">
                  {item.oldWay.title}
                </h4>
                <p className="font-body-md text-base md:text-lg text-text-secondary/70 leading-relaxed max-w-md">
                  {item.oldWay.desc}
                </p>
              </div>

              {/* Right Half: The Skroll Build */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-surface relative overflow-hidden flex flex-col justify-center">
                {/* Subtle Glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-coral/[0.04] rounded-full blur-3xl group-hover:bg-brand-coral/[0.08] transition-colors duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-coral" />
                      <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-mono font-bold text-brand-coral">
                        The Skroll Build
                      </span>
                    </div>
                    <span className="hidden sm:inline-flex text-[10px] md:text-xs font-mono font-semibold text-brand-coral bg-brand-coral/10 border border-brand-coral/20 px-3 py-1 rounded-full shrink-0">
                      {item.skrollWay.badge}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-2xl md:text-3xl text-on-background font-bold mb-4 text-balance leading-tight">
                    {item.skrollWay.title}
                  </h4>
                  <p className="font-body-md text-base md:text-lg text-text-secondary leading-relaxed max-w-md">
                    {item.skrollWay.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 2. How We Engineer Solutions (3-Column Architectural Grid) ── */}
        <div className="pillars-container mb-16 md:mb-20">
          <div className="mb-10 md:mb-14">
            <h3 className="font-headline-md text-2xl md:text-3xl text-on-background font-bold text-balance">
              How We Engineer Solutions
            </h3>
            <p className="font-body-md text-text-secondary text-sm sm:text-base mt-2 text-balance">
              The principles behind every software system we design and deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-6 border-t border-glass-border">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="pillar-item flex flex-col group">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-brand-coral/30 group-hover:text-brand-coral transition-colors duration-300 mb-3 tabular-nums">
                    {pillar.num}
                  </span>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Icon className="w-5 h-5 text-brand-coral shrink-0" />
                    <h4 className="font-headline-md text-lg sm:text-xl text-on-background font-bold text-balance">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-body-md text-sm sm:text-base text-text-secondary leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3. Full-width Tonal CTA Band ── */}
      <div className="solutions-cta-band w-full border-t border-b border-brand-coral/20 bg-brand-coral/[0.06]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
          <div>
            <h3 className="font-headline-md text-2xl md:text-3xl text-on-background font-bold text-balance">
              Have a broken process? Let&apos;s build what fixes it.
            </h3>
            <p className="font-body-md text-sm md:text-base text-text-secondary mt-2 max-w-xl leading-relaxed text-balance">
              Tell us where your operations are slowing down. We&apos;ll scope a
              custom solution designed to eliminate friction completely.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="#contact" className="w-full md:w-auto block">
              <Button
                variant="primary"
                className="w-full md:w-auto min-h-[44px] px-8 py-4 text-base font-semibold shadow-md hover:shadow-hover-button whitespace-nowrap"
              >
                <span>Tell Us What&apos;s Broken</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
