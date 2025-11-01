"use client";

import { useState, useEffect } from 'react';

interface UseScrollPositionOptions {
  threshold?: number;
  debounceMs?: number;
}

export function useScrollPosition({ threshold = 50, debounceMs = 10 }: UseScrollPositionOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setIsScrolled(currentScrollY > threshold);
      }, debounceMs);
    };

    // Set initial state
    handleScroll();

    // Add event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, debounceMs]);

  return { isScrolled, scrollY };
}
