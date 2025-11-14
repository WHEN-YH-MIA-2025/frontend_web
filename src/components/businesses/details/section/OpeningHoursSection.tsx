"use client";

import { motion } from "framer-motion";
import { UMKMData } from "@/data/UMKM.type";
import { Clock } from "lucide-react";

interface OpeningHoursSectionProps {
  business: UMKMData;
}

export function OpeningHoursSection({ business }: OpeningHoursSectionProps) {
  if (!business.schedules || business.schedules.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-brand-500/5 dark:from-cyan-400/10 dark:to-brand-400/10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/20">
            <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Opening Hours</h2>
        </div>

        {/* Schedule items */}
        <div className="space-y-3">
          {business.schedules.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10"
            >
              <span className="font-medium text-foreground/80 dark:text-foreground/70">
                {schedule.day}
              </span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                {schedule.open} - {schedule.close}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
