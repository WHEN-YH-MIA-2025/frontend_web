"use client";

import { UMKMData } from "@/data/UMKMType";
import {
  HeroSection,
  AboutSection,
  ContactInfoSection,
  GallerySection,
  OpeningHoursSection,
  PricingRangeSection,
  MapSection,
} from "../section";

interface BusinessDetailContentProps {
  business: UMKMData;
}

export function BusinessDetailContent({ business }: BusinessDetailContentProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section - Full Width */}
      <HeroSection business={business} />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column - Takes 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* About Section */}
          <AboutSection business={business} />

          {/* Gallery Section */}
          <GallerySection business={business} />
        </div>

        {/* Right Column - Takes 1/3 width on large screens */}
        <div className="lg:col-span-1 space-y-6 sm:space-y-8">
          {/* Contact Info */}
          <ContactInfoSection business={business} />

          {/* Opening Hours */}
          <OpeningHoursSection business={business} />

          {/* Pricing Range */}
          <PricingRangeSection business={business} />
        </div>
      </div>

      {/* Map Section - Full Width */}
      <MapSection business={business} />
    </div>
  );
}
