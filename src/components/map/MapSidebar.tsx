"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { UMKMData } from '@/data/UMKMType';
import { X, Star, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

interface MapSidebarProps {
  isOpen: boolean;
  businesses: UMKMData[];
  onBusinessSelect: (business: UMKMData) => void;
  onClose: () => void;
}

export function MapSidebar({ isOpen, businesses, onBusinessSelect, onClose }: MapSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-80 md:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 mt-16 md:mt-0">
              <div>
                <h2 className="font-bold text-lg text-foreground">Businesses</h2>
                <p className="text-sm text-muted-foreground">
                  {businesses.length} {businesses.length === 1 ? 'location' : 'locations'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Business List */}
            <div className="flex-1 overflow-y-auto">
              {businesses.length === 0 ? (
                <div className="flex items-center justify-center h-full px-6 text-center">
                  <div>
                    <p className="text-muted-foreground mb-2">No businesses found</p>
                    <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {businesses.map((business, index) => (
                    <motion.button
                      key={business.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => onBusinessSelect(business)}
                      className="w-full text-left p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-brand-500/50 transition-all group"
                    >
                      <div className="flex gap-3">
                        {/* Image */}
                        {business.images[0] && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={business.images[0]}
                              alt={business.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              sizes="64px"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1 mb-1">
                            {business.name}
                          </h3>
                          
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300">
                                {business.rating.toFixed(1)}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {business.category}
                            </span>
                          </div>

                          <div className="flex items-start gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{business.address}</span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
