"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Cable,
  CheckCircle2,
  Code2,
  LayoutGrid,
  Search,
  Sliders,
  Sparkles,
  Ticket,
  Workflow,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const transformations = [
  {
    id: "web-apps",
    area: "Custom Web Apps",
    shortLabel: "Web Apps & Portals",
    icon: LayoutGrid,
    tagline: "Internal tools, portals & operational dashboards",
    oldWay: {
      title: "Rigid Off-the-Shelf SaaS & Workarounds",
      desc: "Paying high recurring seat fees for bloated tools you don't use, constrained by someone else's rigid workflow.",
    },
    skrollWay: {
      title: "Purpose-Built Web Apps & Portals",
      desc: "High-performance internal portals, bespoke dashboards, and operational tools mapped 100% to your team's workflow.",
      badge: "Fully Custom",
    },
  },
  {
    id: "automation",
    area: "Workflow Automation",
    shortLabel: "Workflow Automation",
    icon: Workflow,
    tagline: "Autonomous background workers & sync pipelines",
    oldWay: {
      title: "Hours Lost to Manual Status Updates & Handoffs",
      desc: "Copy-pasting data across disconnected tabs, chasing WhatsApp confirmations, and running manual email chains.",
    },
    skrollWay: {
      title: "Autonomous Zero-Touch Event Pipelines",
      desc: "Event-driven background workers that validate, route, notify, and process multi-step workflows without human friction.",
      badge: "Zero-Touch",
    },
  },
  {
    id: "ecommerce",
    area: "E-Commerce & Inventory",
    shortLabel: "E-Commerce & Inventory",
    icon: Boxes,
    tagline: "Live inventory, order processing & unified checkout",
    oldWay: {
      title: "Stock in Spreadsheets, Orders in Chat Inboxes",
      desc: "Overselling risks, zero live stock visibility across channels, and manual midnight order reconciliations.",
    },
    skrollWay: {
      title: "Unified Live Inventory & Automated Checkout",
      desc: "Real-time multi-channel inventory engines with instant payment gateway processing, automated receipts, and live tracking.",
      badge: "Live Sync",
    },
  },
  {
    id: "integrations",
    area: "API & Integrations",
    shortLabel: "API & Integrations",
    icon: Cable,
    tagline: "Bespoke API bridges & webhook infrastructure",
    oldWay: {
      title: "Siloed Tools & Fragile Manual CSV Exports",
      desc: "Disjointed databases requiring daily manual data dumps, broken third-party webhooks, and duplicated records.",
    },
    skrollWay: {
      title: "Resilient Real-Time API Ecosystems",
      desc: "Custom API bridges, resilient webhook listeners, and bi-directional synchronization connecting your entire software stack.",
      badge: "Unified Stack",
    },
  },
  {
    id: "ticketing",
    area: "Ticketing & Access",
    shortLabel: "Ticketing & Access",
    icon: Ticket,
    tagline: "High-concurrency ticketing & gate validation",
    oldWay: {
      title: "Crashed Gateways & Fraud-Prone Gate Queues",
      desc: "Traffic spikes crashing checkouts, delayed PDF delivery, unverified bank slips, and bottlenecked manual entrance verification.",
    },
    skrollWay: {
      title: "High-Scale Ticketing & Sub-Second QR Access",
      desc: "Fault-tolerant ticketing architecture handling flash-sale surges, automated payment verification, and instant offline-ready gate validation.",
      badge: "Sub-Second",
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
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  activeIdxRef.current = activeIdx;

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Touch gesture state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const transitionCard = useCallback((newIdx: number) => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0.3, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    setActiveIdx(newIdx);
  }, []);

  const scrollToTab = useCallback((targetIdx: number) => {
    const st = scrollTriggerRef.current;
    if (st) {
      // Calculate target scroll position within pinned track
      const scrollRange = st.end - st.start;
      const targetScroll = st.start + (targetIdx / 5 + 0.08) * scrollRange;
      
      // @ts-ignore
      if (window.lenis && typeof window.lenis.scrollTo === "function") {
        // @ts-ignore
        window.lenis.scrollTo(targetScroll, { duration: 0.7 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
    transitionCard(targetIdx);
  }, [transitionCard]);

  useEffect(() => {
    let ctx: gsap.Context;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // Desktop & Tablet Viewport Pinning (>= 768px)
        mm.add("(min-width: 768px)", () => {
          const st = ScrollTrigger.create({
            trigger: trackRef.current,
            pin: stageRef.current,
            start: "top top",
            end: "+=850",
            scrub: 0.2,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              // Map 0.0 - 1.0 progress cleanly to 0 - 4 tab indexes
              const rawIdx = Math.min(4, Math.floor(progress * 5));
              if (rawIdx !== activeIdxRef.current) {
                transitionCard(rawIdx);
              }
            },
          });

          scrollTriggerRef.current = st;

          return () => {
            if (st) st.kill();
          };
        });

        // Mobile Viewport Pinning (< 768px) with quick scroll scrub
        mm.add("(max-width: 767px)", () => {
          const st = ScrollTrigger.create({
            trigger: trackRef.current,
            pin: stageRef.current,
            start: "top top",
            end: "+=500",
            scrub: 0.2,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const rawIdx = Math.min(4, Math.floor(progress * 5));
              if (rawIdx !== activeIdxRef.current) {
                transitionCard(rawIdx);
              }
            },
          });

          scrollTriggerRef.current = st;

          return () => {
            if (st) st.kill();
          };
        });

        // Entrance animation for pillars
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

        // Entrance animation for CTA band
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
      }, trackRef);

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [transitionCard]);

  // Touch Swipe Handlers for mobile & touch screen support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only handle horizontal swipe if horizontal movement exceeds vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0 && activeIdx < transformations.length - 1) {
        // Swipe Left -> Next Tab
        scrollToTab(activeIdx + 1);
      } else if (deltaX > 0 && activeIdx > 0) {
        // Swipe Right -> Prev Tab
        scrollToTab(activeIdx - 1);
      }
    }
  };

  const activeItem = transformations[activeIdx];

  return (
    <section
      id="solutions"
      className="w-full bg-background text-on-background relative border-t border-glass-border"
    >
      {/* ── Scroll Pinned Track Wrapper ── */}
      <div ref={trackRef} className="w-full relative">
        {/* ── Pinned Stage (Locked in Viewport during scroll) ── */}
        <div
          ref={stageRef}
          className="w-full h-screen max-h-[100dvh] flex flex-col justify-between max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 md:pt-28 pb-4 md:pb-6 overflow-hidden"
        >
          {/* Header & Subtitle */}
          <div className="text-center mb-2 md:mb-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral font-label-lg text-[11px] uppercase tracking-widest mb-1.5 font-bold">
              <Sparkles className="w-3 h-3" />
              <span>Business Technology Solutions</span>
            </div>
            <SectionHeading
              title="Your problem. Our build"
              subtitle="Scroll to explore how we transform core business operations with custom engineering."
            />
          </div>

          {/* ── Mobile Horizontal Tab Chips (< lg) ── */}
          <div className="flex lg:hidden overflow-x-auto gap-1.5 pb-1 mb-2 -mx-2 px-2 scrollbar-none snap-x shrink-0" role="tablist">
            {transformations.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => scrollToTab(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 snap-start shrink-0 border ${
                    isActive
                      ? "bg-brand-coral text-white border-brand-coral shadow-sm"
                      : "bg-surface text-text-secondary border-glass-border hover:text-on-background hover:border-brand-coral/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* ── Main Tabbed Stage (12-Col Layout) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch my-auto shrink">
            {/* Left: Vertical Tab Rail (Desktop >= lg) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-1.5 justify-center" role="tablist">
              {transformations.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => scrollToTab(idx)}
                    className={`group relative text-left px-3 py-2.5 rounded-xl border transition-all duration-200 flex items-start gap-2.5 ${
                      isActive
                        ? "bg-surface border-brand-coral/60 shadow-xs ring-1 ring-brand-coral/20"
                        : "bg-surface/40 hover:bg-surface border-glass-border hover:border-brand-coral/25 text-text-secondary hover:text-on-background"
                    }`}
                  >
                    {/* Active Indicator Bar */}
                    <div
                      className={`w-1 h-5 rounded-full mt-0.5 shrink-0 transition-colors duration-200 ${
                        isActive ? "bg-brand-coral" : "bg-transparent group-hover:bg-glass-border"
                      }`}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <div className="flex items-center gap-1.5">
                          <Icon
                            className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                              isActive ? "text-brand-coral" : "text-text-secondary group-hover:text-on-background"
                            }`}
                          />
                          <span
                            className={`text-xs md:text-sm font-bold tracking-tight transition-colors duration-200 ${
                              isActive ? "text-on-background" : "text-text-secondary group-hover:text-on-background"
                            }`}
                          >
                            {item.area}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full shrink-0 transition-colors duration-200 ${
                            isActive
                              ? "bg-brand-coral/10 text-brand-coral border border-brand-coral/20"
                              : "text-text-secondary/60 bg-transparent"
                          }`}
                        >
                          {item.skrollWay.badge}
                        </span>
                      </div>
                      <p
                        className={`text-[11px] leading-snug truncate ${
                          isActive ? "text-text-secondary" : "text-text-secondary/70"
                        }`}
                      >
                        {item.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Architectural Split Card (With Touch Gestures) */}
            <div
              ref={contentRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="lg:col-span-8 relative flex flex-col md:flex-row border border-glass-border rounded-2xl md:rounded-[1.75rem] overflow-hidden shadow-sm bg-surface select-none"
            >
              {/* Center Nexus Connector */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 bg-surface border border-glass-border rounded-full flex items-center justify-center shadow-sm pointer-events-none">
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-coral rotate-90 md:rotate-0 transition-transform duration-300" />
              </div>

              {/* Left Half: The Old Way (Friction) */}
              <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-7 bg-surface/50 md:border-r border-b md:border-b-0 border-glass-border flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-3.5 h-3.5 text-red-500/70 shrink-0" />
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-mono font-bold text-red-500/80 truncate">
                    {activeItem.area} · Friction
                  </span>
                </div>
                <h4 className="font-headline-md text-base sm:text-lg md:text-xl text-on-background/50 font-semibold mb-2 line-through decoration-red-400/40 text-balance leading-snug">
                  {activeItem.oldWay.title}
                </h4>
                <p className="font-body-md text-xs sm:text-sm text-text-secondary/80 leading-relaxed">
                  {activeItem.oldWay.desc}
                </p>
              </div>

              {/* Right Half: The Skroll Build */}
              <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-7 bg-surface relative overflow-hidden flex flex-col justify-center">
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-coral/[0.05] rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-coral shrink-0" />
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-mono font-bold text-brand-coral">
                        The Skroll Build
                      </span>
                    </div>
                    <span className="inline-flex text-[9px] md:text-[10px] font-mono font-semibold text-brand-coral bg-brand-coral/10 border border-brand-coral/20 px-2 py-0.5 rounded-full shrink-0">
                      {activeItem.skrollWay.badge}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-base sm:text-lg md:text-xl text-on-background font-bold mb-2 text-balance leading-snug">
                    {activeItem.skrollWay.title}
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {activeItem.skrollWay.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stage Controls (Step Counter & Swipe Hint on Mobile) */}
          <div className="flex items-center justify-between pt-1.5 md:pt-2 text-xs text-text-secondary shrink-0">
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="text-brand-coral font-bold">0{activeIdx + 1}</span>
              <span className="text-text-secondary/40">/</span>
              <span>0{transformations.length}</span>
              <span className="ml-2 text-text-secondary/80 hidden sm:inline">
                · {activeItem.area}
              </span>
            </div>

            {/* Navigation Arrows for Mobile & Touch */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-text-secondary/60 hidden sm:inline mr-1">
                Scroll to browse
              </span>
              <button
                onClick={() => scrollToTab(Math.max(0, activeIdx - 1))}
                disabled={activeIdx === 0}
                aria-label="Previous solution tab"
                className="w-7 h-7 rounded-full border border-glass-border bg-surface flex items-center justify-center text-text-secondary hover:text-on-background hover:border-brand-coral/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollToTab(Math.min(transformations.length - 1, activeIdx + 1))}
                disabled={activeIdx === transformations.length - 1}
                aria-label="Next solution tab"
                className="w-7 h-7 rounded-full border border-glass-border bg-surface flex items-center justify-center text-text-secondary hover:text-on-background hover:border-brand-coral/40 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. How We Engineer Solutions (Below Pinned Track) ── */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="pillars-container">
          <div className="mb-8 md:mb-12">
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
