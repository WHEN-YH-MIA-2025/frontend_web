"use client";

import { useNavigation } from '@/hooks/useNavigation';
import { MobileNav } from './MobileNav';
import { DesktopNavBar } from './DesktopNav';

export function ResponsiveNav() {
  const { isMobile } = useNavigation();

  return (
    <>
      {isMobile ? (
        <MobileNav />
      ) : (
        <DesktopNavBar />
      )}
    </>
  );
}