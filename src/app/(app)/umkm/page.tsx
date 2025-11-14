import { getBusinesses, getCategories, getUniversities, getCities, FilterOptions } from "@/actions/businessActions";
import { DirectoryContent } from "@/components/directory/DirectoryContent";
import { Suspense } from "react";
import { BusinessGridSkeleton } from "@/components/businesses/BusinessCardSkeleton";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Business Directory",
  description: "Discover local businesses around your campus. Find food, laundry, and more.",
};

type SearchParams = Promise<{
  search?: string;
  category?: string;
  university?: string;
  city?: string;
  minRating?: string;
  sortBy?: string;
  page?: string;
}>;

async function DirectoryPage({ searchParams }: { searchParams: SearchParams }) {
  // Resolve search params
  const params = await searchParams;
  
  // Build filter options from query params
  const filters: FilterOptions = {
    search: params.search,
    category: params.category,
    university: params.university,
    city: params.city,
    minRating: params.minRating ? parseFloat(params.minRating) : undefined,
    sortBy: params.sortBy as FilterOptions['sortBy'],
  };
  
  const currentPage = params.page ? parseInt(params.page) : 1;
  
  // Fetch filtered data server-side
  const [businessesResult, categories, universities, cities] = await Promise.all([
    getBusinesses(currentPage, 9, filters),
    getCategories(),
    getUniversities(),
    getCities(),
  ]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
      
      {/* Multiple floating gradient orbs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 -right-20 w-[450px] h-[450px] bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content with added margins */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-24 md:py-32 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Business{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 via-purple-600 to-cyan-600 dark:from-brand-400 dark:via-purple-400 dark:to-cyan-400 animate-gradient">
              Directory
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore {businessesResult.total}+ local businesses around your campus
          </p>
        </div>

        {/* Directory Content */}
        <Suspense fallback={<BusinessGridSkeleton count={9} />}>
          <DirectoryContent
            initialBusinesses={businessesResult.businesses}
            categories={categories}
            universities={universities}
            cities={cities}
            initialFilters={filters}
            initialTotal={businessesResult.total}
            initialHasMore={businessesResult.hasMore}
          />
        </Suspense>
      </div>
    </main>
  );
}

export default DirectoryPage;
