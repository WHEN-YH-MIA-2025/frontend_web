"use client";

import { motion } from "framer-motion";
import { UMKMData } from "@/data/UMKMType";
import { MapPin, Navigation } from "lucide-react";

interface MapSectionProps {
  business: UMKMData;
}

export function MapSection({ business }: MapSectionProps) {
  const { lat, lng } = business.coordinates;
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 p-6 sm:p-8 pb-4">
          <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-400/20">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Location</h2>
        </div>

        {/* Map container */}
        <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
          <div className="relative w-full h-80 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/60 dark:border-white/10 bg-gray-100 dark:bg-gray-900">
            {/* Static map image from Google Maps */}
            <iframe
              src={`https://www.google.com/maps?q=${lat},${lng}&hl=en&z=18&output=embed&iwloc=A&dg=all&scrollwheel=1&disableDefaultUI=1`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Address and action buttons */}
          <div className="mt-4 space-y-3">
            {/* Address display */}
            <div className="p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="font-medium">{business.address}</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <MapPin className="w-5 h-5" />
                <span>View on Map</span>
              </motion.a>

              <motion.a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-linear-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
