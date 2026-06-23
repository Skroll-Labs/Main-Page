import Link from "next/link";
import Image from "next/image";

import { Link as LinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-on-background dark:bg-black w-full py-section-gap border-t border-white/5 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div>
          <Image
            alt="TicketFlow"
            className="h-8 w-auto mb-6"
            src="/logo.png"
            width={120}
            height={32}
          />
          <p className="font-body-md text-body-md text-surface-variant/70 mb-8">Modern event ticketing designed for growth and simplicity.</p>
          <p className="font-body-md text-body-md text-surface-variant/70 text-sm">© {new Date().getFullYear()} TicketFlow. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-button-text text-button-text text-white">Navigation</h4>
          <Link href="#" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">Home</Link>
          <Link href="#features" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">Features</Link>
          <Link href="#how-it-works" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">How It Works</Link>
          <Link href="#faq" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">FAQ</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-button-text text-button-text text-white">Contact</h4>
          <a href="mailto:hello@ticketflow.com" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">hello@ticketflow.com</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-button-text text-button-text text-white">Legal</h4>
          <Link href="#" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">Privacy Policy</Link>
          <Link href="#" className="font-body-md text-body-md text-surface-variant/70 hover:text-white transition-colors cursor-hover">Terms of Service</Link>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-surface-variant/70 hover:text-white cursor-hover"><LinkIcon className="w-5 h-5" /></a>
            <a href="#" className="text-surface-variant/70 hover:text-white cursor-hover"><LinkIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
