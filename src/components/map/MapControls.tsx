"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Navigation, 
  Filter,
  X,
  List,
  ShoppingBag,
  Utensils,
  Coffee,
  Sparkles,
  Layers
} from 'lucide-react';
import { useState } from 'react';

interface MapControlsProps {
  filteredCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRecenter: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  businessCount: number;
}

const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'food', label: 'Food', icon: Utensils },
  { id: 'cafe', label: 'Cafe', icon: Coffee },
  { id: 'laundry', label: 'Laundry', icon: Sparkles },
  { id: 'other', label: 'Other', icon: ShoppingBag },
];

export function MapControls({
  filteredCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onRecenter,
  onToggleSidebar,
  isSidebarOpen,
  businessCount,
}: MapControlsProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Top Control Bar */}
      <div className="absolute top-16 md:top-16 left-0 right-0 z-40 px-3 md:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}  
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 pointer-events-auto">
            {/* Search Bar with Glassmorphism */}
            <div className={`
              flex-initial
              w-full 
              max-w-[70%] 
              md:max-w-[60%]
              bg-white/70 
              dark:bg-gray-900/70 
              border 
              border-white/40 
              dark:border-white/10 
              rounded-xl md:rounded-2xl 
              shadow-xl
              transition-all
              duration-300
            `}>
              <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setIsSearchExpanded(true)}
                  onBlur={() => setIsSearchExpanded(false)}
                  className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Button - Glassmorphism */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`
                p-2.5 md:p-3
                shrink-0
                backdrop-blur-2xl 
                ${isFilterOpen 
                  ? 'bg-brand-500/90 text-white border-brand-400/50' 
                  : 'bg-white/70 dark:bg-gray-900/70 text-foreground border-white/40 dark:border-white/10'
                }
                border 
                rounded-xl md:rounded-2xl
                shadow-xl
                transition-all
                relative
              `}
            >
              <Filter className="w-4 h-4 md:w-5 md:h-5" />
              {filteredCategory !== 'all' && (
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white dark:border-gray-900" />
              )}
            </motion.button>

            {/* List Toggle Button - Glassmorphism */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleSidebar}
              className={`
                p-2.5 md:p-3
                shrink-0
                backdrop-blur-2xl 
                ${isSidebarOpen 
                  ? 'bg-brand-500/90 text-white border-brand-400/50' 
                  : 'bg-white/70 dark:bg-gray-900/70 text-foreground border-white/40 dark:border-white/10'
                }
                border 
                rounded-xl md:rounded-2xl
                shadow-xl
                transition-all
              `}
            >
              <List className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>

          {/* Results count - Glassmorphism */}
          {(searchQuery || filteredCategory !== 'all') && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 px-4"
            >
              <div className="px-3 py-1.5 backdrop-blur-2xl bg-white/60 dark:bg-gray-900/60 border border-white/40 dark:border-white/10 rounded-lg shadow-lg inline-block">
                <p className="text-xs font-medium text-muted-foreground">
                  {businessCount} {businessCount === 1 ? 'business' : 'businesses'} found
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="absolute inset-0 bg-black/20 z-40 md:hidden"
            />

            {/* Filter Content - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-36 md:top-32 left-3 right-3 md:left-auto md:right-6 z-50 pointer-events-auto"
            >
              <div className="backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl p-4 max-w-xs ml-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm text-foreground">Filter by Category</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = filteredCategory === category.id;

                    return (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          onCategoryChange(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`
                          w-full 
                          flex 
                          items-center 
                          gap-3 
                          px-4 
                          py-3 
                          rounded-xl 
                          transition-all
                          ${isActive
                            ? 'bg-brand-500 text-white shadow-lg'
                            : 'bg-gray-50 dark:bg-gray-800/50 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
                          }
                        `}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium text-sm">{category.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Right Controls - Glassmorphism */}
      <div className="absolute bottom-28 md:bottom-6 right-4 md:right-6 z-40 pointer-events-none">
        <div className="flex flex-col gap-2 pointer-events-auto">
          {/* Recenter Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRecenter}
            className="p-3 backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 border border-white/40 dark:border-white/10 rounded-2xl shadow-xl text-foreground hover:bg-brand-500/90 hover:text-white hover:border-brand-400/50 transition-all"
            title="Recenter map"
          >
            <Navigation className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </>
  );
}
