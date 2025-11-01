"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/common/Card';
import { 
  Target, 
  Heart, 
  Zap,
  MessageSquare,
  Mail
} from 'lucide-react';
import { Button } from '@/components/common/Button';

const values = [
  {
    icon: Target,
    title: 'Student-First',
    description: 'Everything we build is designed with student needs in mind'
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Building connections between students and local businesses'
  },
  {
    icon: Zap,
    title: 'Fast & Easy',
    description: 'Quick access to the services you need, when you need them'
  },
];

const team = [
  {
    role: 'Founder & Developer',
    description: 'Passionate about connecting students with local businesses'
  },
  {
    role: 'Design Lead',
    description: 'Creating beautiful experiences for students'
  },
  {
    role: 'Community Manager',
    description: 'Building relationships with local businesses'
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-brand-600 to-brand-700 dark:from-brand-800 dark:to-brand-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About SpillDong
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We're on a mission to make student life easier by connecting you with the best local businesses around your campus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed"
            >
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              
              <p className="text-muted-foreground">
                SpillDong was born out of a simple frustration: finding reliable local businesses near campus was harder than it should be. As students ourselves, we knew there had to be a better way.
              </p>

              <p className="text-muted-foreground">
                We created SpillDong to be the go-to platform for students looking for laundry services, food delivery, convenience stores, and pharmacies. Our directory is built by students, for students, featuring only verified businesses that we trust.
              </p>

              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of students across multiple campuses, helping them discover and support local businesses while making their daily lives more convenient.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  animated
                  hover="lift"
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Students building tools for students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                <p className="text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '100+', label: 'Businesses Listed' },
              { value: '5K+', label: 'Students Helped' },
              { value: '15+', label: 'Campus Areas' },
              { value: '2K+', label: 'Daily Visits' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card
            variant="gradient"
            className="max-w-4xl mx-auto text-center overflow-hidden"
          >
            <div className="relative z-10 py-16 px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Have questions or feedback? We'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                  <Button size="lg" variant="outline">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Give Feedback
                  </Button>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
