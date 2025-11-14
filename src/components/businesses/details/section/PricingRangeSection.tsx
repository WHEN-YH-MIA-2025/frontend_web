"use client";

import { motion } from "framer-motion";
import { UMKMData } from "@/data/UMKM.type";
import { DollarSign, TrendingUp } from "lucide-react";

interface PricingRangeSectionProps {
  business: UMKMData;
}

export function PricingRangeSection({ business }: PricingRangeSectionProps) {
  if (!business.pricing || business.pricing.length === 0) {
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const minPrice = business.pricing[0];
  const maxPrice = business.pricing.length > 1 ? business.pricing[1] : minPrice;
  const avgPrice = (minPrice + maxPrice) / 2;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-green-500/5 via-transparent to-emerald-500/5 dark:from-green-400/10 dark:to-emerald-400/10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-green-500/10 dark:bg-green-400/20">
            <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Pricing Range</h2>
        </div>

        {/* Pricing content */}
        <div className="space-y-4">
          {/* Price range display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Price Range</p>
              <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                {formatPrice(minPrice)}
                {minPrice !== maxPrice && ` - ${formatPrice(maxPrice)}`}
              </p>
            </div>
          </motion.div>

          {/* Additional pricing info */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10"
            >
              <p className="text-sm text-muted-foreground mb-1">Starting From</p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                {formatPrice(minPrice)}
              </p>
            </motion.div>

            {minPrice !== maxPrice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10"
              >
                <p className="text-sm text-muted-foreground mb-1">Up To</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {formatPrice(maxPrice)}
                </p>
              </motion.div>
            )}

            {minPrice === maxPrice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <p className="text-sm text-muted-foreground">Fixed Price</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
