"use client";

import { motion } from "framer-motion";
import { UMKMData } from "@/data/UMKM.type";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

interface ContactInfoSectionProps {
  business: UMKMData;
}

export function ContactInfoSection({ business }: ContactInfoSectionProps) {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: business.phone,
      href: business.phone ? `tel:${business.phone}` : undefined,
    },
    {
      icon: Mail,
      label: "Email",
      value: business.email,
      href: business.email ? `mailto:${business.email}` : undefined,
    },
    {
      icon: Globe,
      label: "Website",
      value: business.website,
      href: business.website,
    },
  ].filter((item) => item.value);

  if (contactItems.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/10 shadow-xl p-6 sm:p-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-cyan-500/5 dark:from-purple-400/10 dark:to-cyan-400/10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-400/20">
            <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Contact Info</h2>
        </div>

        {/* Contact items */}
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "Website" ? "_blank" : undefined}
                  rel={item.label === "Website" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-400/20 group-hover:bg-purple-500/20 dark:group-hover:bg-purple-400/30 transition-colors">
                    <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium text-purple-600 dark:text-purple-400 group-hover:underline break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-linear-to-br from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 border border-white/60 dark:border-white/10">
                  <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-400/20">
                    <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium break-all">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
