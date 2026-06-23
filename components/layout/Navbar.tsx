"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="mainNav"
      className={`fixed top-0 w-full z-50 bg-surface dark:bg-inverse-surface/80 backdrop-blur-md border-b border-glass-border dark:border-white/10 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="flex items-center gap-4 cursor-hover">
          <Link href="/">
            <Image
              alt="TicketFlow"
              className="h-8 w-auto"
              src="/logo.svg"
              width={160}
              height={32}
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors cursor-hover"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors cursor-hover"
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            className="font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors cursor-hover"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors cursor-hover"
          >
            Contact
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="#contact">
            <Button variant="primary" className="px-6 py-3 uppercase tracking-wider">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-on-background focus:outline-none cursor-hover"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface dark:bg-inverse-surface border-b border-glass-border shadow-lg flex flex-col py-4 px-margin-mobile">
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-4 font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors border-b border-glass-border/50"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-4 font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors border-b border-glass-border/50"
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="py-4 font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors border-b border-glass-border/50"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-4 font-button-text text-button-text uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors border-b border-glass-border/50"
          >
            Contact
          </Link>
          <div className="pt-6 pb-2">
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center px-6 py-3 uppercase tracking-wider">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
