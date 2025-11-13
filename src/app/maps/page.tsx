"use client";

import { MapContainer } from '@/components/map';
import { umkmDat } from '@/data/UMKMData';

// Get API key from environment variable
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function MapsPage() {
  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h2 className="text-2xl font-bold text-destructive mb-2">Configuration Error</h2>
          <p className="text-muted-foreground">Google Maps API key is not configured.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file.
          </p>
        </div>
      </div>
    );
  }

  return <MapContainer businesses={umkmDat} apiKey={GOOGLE_MAPS_API_KEY} />;
}
