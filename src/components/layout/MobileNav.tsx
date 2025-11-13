'use client';

import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
import { Home, MapPin, Store, Info } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Navigation Items Configuration ---
const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/maps', label: 'Maps', icon: MapPin },
  { href: '/umkm', label: 'UMKM', icon: Store },
  { href: '/about', label: 'About', icon: Info },
];

export function MobileNav() {
  const { isScrolled } = useNavigation();

  return (
    <>
      {/* Top Header */}
      <motion.header
        className={cn(
          'md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled 
            ? 'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-md border-b border-gray-200/20 dark:border-gray-800/20' 
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link 
            href="/" 
            className={cn(
              "flex items-center space-x-2 transition-all",
              isScrolled 
                ? "text-brand-600 dark:text-brand-400" 
                : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            )}
          >
            <span className="text-xl font-bold">SpillDong!</span>
          </Link>
          <ThemeToggler />
        </div>
      </motion.header>

      {/* Bottom Navigation Bar */}
      <motion.nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="relative w-full px-4 pb-4">
          <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-800/50 shadow-2xl rounded-2xl overflow-hidden">
            <div className="flex justify-around items-center h-16 px-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all hover:scale-110 group"
                  >
                    <Icon className="h-5 w-5 mb-1 text-gray-600 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}