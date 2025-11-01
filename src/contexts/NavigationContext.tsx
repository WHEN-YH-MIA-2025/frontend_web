"use client";

import { usePathname } from 'next/navigation';
import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';

interface NavigationContextType {
  isMobile: boolean;
  activePath: string;
  isScrolled: boolean;
  scrollY: number;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  readonly children: ReactNode;
}

// The provider component
export function NavigationProvider({ children }: NavigationProviderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  // Mobile breakpoint (Tailwind's `md` breakpoint)
  const MOBILE_BREAKPOINT = 768;
  const SCROLL_THRESHOLD = 50;

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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setIsScrolled(currentScrollY > SCROLL_THRESHOLD);
      }, 10);
    };

    // Set initial state
    handleScroll();

    // Add event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const value = useMemo(() => ({
    isMobile,
    activePath: pathname,
    isScrolled,
    scrollY,
  }), [isMobile, pathname, isScrolled, scrollY]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}