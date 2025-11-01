"use client";

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LoadingSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string;
  height?: string;
}

export function LoadingSkeleton({ 
  variant = 'rectangular', 
  width,
  height,
  className,
  ...props 
}: LoadingSkeletonProps) {
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl h-48',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-muted',
        variantClasses[variant],
        className
      )}
      style={{ width, height }}
      {...props}
    />
  );
}

export function BusinessCardSkeleton() {
  return (
    <div className="border border-border rounded-xl p-5 space-y-4">
      <LoadingSkeleton variant="rectangular" className="w-full h-40" />
      <LoadingSkeleton variant="text" className="w-3/4 h-6" />
      <LoadingSkeleton variant="text" className="w-1/2 h-4" />
      <div className="flex gap-2">
        <LoadingSkeleton variant="rectangular" className="grow h-10" />
        <LoadingSkeleton variant="rectangular" className="w-10 h-10" />
      </div>
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="pt-32 pb-12 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <LoadingSkeleton className="h-12 w-3/4 mx-auto" />
            <LoadingSkeleton className="h-6 w-1/2 mx-auto" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BusinessCardSkeleton />
          <BusinessCardSkeleton />
          <BusinessCardSkeleton />
        </div>
      </div>
    </div>
  );
}
