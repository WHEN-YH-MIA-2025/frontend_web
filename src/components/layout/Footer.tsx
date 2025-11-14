"use client";

import Link from 'next/link';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pb-24 md:pb-0">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brand-600 to-brand-400">
                SpillDong!
              </h3>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting students with local businesses around them.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by Team WHEN YH</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/umkm" className="text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Businesses
                </Link>
              </li>
              <li>
                <Link href="/maps" className="text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Maps
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:mail@spilldong.app" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SpillDong. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
