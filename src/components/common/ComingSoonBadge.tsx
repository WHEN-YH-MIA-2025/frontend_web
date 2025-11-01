"use client";

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComingSoonBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function ComingSoonBadge({ 
  className, 
  size = 'md', 
  animated = true 
}: ComingSoonBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4',
  };

  if (animated) {
    return (
      <motion.span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full font-medium',
          'bg-linear-to-r from-amber-500/10 to-orange-500/10',
          'border border-amber-500/20 text-amber-600 dark:text-amber-400',
          'backdrop-blur-sm',
          sizeClasses[size],
          className
        )}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Clock className={iconSizes[size]} />
        <span>Coming Soon</span>
      </motion.span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        'bg-linear-to-r from-amber-500/10 to-orange-500/10',
        'border border-amber-500/20 text-amber-600 dark:text-amber-400',
        'backdrop-blur-sm',
        sizeClasses[size],
        className
      )}
    >
      <Clock className={iconSizes[size]} />
      <span>Coming Soon</span>
    </span>
  );
}
