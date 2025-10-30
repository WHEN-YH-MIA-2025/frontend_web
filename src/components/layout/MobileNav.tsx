'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import ThemeToggler from './ThemeToggler';
import Image from 'next/image';

// --- SVG Icons ---
// Note: In a real app, these would likely be in their own files.

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10V7" />
  </svg>
);
const StationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const SessionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);
const ScanIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// --- Navigation Items Configuration ---
const navItems = [
  { href: '/map', label: 'Map', icon: <MapIcon /> },
  { href: '/stations', label: 'Stations', icon: <StationsIcon /> },
  { href: '/sessions', label: 'Sessions', icon: <SessionsIcon /> },
  { href: '/wallet', label: 'Wallet', icon: <WalletIcon /> },
];

export function MobileNav({ }: { }) {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  useEffect(()=>{ const el = document.getElementById('dynamic-branding-logo'); if (el) setLogoUrl(el.getAttribute('data-logo')); },[]);

  const handleScanClick = () => setIsScanModalOpen(true);

  // Split nav items for layout purposes
  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2, 4);

  return (
    <>
      {/* Top Header - Unchanged */}
      <header
        className={`lg:hidden bg-white shadow-sm fixed left-0 right-0 z-40 dark:bg-gray-900 dark:border-gray-800`}
      >
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            {logoUrl ? <Image src={logoUrl} alt="Logo" className="h-7 w-auto" width={28} height={28} /> : <h1 className="text-xl font-bold text-brand-600">Tiar</h1>}
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggler />
          </div>
        </div>
      </header>

      {/* Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-24 z-40">
        <div className="relative w-full h-full">
          {/* Scan Button (Center) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
             <button
                onClick={handleScanClick}
                className="bg-gradient-to-br from-brand-300 to-brand-500 rounded-3xl w-15 h-15 flex items-center justify-center shadow-xl active:scale-95 transition-all duration-200"
                aria-label="Scan QR Code"
              >
                {ScanIcon()}
              </button>
          </div>

          {/* Nav background and items container */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-full h-16 px-2 dark:bg-gray-900/80 dark:border-gray-800">
            <div className="flex justify-between items-center h-full">
              {/* Left Nav Items */}
              <div className="flex justify-around w-full px-2">
                {leftItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.icon}
                    <span className="text-xs mt-1 text-brand-600 dark:text-brand-300">{item.label}</span>
                  </NavLink>
                ))}
              </div>

              {/* Spacer for the central button */}
              <div className="w-12 flex-shrink-0" />

              {/* Right Nav Items */}
              <div className="flex justify-around w-full px-2">
                {rightItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.icon}
                    <span className="text-xs mt-1 text-brand-600 dark:text-brand-300">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}