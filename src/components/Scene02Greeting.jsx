import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ChevronDown } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Scene02Greeting({ onScrollDown }) {
  const { hero } = siteContent;

  return (
    <section className="min-h-screen flex flex-col justify-between items-center px-4 pt-20 pb-12 relative z-10 text-center">
      <div className="w-full max-w-3xl mx-auto my-auto flex flex-col items-center">
        {/* Subtle Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softgold-100/70 border border-softgold-200 text-charcoal-700 text-xs tracking-widest uppercase font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-softgold-500" />
          <span>{hero.badge}</span>
          <Sparkles className="w-3.5 h-3.5 text-softgold-500" />
        </motion.div>

        {/* Pre-heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-charcoal-700 font-normal max-w-xl mx-auto leading-relaxed"
        >
          &ldquo;{hero.preheading}&rdquo;
        </motion.p>

        {/* Main Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative my-6 sm:my-8"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-softgold-100/50 via-dustypink-100/40 to-lavender-100/50 blur-2xl -z-10 rounded-full" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-charcoal-900 leading-none">
            {hero.heading}
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-softgold-300"></span>
            <span className="font-handwriting text-2xl text-charcoal-700">for Mae</span>
            <span className="h-[1px] w-12 bg-softgold-300"></span>
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-charcoal-700 font-light max-w-xl mx-auto leading-relaxed px-4"
        >
          {hero.subheading}
        </motion.p>

        {/* Gentle Decorative stars row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-4 mt-8 text-softgold-400"
        >
          <Star className="w-4 h-4 fill-softgold-200" />
          <Star className="w-5 h-5 fill-softgold-300 text-softgold-500" />
          <Star className="w-4 h-4 fill-softgold-200" />
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={onScrollDown}
        className="group inline-flex flex-col items-center gap-1.5 text-xs text-charcoal-700 hover:text-charcoal-900 transition-colors cursor-pointer pt-6"
        aria-label="Scroll to next section"
      >
        <span className="tracking-widest uppercase text-[11px] font-medium">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-softgold-500" />
      </motion.button>
    </section>
  );
}
