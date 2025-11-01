"use client";

import { motion } from "framer-motion";
import { UMKMData } from "@/data/UMKMType";
import { MapPin, Star, Clock, Eye, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BusinessCardProps {
  readonly business: UMKMData;
  readonly index?: number;
}

export function BusinessCard({ business, index = 0 }: BusinessCardProps) {
  const priceDisplay = business.pricing && business.pricing.length > 0
    ? business.pricing.length === 1
      ? `${(business.pricing[0] / 1000).toFixed(0)}k`
      : `${(business.pricing[0] / 1000).toFixed(0)}k-${(business.pricing[1] / 1000).toFixed(0)}k`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <Link href={`/umkm/${business.id}`}>
        <div className="relative h-full rounded-3xl backdrop-blur-2xl bg-white/90 dark:bg-black/60 border border-white/60 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-brand-500/20 dark:hover:shadow-brand-400/30 transition-all duration-500 overflow-hidden">
          
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-brand-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
          
          {/* Image Section */}
          <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
            {business.images[0] && (
              <Image
                src={business.images[0]}
                alt={business.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Top badges row */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
              {/* Category badge */}
              <div className="px-3 py-1 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-black/50 border border-white/40 dark:border-white/20 shadow-lg">
                <span className="text-xs font-semibold ">
                  {business.category}
                </span>
              </div>
              
              {/* Rating badge */}
              <div className="px-3 py-1.5 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-black/50 border border-white/40 dark:border-white/20 shadow-lg flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                <span className="text-xs font-bold text-gray-900 dark:text-white">
                  {business.rating}
                </span>
              </div>
            </div>

            {/* View button overlay - appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-6 py-3 rounded-full backdrop-blur-xl bg-white/60 dark:bg-black/50 border border-white/60 dark:border-white/30 shadow-2xl flex items-center gap-2">
                <Eye className="w-4 h-4 text-brand-600 dark:text-brand-400" />

              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative p-5">
            {/* Business Name */}
            <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
              {business.name}
            </h3>

            {/* Description */}
{/*             <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-2 leading-relaxed">
              {business.description}
            </p> */}

            {/* Info Grid - Compact 2-column layout */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Location Card */}
              <div className="col-span-2 flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-white/5 dark:to-white/10 border border-gray-200/50 dark:border-white/10">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-600 dark:text-brand-400" />
                <span className="text-xs text-muted-foreground line-clamp-1 leading-relaxed">
                  {business.address}
                </span>
              </div>

              {/* Schedule Card */}
              {business.schedules[0] && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-500/10 dark:to-blue-600/10 border border-blue-200/50 dark:border-blue-500/20">
                  <Clock className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-blue-900 dark:text-blue-300 truncate">
                      {business.schedules[0].open}
                    </span>
                    <span className="text-xs text-blue-600/70 dark:text-blue-400/70">
                      - {business.schedules[0].close}
                    </span>
                  </div>
                </div>
              )}

              {/* Price Card */}
              {priceDisplay && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-500/10 dark:to-green-600/10 border border-green-200/50 dark:border-green-500/20">
                  <TrendingUp className="w-4 h-4 shrink-0 text-green-600 dark:text-green-400" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-green-900 dark:text-green-300">
                      Rp {priceDisplay}
                    </span>
                    <span className="text-[10px] text-green-600/70 dark:text-green-400/70">
                      Starting price
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Animated border on hover */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-500/40 dark:group-hover:border-brand-400/40 transition-all duration-500 pointer-events-none" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}