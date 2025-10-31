'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import ThemeToggler from './ThemeToggler';
import Image from 'next/image';
import { MapPinIcon, StoreIcon, MessageCircleWarningIcon } from 'lucide-react';

// --- Navigation Items Configuration ---
const navItems = [
  { href: '/map', label: 'Map', icon: <MapPinIcon /> },
  { href: '/umkm', label: 'UMKM', icon: <StoreIcon /> },
  { href: '/about', label: 'About', icon: <MessageCircleWarningIcon /> },
];

export function MobileNav({ }: { }) {
  return (
    <>
      {/* Top Header - Unchanged */}
      <header
        className={`lg:hidden bg-white shadow-sm fixed left-0 right-0 z-40 dark:bg-gray-900 dark:border-gray-800`}
      >
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" className="h-7 w-auto" width={28} height={28} />
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggler />
          </div>
        </div>
      </header>

      {/* Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-24 z-40">
        <div className="relative w-full h-full">
          <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-full h-16 px-2 dark:bg-gray-900/80 dark:border-gray-800">
            <div className="flex justify-around items-center h-full">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.icon}
                  <span className="text-xs mt-1 text-brand-600 dark:text-brand-300">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}