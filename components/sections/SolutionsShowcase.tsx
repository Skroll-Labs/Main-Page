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

export function SolutionsShowcase() {
  const ref = useScrollAnimation(() => {
    // Reveal transformation rows
    gsap.fromTo(
      ".transformation-row",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".transformation-list",
          start: "top 85%",
        },
      }
    );

    // Reveal pillars
    gsap.fromTo(
      ".pillar-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 85%",
        },
      }
    );

    // Reveal CTA banner
    gsap.fromTo(
      ".solutions-cta-box",
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solutions-cta-box",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section
      id="solutions"
      ref={ref}
      className="w-full py-16 md:py-section-gap bg-background text-on-background relative overflow-hidden border-t border-glass-border"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral font-label-lg text-xs uppercase tracking-widest mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Technology Solutions</span>
          </div>
          <SectionHeading
            title="Your problem. Our build"
            subtitle="No templates. No generic fixes. We start with what's actually broken, and build only what solves it."
          />
        </div>

        {/* Before vs After 3-Row Transformation Bento Strip */}
        <div className="transformation-list space-y-4 sm:space-y-6 mb-16 md:mb-24">
          {[
            {
              category: "DATA & SYNCHRONIZATION",
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
              category: "OPERATIONS & COMMUNICATIONS",
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
              category: "FINANCE & RECONCILIATION",
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
          ].map((item, idx) => (
            <div
              key={idx}
              className="transformation-row flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4 md:gap-6 bg-surface/60 p-2 sm:p-3 md:p-4 rounded-3xl border border-glass-border shadow-xs"
            >
              {/* Left: The Old Way */}
              <div className="flex-1 w-full rounded-2xl p-5 sm:p-6 bg-surface/90 border border-red-500/15 hover:border-red-500/30 transition-all duration-300 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-label-lg text-text-secondary/70 font-mono">
                      THE OLD WAY
                    </span>
                    <span className="text-[11px] text-red-500 font-mono font-semibold">
                      Friction
                    </span>
                  </div>
                  <h4 className="font-headline-md text-base sm:text-lg text-on-background font-semibold mb-1 text-balance">
                    {item.oldWay.title}
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.oldWay.desc}
                  </p>
                </div>
              </div>

              {/* Center: Directional Connector */}
              <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-brand-coral/10 border border-brand-coral/30 flex items-center justify-center text-brand-coral shadow-sm">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 hidden md:block" />
                  <span className="md:hidden text-xs font-bold font-mono">▼</span>
                </div>
              </div>

              {/* Right: The Skroll Build */}
              <div className="flex-1 w-full rounded-2xl p-5 sm:p-6 bg-surface border border-brand-coral/30 hover:border-brand-coral/60 hover:shadow-hover-card transition-all duration-300 flex items-start gap-4 relative overflow-hidden group shadow-xs">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-coral/10 transition-colors duration-300" />
                <div className="w-10 h-10 rounded-xl bg-brand-coral/10 border border-brand-coral/20 text-brand-coral flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-label-lg text-brand-coral font-bold font-mono">
                      THE SKROLL BUILD
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-coral/10 text-brand-coral border border-brand-coral/20">
                      {item.skrollWay.badge}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-base sm:text-lg text-on-background font-bold mb-1 text-balance">
                    {item.skrollWay.title}
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.skrollWay.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Pillars of our Solutions Arm */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="font-headline-md text-2xl md:text-3xl text-on-background font-bold text-balance">
              How We Engineer Solutions
            </h3>
            <p className="font-body-md text-text-secondary text-sm sm:text-base mt-2 text-balance">
              The principles behind every software system we design and deploy.
            </p>
          </div>

          <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Pillar 1 */}
            <div className="pillar-card rounded-3xl p-6 sm:p-8 bg-surface border border-glass-border hover:border-brand-coral/30 hover:shadow-hover-card hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-brand-coral uppercase tracking-wider mb-2 font-bold block">
                  Pillar 01
                </span>
                <h4 className="font-headline-md text-lg sm:text-xl text-on-background mb-2 md:mb-3 text-balance font-bold">
                  Problem-First Discovery
                </h4>
                <p className="font-body-md text-sm md:text-base text-text-secondary leading-relaxed">
                  We diagnose your operational friction before proposing
                  architecture or code. We build only what solves your exact
                  bottleneck.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card rounded-3xl p-6 sm:p-8 bg-surface border border-glass-border hover:border-brand-coral/30 hover:shadow-hover-card hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-brand-coral uppercase tracking-wider mb-2 font-bold block">
                  Pillar 02
                </span>
                <h4 className="font-headline-md text-lg sm:text-xl text-on-background mb-2 md:mb-3 text-balance font-bold">
                  Engineering Rigor
                </h4>
                <p className="font-body-md text-sm md:text-base text-text-secondary leading-relaxed">
                  Built with high-performance modern web technologies (Next.js,
                  TypeScript, resilient APIs) by engineers grounded in University
                  of Moratuwa CSE standards.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card rounded-3xl p-6 sm:p-8 bg-surface border border-glass-border hover:border-brand-coral/30 hover:shadow-hover-card hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white transition-all duration-300">
                  <Sliders className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-brand-coral uppercase tracking-wider mb-2 font-bold block">
                  Pillar 03
                </span>
                <h4 className="font-headline-md text-lg sm:text-xl text-on-background mb-2 md:mb-3 text-balance font-bold">
                  Built for Your Reality
                </h4>
                <p className="font-body-md text-sm md:text-base text-text-secondary leading-relaxed">
                  Designed specifically around your team&apos;s workflow, local
                  payment systems, and operational quirks — not a cookie-cutter
                  SaaS template.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="solutions-cta-box rounded-3xl p-6 sm:p-8 md:p-12 bg-surface border border-glass-border shadow-xs hover:shadow-hover-card transition-all duration-300 text-center max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="font-headline-md text-xl sm:text-2xl md:text-4xl text-on-background font-bold mb-3 md:mb-4 text-balance">
            Have a broken process? Let&apos;s build what fixes it.
          </h3>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mb-6 md:mb-8 leading-relaxed text-balance">
            Tell us where your operations are slowing down. We&apos;ll scope a
            custom solution designed to eliminate friction completely.
          </p>
          <Link href="#contact" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto min-h-[44px] px-8 py-4 text-base font-semibold shadow-md hover:shadow-hover-button"
            >
              <span>Tell Us What&apos;s Broken</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

