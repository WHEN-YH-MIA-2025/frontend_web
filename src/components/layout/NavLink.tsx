"use client";

import Link from 'next/link';
import { useNavigation } from '@/hooks/useNavigation';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly isScrolled?: boolean;
}

export function NavLink({ href, children, isScrolled = true }: NavLinkProps) {
  const { activePath } = useNavigation();
  const isActive = activePath === href;

  // Desktop styles
  const desktopClasses = cn(
    'hidden md:inline-flex px-4 py-2 text-sm font-medium transition-all rounded-lg relative',
    'hover:scale-105',
    // When not scrolled (transparent navbar)
    !isScrolled && [
      'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]',
      'hover:bg-white/10',
      isActive && 'bg-white/20 backdrop-blur-sm'
    ],
    // When scrolled (solid navbar)
    isScrolled && [
      isActive 
        ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300' 
        : 'text-gray-700 dark:text-gray-300 hover:bg-brand-50/50 dark:hover:bg-brand-950/30 hover:text-brand-600 dark:hover:text-brand-400'
    ]
  );

  // Mobile styles
  const mobileClasses = cn(
    'flex md:hidden flex-col items-center justify-center flex-1 py-2 px-1 text-xs transition-colors',
    isActive 
      ? 'text-brand-600 dark:text-brand-400' 
      : 'text-gray-500 hover:text-brand-600 dark:hover:text-brand-400'
  );

  return (
    <>
      {/* Desktop Link */}
      <Link href={href} className={desktopClasses}>
        {children}
      </Link>
      
      {/* Mobile Link */}
      <Link href={href} className={mobileClasses}>
        {children}
      </Link>
    </>
  );
}