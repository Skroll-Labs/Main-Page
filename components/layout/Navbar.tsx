"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(0, { offset: 0 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          // @ts-ignore
          if (window.lenis) {
            // @ts-ignore
            window.lenis.scrollTo(element, { offset: -100 });
          } else {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
        setMobileMenuOpen(false);
      } else {
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Events", href: "/#events" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-6 flex justify-center pointer-events-none transition-transform duration-500">
      <nav
        id="mainNav"
        className={`pointer-events-auto relative w-full max-w-5xl rounded-full bg-surface/90 dark:bg-section-dark/80 backdrop-blur-md border border-glass-border shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
          scrolled ? "py-3 md:py-3.5" : "py-4 md:py-5"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-4 cursor-hover">
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center group">
              <span className="font-display-lg font-black text-2xl md:text-[26px] tracking-tighter text-on-background dark:text-white transition-colors duration-300">
                Skroll
              </span>
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-coral ml-0.5 transform group-hover:scale-125 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-button-text text-xs uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-brand-coral transition-colors cursor-hover relative group flex items-center justify-center py-1"
              >
                <span className="opacity-0 group-hover:opacity-100 absolute -left-2.5 transition-opacity text-brand-coral font-mono font-bold text-xs">[</span>
                {link.label}
                <span className="opacity-0 group-hover:opacity-100 absolute -right-2.5 transition-opacity text-brand-coral font-mono font-bold text-xs">]</span>
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <Button variant="primary" className="px-5 py-2 text-xs uppercase tracking-widest rounded-full hover:shadow-hover-button">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-full text-on-background dark:text-white focus:outline-none cursor-hover"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%+8px)] left-0 w-full rounded-3xl overflow-hidden bg-surface/95 dark:bg-section-dark/95 backdrop-blur-xl border border-glass-border shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.15)] flex flex-col py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="min-h-[48px] px-6 py-3 font-button-text text-xs uppercase tracking-widest text-secondary dark:text-surface-dim hover:text-brand-coral hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-b border-glass-border/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-brand-coral font-mono text-xs">→</span>
              </Link>
            ))}
            <div className="p-4 pt-4">
              <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                <Button variant="primary" className="w-full justify-center min-h-[44px] px-4 py-3 text-xs uppercase tracking-widest rounded-full">
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
