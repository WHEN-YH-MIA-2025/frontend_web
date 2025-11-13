import { BusinessDetailSkeleton } from "@/components/businesses/details/components/BusinessDetailSkeleton";

export default function Loading() {
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
        <BusinessDetailSkeleton />
      </div>
    </main>
  );
}
