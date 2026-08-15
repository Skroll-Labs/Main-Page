"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "@/lib/gsap";

function TwilioIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#F22F46">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4s-3.761 8.4-8.4 8.4S3.6 16.639 3.6 12s3.761-8.4 8.4-8.4zm-4.2 4.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm8.4 0a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm-8.4 8.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm8.4 0a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2z" />
    </svg>
  );
}

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#2EB67D"
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
      />
      <path
        fill="#E01E5A"
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
      />
      <path
        fill="#ECB22E"
        d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
      />
      <path
        fill="#36C5F0"
        d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      />
    </svg>
  );
}

function StripeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#635BFF">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.4 12.521.4 7.275.4 3.6 3.167 3.6 7.58c0 5.158 5.753 5.438 8.163 6.326 2.378.887 3.197 1.554 3.197 2.526 0 1.055-.956 1.583-2.375 1.583-2.607 0-5.32-1.222-7.23-2.27l-.92 5.584c2.253 1.066 5.43 1.671 8.15 1.671 5.518 0 9.415-2.607 9.415-7.26 0-5.467-5.824-5.83-8.024-6.59z" />
    </svg>
  );
}

function PayHereIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#E8521A">
      <rect width="20" height="15" x="2" y="4.5" rx="3" fill="#E8521A" />
      <rect width="20" height="3" x="2" y="8.5" fill="#FFFFFF" opacity="0.3" />
      <rect width="4" height="2.5" x="5" y="13.5" rx="0.5" fill="#FFFFFF" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function ApplePayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.16c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.12 1.83-.98 2.94 1.07.08 2.13-.46 2.79-1.28z" />
    </svg>
  );
}

function GooglePayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function ResendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="m14.28 0-1.85 1.85 5.44 5.44H0v2.62h17.87l-5.44 5.44 1.85 1.85L22.98 8.5 14.28 0z" />
      <path d="M0 21.38h24V24H0z" />
    </svg>
  );
}

function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.665 21.978a12 12 0 1 1 3.313-3.313l-9.978-12.665h-2.5v12h2.5V8.922l8.665 11.056zm-1.165-11.478a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  );
}

function ZapierIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF4A00">
      <path d="M13.438 0H10.56v7.719L5.1 2.26 3.067 4.295l5.459 5.459H.808v2.876h7.718L3.067 18.09l2.034 2.035 5.46-5.46v7.718h2.877v-7.718l5.459 5.46 2.035-2.035-5.46-5.46h7.719V9.754h-7.719l5.46-5.46-2.035-2.034-5.46 5.46z" />
    </svg>
  );
}

export function Integrations() {
  const ref = useScrollAnimation(() => {
    gsap.fromTo(
      ".integration-header",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  });

  const partners = [
    { name: "PayHere", component: PayHereIcon },
    { name: "Stripe", component: StripeIcon },
    { name: "Apple Pay", component: ApplePayIcon },
    { name: "Google Pay", component: GooglePayIcon },
    { name: "WhatsApp", component: WhatsAppIcon },
    { name: "Twilio", component: TwilioIcon },
    { name: "Resend", component: ResendIcon },
    { name: "Next.js", component: NextjsIcon },
    { name: "Slack", component: SlackIcon },
    { name: "Zapier", component: ZapierIcon },
  ];

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 border-y border-glass-border overflow-hidden bg-background relative"
    >
      <div className="integration-header text-center mb-8 md:mb-12 px-margin-mobile md:px-margin-desktop relative z-10">
        <span className="font-label-lg text-xs uppercase tracking-widest text-brand-coral font-bold block mb-2">
          ECOSYSTEM &amp; COMPATIBILITY
        </span>
        <h3 className="font-headline-md text-2xl md:text-3xl text-on-background font-bold tracking-tight text-balance">
          Works With the Services You Already Use
        </h3>
        <p className="font-body-md text-sm md:text-base text-text-secondary max-w-xl mx-auto text-balance mt-2">
          Connect local LKR payment gateways, global card processors, instant SMS
          channels, and modern cloud APIs.
        </p>
      </div>

      <div className="marquee-container w-full overflow-hidden py-3">
        <div className="marquee-content flex w-max flex-nowrap gap-6 sm:gap-8 md:gap-10 items-center px-4">
          {[...Array(3)].map((_, loopIdx) => (
            <React.Fragment key={loopIdx}>
              {partners.map((partner) => {
                const Icon = partner.component;
                return (
                  <div
                    key={`${partner.name}-${loopIdx}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface/90 border border-glass-border shadow-xs hover:border-brand-coral/40 hover:shadow-hover-card hover:-translate-y-1 transition-all duration-300 flex-shrink-0 group cursor-default"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                    </div>
                    <span className="font-headline-md text-sm md:text-base text-on-background font-semibold tracking-tight">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

