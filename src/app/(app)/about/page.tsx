"use client";

import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Zap,
  MessageSquare,
  Mail,
  Users,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Student-First',
    description: 'Everything we build is designed with student needs in mind',
    color: 'from-brand-500 to-brand-600'
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Building connections between students and local businesses',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Fast & Easy',
    description: 'Quick access to the services you need, when you need them',
    color: 'from-cyan-500 to-cyan-600'
  },
];

const team = [
  {
    role: 'Developer',
    description: 'Passionate about connecting students with local businesses',
    emoji: '👨‍💻'
  },
  {
    role: 'Design Lead',
    description: 'Creating beautiful experiences for students',
    emoji: '🎨'
  },
  {
    role: 'Community Manager',
    description: 'Building relationships with local businesses',
    emoji: '🤝'
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
      
      {/* Multiple floating gradient orbs */}
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 -right-20 w-[450px] h-[450px] bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Students collaboration"
            fill
            className="object-cover opacity-20 dark:opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/60 dark:border-white/10 shadow-lg mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span className="text-sm font-medium">About Us</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              About{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 via-purple-600 to-cyan-600 dark:from-brand-400 dark:via-purple-400 dark:to-cyan-400 animate-gradient">
                SpillDong!
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/70 leading-relaxed">
              We're on a mission to make student life easier by connecting you with the best local businesses around your campus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-2xl p-8 sm:p-12 md:p-16"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 via-purple-500/5 to-cyan-500/5 dark:from-brand-400/10 dark:via-purple-400/10 dark:to-cyan-400/10" />
              
              <div className="relative space-y-6 text-lg leading-relaxed">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-brand-500/10 dark:bg-brand-400/20">
                    <Users className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
                </div>
                
                <p className="text-foreground/80 dark:text-foreground/70">
                  SpillDong! was born out of a simple frustration: finding reliable local businesses near campus was harder than it should be. As students ourselves, we knew there had to be a better way.
                </p>

                <p className="text-foreground/80 dark:text-foreground/70">
                  We created SpillDong! to be the go-to platform for students looking for laundry services, food delivery, convenience stores, and pharmacies. Our directory is built by students, for students, featuring only verified businesses that we trust.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 via-purple-600 to-cyan-600 dark:from-brand-400 dark:via-purple-400 dark:to-cyan-400">
                Values
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden p-8">
                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${value.color} bg-opacity-10 mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-foreground/70 dark:text-foreground/60 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meet the{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 via-purple-600 to-cyan-600 dark:from-brand-400 dark:via-purple-400 dark:to-cyan-400">
                Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Students building tools for students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden p-8">
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 via-purple-500/5 to-cyan-500/5 dark:from-brand-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-brand-500 via-purple-500 to-cyan-500 flex items-center justify-center text-5xl sm:text-6xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {member.emoji}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">{member.role}</h3>
                    <p className="text-foreground/70 dark:text-foreground/60 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-2xl"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-500/10 via-purple-500/10 to-cyan-500/10 dark:from-brand-400/20 dark:via-purple-400/20 dark:to-cyan-400/20" />
            
            <div className="relative py-16 px-8 sm:px-12 md:px-16 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-brand-500 to-purple-600 text-white mb-6 shadow-lg"
              >
                <Mail className="w-10 h-10" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Get in{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 via-purple-600 to-cyan-600 dark:from-brand-400 dark:via-purple-400 dark:to-cyan-400">
                  Touch
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground/70 mb-8 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/80 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/10 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  Give Feedback
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
