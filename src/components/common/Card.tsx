"use client";

import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const cardVariants = cva(
  'rounded-xl transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground border border-border shadow-sm',
        glass: 'backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 shadow-lg',
        gradient: 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-border shadow-md',
        elevated: 'bg-card text-card-foreground shadow-xl hover:shadow-2xl',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-lg',
        glow: 'hover:shadow-brand-500/20 hover:shadow-xl',
        scale: 'hover:scale-[1.02]',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'none',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  animated?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, animated = false, children, ...props }, ref) => {
    const cardClass = cn(cardVariants({ variant, padding, hover, className }));
    
    if (animated) {
      // Separate motion props from div props
      const { onDrag, onDragStart, onDragEnd, onAnimationStart, ...divProps } = props as any;
      
      return (
        <motion.div
          className={cardClass}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          {...divProps}
        >
          {children}
        </motion.div>
      );
    }
    
    return (
      <div
        className={cardClass}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
