"use client";

export function BusinessCardSkeleton() {
  return (
    <div className="relative h-full rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-black/40 border border-white/80 dark:border-white/20 shadow-xl overflow-hidden">
      {/* Image skeleton */}
      <div className="relative w-full h-48 bg-muted/50 dark:bg-muted/20 animate-pulse" />

      {/* Content skeleton */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <div className="h-6 bg-muted rounded animate-pulse w-3/4" />
        
        {/* Subcategory */}
        <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse w-full" />
          <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
        </div>

        {/* Info items */}
        <div className="space-y-2 pt-2">
          <div className="h-4 bg-muted rounded animate-pulse w-full" />
          <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
          <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        </div>

        {/* Pricing */}
        <div className="pt-4">
          <div className="h-5 bg-muted rounded animate-pulse w-1/3" />
        </div>
      </div>
    </div>
  );
}

export function BusinessGridSkeleton({ count = 9 }: { readonly count?: number }) {
  const skeletons = Array.from({ length: count }, (_, i) => `skeleton-${i}`);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skeletons.map((id) => (
        <BusinessCardSkeleton key={id} />
      ))}
    </div>
  );
}
