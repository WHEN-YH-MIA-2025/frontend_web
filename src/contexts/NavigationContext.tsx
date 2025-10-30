"use client";

import { usePathname } from 'next/navigation';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface NavigationContextType {
  isMobile: boolean;
  activePath: string;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

// The provider component
export function NavigationProvider({ children }: NavigationProviderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Mobile breakpoint (Tailwind's `md` breakpoint)
  const MOBILE_BREAKPOINT = 768;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = {
    isMobile,
    activePath: pathname,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}