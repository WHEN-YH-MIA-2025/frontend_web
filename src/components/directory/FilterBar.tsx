"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

type SortOption = "name" | "rating" | "newest";

interface FilterBarProps {
  readonly categories: string[];
  readonly universities: string[];
  readonly cities: string[];
  readonly selectedCategory: string;
  readonly onCategoryChange: (category: string) => void;
  readonly selectedUniversity: string;
  readonly onUniversityChange: (university: string) => void;
  readonly selectedCity: string;
  readonly onCityChange: (city: string) => void;
  readonly minRating: number;
  readonly onRatingChange: (rating: number) => void;
  readonly sortBy: SortOption;
  readonly onSortChange: (sort: SortOption) => void;
  readonly onReset: () => void;
}

export function FilterBar({
  categories,
  universities,
  cities,
  selectedCategory,
  onCategoryChange,
  selectedUniversity,
  onUniversityChange,
  selectedCity,
  onCityChange,
  minRating,
  onRatingChange,
  sortBy,
  onSortChange,
  onReset,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters =
    selectedCategory !== "All" || 
    selectedUniversity !== "All" || 
    selectedCity !== "All" || 
    minRating > 0 || 
    sortBy !== "name";

  return (
    <div className="space-y-4">
      {/* Filter toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-full overflow-hidden rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/90 dark:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-brand-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg">
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Filters</span>
                {hasActiveFilters && (
                  <span className="px-2 py-0.5 rounded-full bg-brand-500 text-white text-xs font-bold">
                    {[
                      selectedCategory !== "All", 
                      selectedUniversity !== "All",
                      selectedCity !== "All",
                      minRating > 0, 
                      sortBy !== "name"
                    ].filter(Boolean).length}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {isOpen ? "Hide" : "Show"} filter options
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onReset();
                }}
                className="px-3 py-1.5 rounded-lg bg-red-500/10 dark:bg-red-400/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 dark:hover:bg-red-400/20 text-sm font-medium transition-all flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </motion.button>
            )}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* Expanded container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="p-6 rounded-2xl backdrop-blur-2xl bg-white/20 dark:bg-black/20 border border-white/90 dark:border-white/20 shadow-xl hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Category */}
                <div className="space-y-2">
                  <label
                    htmlFor="category-filter"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category-filter"
                      value={selectedCategory}
                      onChange={(e) => onCategoryChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-black/30 border border-white/60 dark:border-white/10 text-foreground dark:text-white backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      style={{
                        colorScheme: "light dark",
                      }}
                    >
                      <option value="All">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* University */}
                <div className="space-y-2">
                  <label
                    htmlFor="university-filter"
                    className="block text-sm font-semibold text-foreground"
                  >
                    University
                  </label>
                  <div className="relative">
                    <select
                      id="university-filter"
                      value={selectedUniversity}
                      onChange={(e) => onUniversityChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-black/30 border border-white/60 dark:border-white/10 text-foreground dark:text-white backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      style={{
                        colorScheme: "light dark",
                      }}
                    >
                      <option value="All">All Universities</option>
                      {universities.map((university) => (
                        <option key={university} value={university}>
                          {university}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* City */}
                <div className="space-y-2">
                  <label
                    htmlFor="city-filter"
                    className="block text-sm font-semibold text-foreground"
                  >
                    City
                  </label>
                  <div className="relative">
                    <select
                      id="city-filter"
                      value={selectedCity}
                      onChange={(e) => onCityChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-black/30 border border-white/60 dark:border-white/10 text-foreground dark:text-white backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      style={{
                        colorScheme: "light dark",
                      }}
                    >
                      <option value="All">All Cities</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <label
                    htmlFor="rating-filter"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Minimum Rating
                  </label>
                  <div className="relative">
                    <select
                      id="rating-filter"
                      value={minRating}
                      onChange={(e) => onRatingChange(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-black/30 border border-white/60 dark:border-white/10 text-foreground dark:text-white backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      style={{
                        colorScheme: "light dark",
                      }}
                    >
                      <option value={0}>Any Rating</option>
                      <option value={3}>3+ Stars ⭐⭐⭐</option>
                      <option value={4}>4+ Stars ⭐⭐⭐⭐</option>
                      <option value={4.5}>4.5+ Stars ⭐⭐⭐⭐⭐</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Sort By */}
                <div className="space-y-2">
                  <label
                    htmlFor="sort-filter"
                    className="block text-sm font-semibold text-foreground"
                  >
                    Sort By
                  </label>
                  <div className="relative">
                    <select
                      id="sort-filter"
                      value={sortBy}
                      onChange={(e) =>
                        onSortChange(e.target.value as SortOption)
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-black/30 border border-white/60 dark:border-white/10 text-foreground dark:text-white backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                      style={{
                        colorScheme: "light dark",
                      }}
                    >
                      <option value="name">Name (A-Z)</option>
                      <option value="rating">Highest Rating</option>
                      <option value="newest">Newest First</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
