# Business Detail Page Structure

This directory contains the business detail page implementation with a clean separation of concerns.

## Directory Structure

```
details/
├── components/          # Main components
│   ├── BusinessDetailContent.tsx    # Main layout orchestrator
│   ├── BusinessDetailSkeleton.tsx   # Loading state
│   └── index.ts        # Barrel export
├── hooks/              # Custom hooks (empty for now, ready for future use)
├── section/            # Section wrappers
│   ├── HeroSection.tsx           # Hero with image, name, rating
│   ├── AboutSection.tsx          # Business description
│   ├── ContactInfoSection.tsx    # Phone, email, website
│   ├── GallerySection.tsx        # Image gallery with modal
│   ├── OpeningHoursSection.tsx   # Business hours
│   ├── PricingRangeSection.tsx   # Price range display
│   ├── MapSection.tsx            # Google Maps integration
│   └── index.ts                  # Barrel export
└── index.ts            # Main barrel export
```

## Features

- ✅ **Server-Side Rendering**: All data is fetched server-side for SEO
- ✅ **Complete Metadata**: Dynamic OpenGraph and Twitter cards
- ✅ **Structured Data**: JSON-LD schema for search engines
- ✅ **Glassmorphism Design**: Apple liquid glass design language
- ✅ **Dark Mode Support**: Full dark mode compatibility
- ✅ **Responsive Layout**: Mobile-first responsive design
- ✅ **Loading States**: Skeleton screens for better UX
- ✅ **Image Gallery**: Interactive gallery with modal view
- ✅ **Map Integration**: Google Maps with directions

## Layout

The page follows the wireframe layout:
- Hero section (full width)
- Two-column layout:
  - Left: About, Gallery
  - Right: Contact Info, Opening Hours, Pricing
- Map section (full width)

## Usage

```tsx
import { getBusinessById } from "@/actions/businessActions";
import { BusinessDetailContent } from "@/components/businesses/details";

const business = await getBusinessById(id);
<BusinessDetailContent business={business} />
```
