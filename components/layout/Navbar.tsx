"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        setMobileMenuOpen(false);
      } else {
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-6 flex justify-center pointer-events-none transition-transform duration-500">
      <nav
        id="mainNav"
        className={`pointer-events-auto relative w-full max-w-5xl rounded-full bg-surface/90 dark:bg-[#0A0A0A]/80 backdrop-blur-md border border-glass-border shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 ${
          scrolled ? "py-3 md:py-3" : "py-4 md:py-5"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center gap-4 cursor-hover">
            <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
              <Image
                alt="TicketFlow"
                className="h-7 md:h-8 w-auto"
                src="/logo.svg"
                width={160}
                height={32}
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              onClick={(e) => handleNavClick(e, "/#features")}
              className="font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber transition-colors cursor-hover relative group flex items-center justify-center"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-3 transition-opacity text-warm-amber font-mono font-bold">[</span>
              Features
              <span className="opacity-0 group-hover:opacity-100 absolute -right-3 transition-opacity text-warm-amber font-mono font-bold">]</span>
            </Link>
            <Link
              href="/#how-it-works"
              onClick={(e) => handleNavClick(e, "/#how-it-works")}
              className="font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber transition-colors cursor-hover relative group flex items-center justify-center"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-3 transition-opacity text-warm-amber font-mono font-bold">[</span>
              How It Works
              <span className="opacity-0 group-hover:opacity-100 absolute -right-3 transition-opacity text-warm-amber font-mono font-bold">]</span>
            </Link>
            <Link
              href="/blog"
              onClick={(e) => handleNavClick(e, "/blog")}
              className="font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber transition-colors cursor-hover relative group flex items-center justify-center"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-3 transition-opacity text-warm-amber font-mono font-bold">[</span>
              Blog
              <span className="opacity-0 group-hover:opacity-100 absolute -right-3 transition-opacity text-warm-amber font-mono font-bold">]</span>
            </Link>
            <Link
              href="/#faq"
              onClick={(e) => handleNavClick(e, "/#faq")}
              className="font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber transition-colors cursor-hover relative group flex items-center justify-center"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-3 transition-opacity text-warm-amber font-mono font-bold">[</span>
              FAQ
              <span className="opacity-0 group-hover:opacity-100 absolute -right-3 transition-opacity text-warm-amber font-mono font-bold">]</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <Button variant="primary" className="px-3 py-1.5 text-xs uppercase tracking-widest rounded-full border border-brand-coral hover:bg-brand-coral/90">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-background dark:text-white focus:outline-none cursor-hover"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%+8px)] left-0 w-full rounded-2xl overflow-hidden bg-surface/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border border-glass-border shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.3)] flex flex-col py-2 z-50">
            <Link
              href="/#features"
              onClick={(e) => handleNavClick(e, "/#features")}
              className="px-6 py-4 font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber hover:bg-white/5 transition-colors border-b border-glass-border/50"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={(e) => handleNavClick(e, "/#how-it-works")}
              className="px-6 py-4 font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber hover:bg-white/5 transition-colors border-b border-glass-border/50"
            >
              How It Works
            </Link>
            <Link
              href="/blog"
              onClick={(e) => handleNavClick(e, "/blog")}
              className="px-6 py-4 font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber hover:bg-white/5 transition-colors border-b border-glass-border/50"
            >
              Blog
            </Link>
            <Link
              href="/#faq"
              onClick={(e) => handleNavClick(e, "/#faq")}
              className="px-6 py-4 font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber hover:bg-white/5 transition-colors border-b border-glass-border/50"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="px-6 py-4 font-button-text text-sm uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-warm-amber hover:bg-white/5 transition-colors border-b border-glass-border/50"
            >
              Contact
            </Link>
            <div className="p-6">
              <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                <Button variant="primary" className="w-full justify-center px-4 py-2 text-sm uppercase tracking-widest rounded-full border border-brand-coral">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
