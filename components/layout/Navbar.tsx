"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="flex items-center gap-4 cursor-hover">
          {/* We will just use an image tag for the logo as in the HTML */}
          <Image
            alt="TicketFlow"
            className="h-8 w-auto"
            src="/logo.svg"
            width={160}
            height={32}
          />
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
          {/* Note: Project spec said Hero CTA should be "Contact Us". Navbar wasn't specified but Contact Us fits better here too. */}
          <Link href="#contact">
            <Button variant="primary" className="px-6 py-3 uppercase tracking-wider">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
