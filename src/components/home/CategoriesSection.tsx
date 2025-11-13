"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Store, 
  ShoppingBag, 
  Utensils, 
  Pill,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

const categories = [
  {
    icon: ShoppingBag,
    title: 'Laundry',
    description: 'Clean clothes, fresh start',
    gradient: 'from-blue-500 to-cyan-500',
    accentColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    categorySlug: 'Laundry'
  },
  {
    icon: Store,
    title: 'Stores',
    description: 'Everything you need, nearby',
    gradient: 'from-purple-500 to-pink-500',
    accentColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    categorySlug: 'Store'
  },
  {
    icon: Utensils,
    title: 'Foods',
    description: 'Delicious meals for students',
    gradient: 'from-orange-500 to-red-500',
    accentColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/30',
    categorySlug: 'Food'
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Health essentials 24/7',
    gradient: 'from-green-500 to-emerald-500',
    accentColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    categorySlug: 'Pharmacy'
  },
];

export function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
      
      {/* Floating gradient orbs for depth */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with subtle animation */}
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/40 dark:bg-white/10 border border-white/60 dark:border-white/20 mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-foreground">What are you looking for?</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Explore{' '}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 via-purple-600 to-pink-600 dark:from-brand-400 dark:via-purple-400 dark:to-pink-400">
              Categories
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need is just a click away. Discover local businesses that cater to your student life.
          </motion.p>
        </motion.div>

        {/* Dynamic staggered grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] // Custom easing for smooth feel
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glass card with enhanced depth */}
                <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-white/60 dark:bg-white/5 border border-white/80 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${category.gradient}`} />
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 ${category.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />
                  
                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Icon with glass background */}
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Title with count */}
                    <div className="mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-baseline gap-2">
                        {category.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* CTA with arrow */}
                    <Link href={`/umkm?category=${category.categorySlug}`}>
                      <motion.div 
                        className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm group/link cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Explore now</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Subtle border animation on hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Floating shadow for depth */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-black/5 dark:bg-black/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-lg">
            <span className="text-sm text-muted-foreground">
              More categories coming soon ✨
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
