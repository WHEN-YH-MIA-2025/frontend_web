"use client";

import { useDirectory } from "@/hooks/useDirectory";
import { UMKMData } from "@/data/UMKMType";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { BusinessCard } from "@/components/businesses/BusinessCard";
import { BusinessGridSkeleton } from "@/components/businesses/BusinessCardSkeleton";
import { InfiniteScrollTrigger } from "./InfiniteScrollTrigger";
import { motion } from "framer-motion";
import { Store } from "lucide-react";

interface DirectoryContentProps {
  readonly initialBusinesses: UMKMData[];
  readonly categories: string[];
}

export function DirectoryContent({
  initialBusinesses,
  categories,
}: DirectoryContentProps) {
  const {
    businesses,
    isLoading,
    hasMore,
    total,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
    loadMore,
    resetFilters,
  } = useDirectory(initialBusinesses);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search by name, category, or description..."
      />

      {/* Filters */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        minRating={minRating}
        onRatingChange={setMinRating}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onReset={resetFilters}
      />

      {/* Results count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-black/30 border border-white/40 dark:border-white/10 w-fit shadow-lg"
      >
        <Store className="w-4 h-4 text-brand-600 dark:text-brand-400" />
        <span className="text-sm font-medium text-foreground">
          Showing <span className="font-bold text-brand-600 dark:text-brand-400">{businesses.length}</span> of <span className="font-bold">{total}</span> businesses
        </span>
      </motion.div>

      {/* Business Grid */}
      {isLoading && businesses.length === 0 && (
        <BusinessGridSkeleton count={9} />
      )}
      
      {!isLoading && businesses.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
            <Store className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No businesses found
          </h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/80 dark:border-white/10 text-foreground font-medium shadow-lg hover:bg-white/80 dark:hover:bg-white/10 transition-all"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
      
      {businesses.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <BusinessCard key={business.id} business={business} index={index} />
            ))}
          </div>

          {/* Infinite scroll trigger */}
          <InfiniteScrollTrigger
            onLoadMore={loadMore}
            hasMore={hasMore}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
}
