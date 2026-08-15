"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AmbientCanvasBackground } from "@/components/ui/AmbientCanvasBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import {
  AlertTriangle,
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
    // Reveal comparison cards
    gsap.fromTo(
      ".transformation-card",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".transformation-grid",
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
      className="w-full py-16 md:py-section-gap bg-section-dark text-white relative overflow-hidden border-t border-white/10"
    >
      <AmbientCanvasBackground />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-coral font-label-lg text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Business Technology Solutions</span>
          </div>
          <SectionHeading
            title="Your problem. Our build"
            subtitle="No templates. No generic fixes. We start with what's actually broken, and build only what solves it."
            titleClassName="!text-white"
          />
        </div>

        {/* Before vs After Visual Transformation Card */}
        <div className="transformation-grid grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {/* Left: The Old Way */}
          <div className="transformation-card relative rounded-3xl p-6 sm:p-8 md:p-10 bg-white/[0.02] border border-red-500/20 backdrop-blur-md flex flex-col justify-between group hover:border-red-500/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 mb-6">
                <span className="text-xs uppercase tracking-widest font-label-lg text-white/50">
                  The Old Way
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Disconnected &amp; Fragile
                </span>
              </div>

              <h3 className="font-headline-md text-xl sm:text-2xl md:text-3xl text-white mb-3 md:mb-4 text-balance">
                Manual Friction &amp; Chaos
              </h3>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-white/60 leading-relaxed mb-6 md:mb-8">
                Fragmented spreadsheets, manual WhatsApp confirmations, payment
                reconciliation nightmares, and repetitive human errors.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5">
                {[
                  "Disconnected spreadsheets & conflicting versions",
                  "Manual WhatsApp payment slips & delayed confirmations",
                  "Midnight reconciliation and lost transactions",
                  "Repetitive human errors that drain valuable hours",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="font-body-md text-sm md:text-base text-white/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>STATUS: Bottlenecked</span>
              <span>EFFICIENCY: ~35%</span>
            </div>
          </div>

          {/* Right: The Skroll Build */}
          <div className="transformation-card relative rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.06] to-brand-coral/[0.04] border border-brand-coral/40 backdrop-blur-md flex flex-col justify-between group hover:border-brand-coral/70 hover:shadow-[0_0_50px_rgba(232,82,26,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 mb-6">
                <span className="text-xs uppercase tracking-widest font-label-lg text-brand-coral">
                  The Skroll Build
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/20 text-brand-coral border border-brand-coral/40 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Custom Engineered
                </span>
              </div>

              <h3 className="font-headline-md text-xl sm:text-2xl md:text-3xl text-white mb-3 md:mb-4 text-balance">
                Unified Flow &amp; Automation
              </h3>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 md:mb-8">
                A single, purpose-built digital interface that connects your
                workflow, automates data flow, and runs seamlessly.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {[
                  "One centralized source of truth with real-time live sync",
                  "Automated instant notifications & verified payment routes",
                  "Automated reconciliations and crystal-clear visibility",
                  "Customized specifically to how your business operates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-coral shrink-0 mt-0.5" />
                    <span className="font-body-md text-sm md:text-base text-white/90 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/10 flex items-center justify-between text-xs text-brand-coral font-mono">
              <span>STATUS: Zero Friction</span>
              <span>EFFICIENCY: 99.9%</span>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars of our Solutions Arm */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="font-headline-md text-2xl md:text-3xl text-white text-balance">
              How We Engineer Solutions
            </h3>
            <p className="font-body-md text-white/60 text-sm sm:text-base mt-2 text-balance">
              The principles behind every software system we design and deploy.
            </p>
          </div>

          <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Pillar 1 */}
            <div className="pillar-card rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 hover:border-brand-coral/40 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-coral/20 transition-all duration-300">
                <Search className="w-6 h-6 text-brand-coral" />
              </div>
              <span className="text-xs font-mono text-brand-coral uppercase tracking-wider mb-2">
                Pillar 01
              </span>
              <h4 className="font-headline-md text-lg sm:text-xl text-white mb-2 md:mb-3 text-balance">
                Problem-First Discovery
              </h4>
              <p className="font-body-md text-sm md:text-base text-white/60 leading-relaxed">
                We diagnose your operational friction before proposing
                architecture or code. We build only what solves your exact
                bottleneck.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 hover:border-brand-coral/40 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-coral/20 transition-all duration-300">
                <Code2 className="w-6 h-6 text-brand-coral" />
              </div>
              <span className="text-xs font-mono text-brand-coral uppercase tracking-wider mb-2">
                Pillar 02
              </span>
              <h4 className="font-headline-md text-lg sm:text-xl text-white mb-2 md:mb-3 text-balance">
                Engineering Rigor
              </h4>
              <p className="font-body-md text-sm md:text-base text-white/60 leading-relaxed">
                Built with high-performance modern web technologies (Next.js,
                TypeScript, resilient APIs) by engineers grounded in University
                of Moratuwa CSE standards.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 hover:border-brand-coral/40 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-brand-coral/20 transition-all duration-300">
                <Sliders className="w-6 h-6 text-brand-coral" />
              </div>
              <span className="text-xs font-mono text-brand-coral uppercase tracking-wider mb-2">
                Pillar 03
              </span>
              <h4 className="font-headline-md text-lg sm:text-xl text-white mb-2 md:mb-3 text-balance">
                Built for Your Reality
              </h4>
              <p className="font-body-md text-sm md:text-base text-white/60 leading-relaxed">
                Designed specifically around your team&apos;s workflow, local
                payment systems, and operational quirks — not a cookie-cutter
                SaaS template.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="solutions-cta-box rounded-3xl p-6 sm:p-8 md:p-12 bg-gradient-to-r from-white/[0.04] via-brand-coral/[0.08] to-white/[0.04] border border-white/15 backdrop-blur-lg text-center max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="font-headline-md text-xl sm:text-2xl md:text-4xl text-white mb-3 md:mb-4 text-balance">
            Have a broken process? Let&apos;s build what fixes it.
          </h3>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mb-6 md:mb-8 leading-relaxed text-balance">
            Tell us where your operations are slowing down. We&apos;ll scope a
            custom solution designed to eliminate friction completely.
          </p>
          <Link href="#contact" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto min-h-[44px] px-8 py-4 text-base font-semibold shadow-lg hover:shadow-hover-button"
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
