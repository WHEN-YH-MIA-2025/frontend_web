"use client";

import { motion } from "framer-motion";
import { UMKMData } from "@/data/UMKM.type";
import { Info } from "lucide-react";

interface AboutSectionProps {
  business: UMKMData;
}

export function AboutSection({ business }: AboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 via-transparent to-purple-500/5 dark:from-brand-400/10 dark:to-purple-400/10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-brand-500/10 dark:bg-brand-400/20">
            <Info className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
            {business.description}
          </p>
          
          {/* Additional details */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Category</p>
                <p className="font-medium">{business.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Type</p>
                <p className="font-medium">{business.subcategory}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
