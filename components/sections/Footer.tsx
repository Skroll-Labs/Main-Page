import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-white w-full py-12 md:py-16 border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-headline-xl text-3xl font-extrabold tracking-tight text-white group-hover:text-brand-coral transition-colors">
                Skroll<span className="text-brand-coral">.</span>
              </span>
            </Link>
            <p className="font-headline-md text-base text-white/80 font-medium">
              Makes everything better.
            </p>
            <p className="font-body-md text-sm text-white/50 leading-relaxed max-w-sm">
              Skroll — Event Systems &amp; Business Technology Solutions, Sri Lanka.
              Building purpose-engineered tools for events that run themselves and businesses that run better.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-label-lg text-xs uppercase tracking-widest text-white/40">
              Navigation
            </h4>
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                About
              </Link>
              <Link
                href="/#ticketing"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Ticketing
              </Link>
              <Link
                href="/#solutions"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Solutions
              </Link>
              <Link
                href="/blog"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Blog
              </Link>
              <Link
                href="/#faq"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Solutions & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-label-lg text-xs uppercase tracking-widest text-white/40">
              Direct Contact
            </h4>
            <div className="flex flex-col space-y-1">
              <a
                href="mailto:hello@skroll.lk"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                hello@skroll.lk
              </a>
              <Link
                href="/#contact"
                className="font-body-md text-sm text-white/70 hover:text-brand-coral transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-label-lg text-xs uppercase tracking-widest text-white/40">
              Legal
            </h4>
            <div className="flex flex-col space-y-1">
              <Link
                href="#"
                className="font-body-md text-sm text-white/50 hover:text-white transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-body-md text-sm text-white/50 hover:text-white transition-colors cursor-hover min-h-[36px] flex items-center"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-body-md text-center sm:text-left">
          <p>© {currentYear} Skroll. All rights reserved.</p>
          <p className="text-white/30">
            Engineered with precision in Colombo, Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  );
}

