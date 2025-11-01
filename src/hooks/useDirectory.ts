"use client";

import { useState, useEffect, useCallback } from "react";
import { UMKMData } from "@/data/UMKMType";
import { getBusinesses, FilterOptions } from "@/actions/businessActions";

export function useDirectory(initialBusinesses: UMKMData[]) {
  const [businesses, setBusinesses] = useState<UMKMData[]>(initialBusinesses);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<"name" | "rating" | "newest">("name");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch businesses based on filters
  const fetchBusinesses = useCallback(
    async (pageNum: number, reset: boolean = false) => {
      setIsLoading(true);
      try {
        const filters: FilterOptions = {
          search: debouncedSearch,
          category: selectedCategory,
          minRating: minRating,
          sortBy: sortBy,
        };

        const result = await getBusinesses(pageNum, 9, filters);

        if (reset) {
          setBusinesses(result.businesses);
        } else {
          setBusinesses((prev) => [...prev, ...result.businesses]);
        }

        setHasMore(result.hasMore);
        setTotal(result.total);
        setPage(pageNum);
      } catch (error) {
        console.error("Failed to fetch businesses:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [debouncedSearch, selectedCategory, minRating, sortBy]
  );

  // Reset and fetch when filters change
  useEffect(() => {
    fetchBusinesses(1, true);
  }, [debouncedSearch, selectedCategory, minRating, sortBy]);

  // Load more businesses
  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      fetchBusinesses(page + 1, false);
    }
  }, [isLoading, hasMore, page, fetchBusinesses]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setSearchQuery("");
    setDebouncedSearch("");
    setSelectedCategory("All");
    setMinRating(0);
    setSortBy("name");
  }, []);

  return {
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
  };
}
