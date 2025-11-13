"use client";

import { NavLink } from "./NavLink";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { useNavigation } from "@/hooks/useNavigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ComingSoonBadge } from "@/components/common/ComingSoonBadge";

const navItems: Array<{ href: string; label: string; comingSoon?: boolean }> = [
  { href: "/", label: "Home" },
  { href: "/maps", label: "Maps" },
  { href: "/about", label: "About" },
  { href: "/umkm", label: "Directory" },
];

export function DesktopNavBar() {
  const { isScrolled } = useNavigation();

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
        isScrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6">
        {/* Use grid for perfect centering */}
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo (left) */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              scale: isScrolled ? 0.95 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className={cn(
                "flex items-center space-x-2 group transition-all",
                isScrolled
                  ? "text-brand-600 dark:text-brand-400 drop-shadow-xl"
                  : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] dark:text-white"
              )}
            >
              <span className="text-2xl font-bold group-hover:scale-105 transition-transform">
                SpillDong!
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links (centered) */}
          <div className="flex justify-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative flex items-center gap-2">
                <NavLink href={item.href} isScrolled={isScrolled}>
                  {item.label}
                </NavLink>
                {item.comingSoon && <ComingSoonBadge size="sm" animated={false} />}
              </div>
            ))}
          </div>

          {/* Actions (right) */}
          <div className="flex justify-end items-center space-x-3">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}