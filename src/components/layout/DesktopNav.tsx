"use client";

import { NavLink } from './NavLink';
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
import Image from 'next/image';

const navItems = [
  { href: '/map', label: 'Map' },
  { href: '/stations', label: 'Stations' },
  { href: '/sessions', label: 'Sessions' },
  { href: '/scan', label: 'Scan' },
];

export function DesktopNavBar() {

  return (
    <nav
      className={`fixed hidden md:flex bg-white border-gray-200 shadow-sm dark:border-gray-800 dark:bg-gray-900 left-0 right-0 z-40`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-brand-600">Tiar</span>
            </Link>
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}