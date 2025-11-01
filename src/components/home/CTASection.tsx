"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { ComingSoonBadge } from '@/components/common/ComingSoonBadge';
import { Users } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-linear-to-br from-brand-600 to-brand-700 dark:from-brand-800 dark:to-brand-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <div className="inline-flex mb-6">
            <ComingSoonBadge size="lg" className="bg-white/20 border-white/30 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Own a Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join SpillDong and reach thousands of students in your area. 
            Get discovered by your next customers today!
          </p>
          <Button size="xl" variant="glass" className="bg-white text-brand-600 hover:bg-white/90 border-0">
            <Users className="w-5 h-5 mr-2" />
            Add Your Business
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
