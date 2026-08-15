// components/blog/CTABlock.tsx
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

interface CTABlockProps {
  variant?: "inline" | "sidebar";
}

export function CTABlock({ variant = "inline" }: CTABlockProps) {
  if (variant === "sidebar") {
    return (
      <div className="rounded-3xl bg-surface border border-glass-border p-6 shadow-[var(--shadow-card)]">
        <p className="text-sm font-semibold text-on-background mb-1 leading-snug">
          Need a ticketing platform for your event?
        </p>
        <p className="text-xs text-text-secondary mb-4 leading-relaxed">
          Skroll is Sri Lanka&apos;s B2B event ticketing platform — built for organizers like you.
        </p>
        <div className="flex flex-col gap-2.5">
          <Link
            href="/#contact"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral text-white text-xs font-semibold min-h-[44px] px-4 py-2.5 transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(232,82,26,0.35)]"
          >
            Contact Us <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-glass-border text-on-background text-xs font-semibold min-h-[44px] px-4 py-2.5 transition-all duration-300 hover:border-brand-coral hover:text-brand-coral"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  // inline variant — full-width banner inside article body
  return (
    <div className="my-10 sm:my-12 rounded-3xl bg-surface border border-glass-border p-6 sm:p-8 shadow-[var(--shadow-card)] flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex-1">
        <p className="text-base sm:text-lg font-bold text-on-background mb-1 text-balance">
          Running an event in Sri Lanka?
        </p>
        <p className="text-text-secondary text-sm leading-relaxed text-balance">
          See how Skroll handles the entire ticketing operation — from setup to sold out.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
        <Link
          href="/#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral text-white text-sm font-semibold min-h-[44px] px-6 py-3 transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_40px_rgba(232,82,26,0.35)] hover:scale-105"
        >
          Contact Us <ArrowRight className="w-4 h-4 ml-0.5" />
        </Link>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-glass-border text-on-background text-sm font-semibold min-h-[44px] px-6 py-3 transition-all duration-300 hover:border-brand-coral hover:text-brand-coral"
        >
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
