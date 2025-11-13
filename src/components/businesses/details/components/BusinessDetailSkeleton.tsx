export function BusinessDetailSkeleton() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-2xl">
        {/* Image skeleton */}
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-300 dark:bg-gray-700" />
        
        {/* Content skeleton */}
        <div className="p-6 sm:p-8 md:p-10 space-y-4">
          <div className="w-32 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="w-3/4 h-10 bg-gray-300 dark:bg-gray-700 rounded-2xl" />
          <div className="w-1/2 h-5 bg-gray-300 dark:bg-gray-700 rounded-xl" />
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Two Column Layout Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* About Skeleton */}
          <div className="rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8">
            <div className="w-32 h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-6" />
            <div className="space-y-3">
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-lg" />
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-lg" />
              <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            </div>
          </div>

          {/* Gallery Skeleton */}
          <div className="rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8">
            <div className="w-32 h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6 sm:space-y-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8"
            >
              <div className="w-32 h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-6" />
              <div className="space-y-3">
                <div className="w-full h-16 bg-gray-300 dark:bg-gray-700 rounded-2xl" />
                <div className="w-full h-16 bg-gray-300 dark:bg-gray-700 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Skeleton */}
      <div className="rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8">
        <div className="w-32 h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-6" />
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl" />
      </div>
    </div>
  );
}
