"use server";

import { umkmDat, Category } from "@/data/UMKMData";
import { UMKMData } from "@/data/UMKMType";

export type FilterOptions = {
  search?: string;
  category?: string;
  minRating?: number;
  sortBy?: "name" | "rating" | "newest";
};

export async function getBusinesses(
  page: number = 1,
  limit: number = 9,
  filters?: FilterOptions
): Promise<{ businesses: UMKMData[]; hasMore: boolean; total: number }> {
  // Simulate network delay for realistic loading
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filteredData = [...umkmDat];

  // Apply search filter
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filteredData = filteredData.filter(
      (business) =>
        business.name.toLowerCase().includes(searchLower) ||
        business.description.toLowerCase().includes(searchLower) ||
        business.subcategory.toLowerCase().includes(searchLower)
    );
  }

  // Apply category filter
  if (filters?.category && filters.category !== "All") {
    filteredData = filteredData.filter(
      (business) => business.category === filters.category
    );
  }

  // Apply rating filter
  if (filters?.minRating && filters.minRating > 0) {
    filteredData = filteredData.filter(
      (business) => business.rating >= filters.minRating!
    );
  }

  // Apply sorting
  if (filters?.sortBy) {
    switch (filters.sortBy) {
      case "name":
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filteredData.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
        break;
    }
  } else {
    // Default: alphabetical by name
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  }

  const total = filteredData.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const hasMore = endIndex < total;

  return {
    businesses: paginatedData,
    hasMore,
    total,
  };
}

export async function getCategories(): Promise<string[]> {
  return Object.values(Category);
}

export async function getBusinessById(id: number): Promise<UMKMData | null> {
  // Simulate network delay for realistic loading
  await new Promise((resolve) => setTimeout(resolve, 200));
  
  const business = umkmDat.find((b) => b.id === id);
  return business || null;
}
