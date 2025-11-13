"use client";

import { useState, useEffect, useCallback } from "react";
import { UMKMData } from "@/data/UMKMType";
import { getBusinesses, FilterOptions } from "@/actions/businessActions";
import { useRouter, useSearchParams } from "next/navigation";

export function useDirectory(
  initialBusinesses: UMKMData[],
  initialFilters?: FilterOptions,
  initialTotal: number = 0,
  initialHasMore: boolean = true
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [businesses, setBusinesses] = useState<UMKMData[]>(initialBusinesses);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(initialTotal);

  // Filter states - Initialize from server-provided filters or URL params
  const [searchQuery, setSearchQuery] = useState(initialFilters?.search || "");
  const [debouncedSearch, setDebouncedSearch] = useState(initialFilters?.search || "");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilters?.category || "All");
  const [minRating, setMinRating] = useState<number>(initialFilters?.minRating || 0);
  const [sortBy, setSortBy] = useState<"name" | "rating" | "newest">(initialFilters?.sortBy || "name");

  // Update URL params when filters change
  const updateURL = useCallback((filters: {
    search?: string;
    category?: string;
    minRating?: number;
    sortBy?: string;
  }) => {
    const params = new URLSearchParams();
    
    if (filters.search) params.set("search", filters.search);
    if (filters.category && filters.category !== "All") params.set("category", filters.category);
    if (filters.minRating && filters.minRating > 0) params.set("minRating", filters.minRating.toString());
    if (filters.sortBy && filters.sortBy !== "name") params.set("sortBy", filters.sortBy);
    
    const queryString = params.toString();
    router.push(queryString ? `/umkm?${queryString}` : "/umkm", { scroll: false });
  }, [router]);

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
    // Update URL with current filters
    updateURL({
      search: debouncedSearch,
      category: selectedCategory,
      minRating: minRating,
      sortBy: sortBy,
    });
    
    // Fetch new data
    fetchBusinesses(1, true);
  }, [debouncedSearch, selectedCategory, minRating, sortBy, updateURL]);

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
