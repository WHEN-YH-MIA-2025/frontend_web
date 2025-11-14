"use server";

import { umkmData, Category } from "@/data/UMKMData";
import { UMKMData } from "@/data/UMKM.type";

export type FilterOptions = {
  search?: string;
  category?: string;
  minRating?: number;
  sortBy?: "name" | "rating" | "newest";
  university?: string;
  city?: string;
};

export async function getBusinesses(
  page: number = 1,
  limit: number = 9,
  filters?: FilterOptions
): Promise<{ businesses: UMKMData[]; hasMore: boolean; total: number }> {
  // Simulate network delay for realistic loading
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filteredData = [...umkmData];

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

  // Apply university filter
  if (filters?.university && filters.university !== "All") {
    filteredData = filteredData.filter(
      (business) => business.university?.code === filters.university
    );
  }

  // Apply city filter
  if (filters?.city && filters.city !== "All") {
    filteredData = filteredData.filter(
      (business) => business.city === filters.city
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

export async function getUniversities(): Promise<string[]> {
  const universities = new Set<string>();
  umkmData.forEach((business) => {
    if (business.university?.code) {
      universities.add(business.university.code);
    }
  });
  return Array.from(universities).sort();
}

export async function getCities(): Promise<string[]> {
  const cities = new Set<string>();
  umkmData.forEach((business) => {
    if (business.city) {
      cities.add(business.city);
    }
  });
  return Array.from(cities).sort();
}

export async function getBusinessById(id: number): Promise<UMKMData | null> {
  // Simulate network delay for realistic loading
  await new Promise((resolve) => setTimeout(resolve, 200));
  
  const business = umkmData.find((b) => b.id === id);
  return business || null;
}
