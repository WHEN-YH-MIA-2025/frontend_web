"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-gray-900',
  {
    variants: {
      variant: {
        default: 'bg-brand text-white shadow-md hover:bg-brand-600 active:scale-95',
        outline: 'border-2 border-brand text-brand hover:bg-brand-50 dark:hover:bg-brand-950/50',
        ghost: 'hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-950/50',
        glass: 'backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 hover:bg-white/20 dark:hover:bg-black/30',
        gradient: 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-lg',
        xl: 'h-14 px-8 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  animated?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animated = true, children, ...props }, ref) => {
    const buttonClass = cn(buttonVariants({ variant, size, className }));
    
    if (animated) {
      // Separate motion props from button props
      const { onDrag, onDragStart, onDragEnd, onAnimationStart, ...buttonProps } = props as any;
      
      return (
        <motion.button
          className={buttonClass}
          ref={ref}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...buttonProps}
        >
          {children}
        </motion.button>
      );
    }
    
    return (
      <button
        className={buttonClass}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
