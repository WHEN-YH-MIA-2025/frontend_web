"use client";

import { motion } from "framer-motion";
import { Search, X, Sparkles } from "lucide-react";

interface SearchBarProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search businesses...",
}: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full group"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Enhanced glassmorphic input */}
        <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/90 dark:border-white/20 shadow-2xl group-hover:shadow-brand-500/20 dark:group-hover:shadow-brand-400/20 transition-all duration-300">
          {/* Animated gradient border on focus */}
          <div className="absolute inset-0 bg-linear-to-r from-brand-500 via-purple-500 to-cyan-500 opacity-0 group-focus-within:opacity-20 blur-sm transition-opacity duration-300" />
          
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-brand-600 dark:text-brand-400 pointer-events-none z-10" />
            <Sparkles className="absolute left-11 w-3 h-3 text-purple-500 dark:text-purple-400 opacity-50 pointer-events-none animate-pulse" />
            
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full pl-16 pr-12 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none z-10 relative font-medium"
            />
            
            {value && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => onChange("")}
                className="absolute right-4 w-7 h-7 rounded-lg flex items-center justify-center bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all z-10"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
