"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { UMKMData } from "@/data/UMKMType";

interface HeroSectionProps {
  business: UMKMData;
}

export function HeroSection({ business }: HeroSectionProps) {
  const totalReviews = business.reviews?.length || 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-2xl"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 via-purple-500/5 to-cyan-500/5 dark:from-brand-400/10 dark:via-purple-400/10 dark:to-cyan-400/10" />
      
      <div className="relative">
        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
          {business.images[0] && (
            <Image
              src={business.images[0]}
              alt={business.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Rating badge - top right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/90 dark:bg-black/70 border border-white/60 dark:border-white/20 shadow-xl">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-lg">{business.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({totalReviews})</span>
          </div>
        </div>

        {/* Business Info */}
        <div className="relative p-6 sm:p-8 md:p-10">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/20 border border-brand-500/20 dark:border-brand-400/30 mb-4">
            <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
              {business.category}
            </span>
            {business.subcategory && (
              <>
                <span className="text-brand-500/50">•</span>
                <span className="text-sm text-brand-600/80 dark:text-brand-400/80">
                  {business.subcategory}
                </span>
              </>
            )}
          </div>

          {/* Business name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
            {business.name}
          </h1>

          {/* Location */}
          <div className="flex items-start gap-2 text-muted-foreground mb-4">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-500 dark:text-brand-400" />
            <p className="text-sm sm:text-base">{business.address}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
