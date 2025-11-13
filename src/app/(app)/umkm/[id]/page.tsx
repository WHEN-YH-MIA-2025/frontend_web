import { getBusinessById } from "@/actions/businessActions";
import { BusinessDetailContent } from "@/components/businesses/details";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const business = await getBusinessById(parseInt(id));

  if (!business) {
    return {
      title: "Business Not Found",
      description: "The business you're looking for could not be found.",
    };
  }

  // Create a clean description from business description
  const description = business.description.slice(0, 160);

  return {
    title: `${business.name}`,
    description: description,
    keywords: [
      business.name,
      business.category,
      business.subcategory,
      "UMKM",
      "local business",
      "campus business",
    ].filter(Boolean),
    openGraph: {
      title: business.name,
      description: description,
      images: business.images.length > 0 ? [business.images[0]] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: business.name,
      description: description,
      images: business.images.length > 0 ? [business.images[0]] : [],
    },
    alternates: {
      canonical: `/umkm/${business.id}`,
    },
  };
}

async function BusinessDetailPage({ params }: Props) {
  const { id } = await params;
  const business = await getBusinessById(parseInt(id));

  // Handle not found
  if (!business) {
    notFound();
  }

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
        <BusinessDetailContent business={business} />
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: business.name,
            description: business.description,
            image: business.images,
            address: {
              "@type": "PostalAddress",
              streetAddress: business.address,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: business.coordinates.lat,
              longitude: business.coordinates.lng,
            },
            telephone: business.phone,
            email: business.email,
            url: business.website,
            priceRange: business.pricing
              ? `${business.pricing[0]}-${business.pricing[business.pricing.length - 1]}`
              : undefined,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: business.rating,
              reviewCount: business.reviews?.length || 0,
            },
            openingHoursSpecification: business.schedules.map((schedule) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: schedule.day,
              opens: schedule.open,
              closes: schedule.close,
            })),
          }),
        }}
      />
    </main>
  );
}

export default BusinessDetailPage;
