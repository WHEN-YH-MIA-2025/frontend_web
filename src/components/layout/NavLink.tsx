"use client";

import Link from 'next/link';
import { useNavigation } from '@/hooks/useNavigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  readonly href: string;
  readonly children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const { activePath } = useNavigation();
  const isActive = activePath === href;

  // Base classes
  const mobileBaseClasses = "flex flex-col items-center justify-center flex-1 py-2 px-1 text-xs transition-colors";
  const desktopBaseClasses = "px-3 py-2 text-sm font-medium transition-colors rounded-md";

  // Active/Inactive classes
  const mobileActive = "text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500";
  const mobileInactive = "text-gray-500 hover:text-brand-600 dark:hover:text-brand-400";
  const desktopActive = "bg-brand-50 text-gray-900 dark:bg-brand-950 dark:text-white";
  const desktopInactive = "text-gray-500 hover:text-brand-900 dark:hover:text-brand-400";

  // Combining both sets of classes and applying the active/inactive classes
  const activeClasses = isActive ? `${mobileActive} ${desktopActive}` : `${mobileInactive} ${desktopInactive}`;
  const combinedClasses = `${mobileBaseClasses} ${desktopBaseClasses} ${activeClasses}`;

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}