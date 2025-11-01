"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/common/Card';
import { ComingSoonBadge } from '@/components/common/ComingSoonBadge';
import { Button } from '@/components/common/Button';
import { 
  MapPin, 
  Navigation, 
  Layers, 
  Filter,
  Search,
  Compass,
  Route
} from 'lucide-react';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

const features = [
  {
    icon: MapPin,
    title: 'Interactive Map',
    description: 'Visual representation of all businesses around your campus'
  },
  {
    icon: Navigation,
    title: 'Live Directions',
    description: 'Get turn-by-turn directions to any business'
  },
  {
    icon: Filter,
    title: 'Smart Filters',
    description: 'Filter by category, distance, and ratings'
  },
  {
    icon: Layers,
    title: 'Layer View',
    description: 'Toggle between different business categories'
  },
];

export default function MapsPage() {
  
  const router = useRouter();

  useEffect(() => {
    router.replace("/coming-soon");
  }, [router]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div role="status" className="flex flex-col items-center gap-3">
        <svg
          className="w-12 h-12 text-emerald-600 animate-spin"
          viewBox="0 0 50 50"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            strokeOpacity="0.2"
          />
          <path
            d="M45 25a20 20 0 00-20-20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-sm text-muted-foreground" aria-live="polite">
          Loading…
        </span>
      </div>
    </motion.main>
    // <main className="min-h-screen bg-background">
    //   {/* Hero Section */}
    //   <section className="pt-32 pb-20 bg-linear-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-900 text-white relative overflow-hidden">
    //     <div className="absolute inset-0 opacity-10">
    //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
    //     </div>
        
    //     <div className="container mx-auto px-6 relative z-10">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6 }}
    //         className="max-w-3xl mx-auto text-center"
    //       >
    //         <div className="inline-flex mb-6">
    //           <ComingSoonBadge size="lg" className="bg-white/20 border-white/30 text-white" />
    //         </div>
            
    //         <h1 className="text-5xl md:text-6xl font-bold mb-6">
    //           Interactive Campus Map
    //         </h1>
    //         <p className="text-xl text-white/90 leading-relaxed mb-8">
    //           Find and navigate to local businesses with our upcoming interactive map feature. 
    //           Never get lost looking for that perfect lunch spot again!
    //         </p>

    //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //           <Button size="lg" variant="glass" className="bg-white text-emerald-600 hover:bg-white/90 border-0">
    //             <Search className="w-5 h-5 mr-2" />
    //             Explore Businesses
    //           </Button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </section>

    //   {/* Preview Section */}
    //   <section className="py-20">
    //     <div className="container mx-auto px-6">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-16"
    //       >
    //         <h2 className="text-4xl font-bold mb-4">What's Coming</h2>
    //         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
    //           Our interactive map will revolutionize how you discover local businesses
    //         </p>
    //       </motion.div>

    //       {/* Map Preview Placeholder */}
    //       <motion.div
    //         initial={{ opacity: 0, scale: 0.95 }}
    //         whileInView={{ opacity: 1, scale: 1 }}
    //         viewport={{ once: true }}
    //         className="max-w-5xl mx-auto mb-20"
    //       >
    //         <Card variant="glass" className="aspect-video overflow-hidden relative group">
    //           <div className="absolute inset-0 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 flex items-center justify-center">
    //             <div className="text-center">
    //               <motion.div
    //                 animate={{ 
    //                   scale: [1, 1.1, 1],
    //                   rotate: [0, 5, -5, 0]
    //                 }}
    //                 transition={{ 
    //                   duration: 3,
    //                   repeat: Infinity,
    //                   ease: "easeInOut"
    //                 }}
    //                 className="text-8xl mb-4"
    //               >
    //                 🗺️
    //               </motion.div>
    //               <p className="text-2xl font-bold text-muted-foreground">
    //                 Interactive Map Preview
    //               </p>
    //               <p className="text-muted-foreground mt-2">
    //                 Coming Soon
    //               </p>
    //             </div>
    //           </div>
              
    //           {/* Decorative elements */}
    //           <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg backdrop-blur-sm">
    //             <Search className="w-6 h-6 text-emerald-600" />
    //           </div>
    //           <div className="absolute bottom-4 right-4 p-3 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg backdrop-blur-sm">
    //             <Navigation className="w-6 h-6 text-emerald-600" />
    //           </div>
    //         </Card>
    //       </motion.div>

    //       {/* Features Grid */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    //         {features.map((feature, index) => {
    //           const Icon = feature.icon;
    //           return (
    //             <Card
    //               key={feature.title}
    //               animated
    //               hover="lift"
    //               className="text-center"
    //             >
    //               <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
    //                 <Icon className="w-7 h-7" />
    //               </div>
    //               <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
    //               <p className="text-sm text-muted-foreground">{feature.description}</p>
    //             </Card>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </section>

    //   {/* How It Works */}
    //   <section className="py-20 bg-muted/30">
    //     <div className="container mx-auto px-6">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-16"
    //       >
    //         <h2 className="text-4xl font-bold mb-4">How It Will Work</h2>
    //         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
    //           Simple, intuitive, and powerful
    //         </p>
    //       </motion.div>

    //       <div className="max-w-4xl mx-auto space-y-8">
    //         {[
    //           {
    //             step: '1',
    //             icon: Search,
    //             title: 'Search or Browse',
    //             description: 'Find businesses by name, category, or simply browse the map'
    //           },
    //           {
    //             step: '2',
    //             icon: Compass,
    //             title: 'Discover Details',
    //             description: 'View business information, hours, reviews, and photos'
    //           },
    //           {
    //             step: '3',
    //             icon: Route,
    //             title: 'Get Directions',
    //             description: 'Navigate to your destination with turn-by-turn directions'
    //           },
    //         ].map((step, index) => {
    //           const Icon = step.icon;
    //           return (
    //             <motion.div
    //               key={step.step}
    //               initial={{ opacity: 0, x: -20 }}
    //               whileInView={{ opacity: 1, x: 0 }}
    //               viewport={{ once: true }}
    //               transition={{ delay: index * 0.1 }}
    //             >
    //               <Card hover="lift" className="flex items-start gap-6 p-6">
    //                 <div className="shrink-0">
    //                   <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
    //                     {step.step}
    //                   </div>
    //                 </div>
    //                 <div className="grow">
    //                   <div className="flex items-center gap-3 mb-2">
    //                     <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    //                     <h3 className="text-2xl font-bold">{step.title}</h3>
    //                   </div>
    //                   <p className="text-muted-foreground">{step.description}</p>
    //                 </div>
    //               </Card>
    //             </motion.div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA Section */}
    //   <section className="py-20">
    //     <div className="container mx-auto px-6">
    //       <Card
    //         variant="gradient"
    //         className="max-w-4xl mx-auto text-center overflow-hidden"
    //       >
    //         <div className="relative z-10 py-16 px-8">
    //           <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //           >
    //             <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
    //             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
    //               Want to be notified when the map launches? Join our waitlist!
    //             </p>
    //             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
    //               <input
    //                 type="email"
    //                 placeholder="Enter your email"
    //                 className="grow px-4 py-3 rounded-lg border border-border bg-background text-foreground"
    //               />
    //               <Button size="lg" variant="default">
    //                 Join Waitlist
    //               </Button>
    //             </div>
    //           </motion.div>
    //         </div>
    //       </Card>
    //     </div>
    //   </section>
    // </main>
  );
}
