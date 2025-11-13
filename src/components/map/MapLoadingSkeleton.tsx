"use client";

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function MapLoadingSkeleton() {
  return (
    <div className="h-screen w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <Loader2 className="w-12 h-12 text-brand-500" />
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Loading Map</h3>
        <p className="text-sm text-muted-foreground">Preparing your location data...</p>
      </div>
    </div>
  );
}
