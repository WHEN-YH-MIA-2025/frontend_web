"use client";

import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Location-Based',
    description: 'Find businesses near your campus instantly',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'bg-blue-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Student Reviews',
    description: 'Real feedback from your peers',
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'bg-purple-500/20'
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All businesses are verified and trusted',
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'bg-green-500/20'
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle background with gradient */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/10 to-transparent" />
      
      {/* Floating accent orb */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/40 dark:bg-white/10 border border-white/60 dark:border-white/20 mb-6 shadow-lg"
          >
            <Zap className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-foreground">Why choose us</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">SpillDong?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're built specifically for students, with features that matter to you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glass card */}
                <div className="relative h-full p-8 md:p-10 rounded-3xl backdrop-blur-2xl bg-white/60 dark:bg-white/5 border border-white/80 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Hover glow */}
                  <div className={`absolute inset-0 ${feature.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative text-center">
                    {/* Icon with gradient background */}
                    <motion.div 
                      className="relative inline-flex mb-6"
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
                </div>

                {/* Floating shadow */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-black/5 dark:bg-black/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
