import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';
import { sound } from '../utils/audio';

export default function Scene01Invitation({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const { invitation } = siteContent;

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    sound.playPop();

    // Soft celebration confetti with warm golden & pastel colors
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E6CF82', '#CFBFDF', '#DCB5B7', '#F4E8B8'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      onOpen();
    }, 650);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center flex flex-col items-center"
      >
        {/* Subtle decorative badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-softgold-100/80 border border-softgold-200/90 text-charcoal-700 text-xs tracking-wider uppercase font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-softgold-500" />
          <span>A Quiet Celebration</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 tracking-tight font-normal"
        >
          {invitation.greeting}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-3.5 text-base sm:text-lg text-charcoal-700/85 font-sans font-light tracking-wide max-w-sm"
        >
          {invitation.subtext}
        </motion.p>

        {/* Illustrated Envelope / Letter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          whileHover={{ y: -4, scale: 1.02 }}
          onClick={handleOpen}
          className="mt-10 mb-8 cursor-pointer group relative"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpen()}
          aria-label={invitation.buttonText}
        >
          {/* Subtle glow background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-softgold-200/40 via-lavender-200/40 to-dustypink-200/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

          {/* Envelope Body */}
          <div className="relative w-64 sm:w-72 h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border border-[#EBE3D5] shadow-envelope flex flex-col justify-between p-5 overflow-hidden transition-shadow group-hover:shadow-xl">
            {/* Stamp decoration */}
            <div className="flex justify-between items-start">
              <div className="text-left">
                <span className="text-[10px] tracking-widest uppercase font-mono text-charcoal-700/60 block">
                  SPECIAL DELIVERY
                </span>
                <span className="font-handwriting text-xl text-charcoal-800">
                  For Mae ✨
                </span>
              </div>
              <div className="w-10 h-12 border border-dashed border-softgold-400/70 bg-softgold-50/80 rounded flex items-center justify-center shadow-xs">
                <span className="text-sm">🌸</span>
              </div>
            </div>

            {/* Center seal */}
            <div className="flex flex-col items-center justify-center my-auto">
              <motion.div
                animate={isOpening ? { scale: [1, 1.25, 0], opacity: [1, 1, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full bg-softgold-300/80 border-2 border-softgold-400/90 shadow-md flex items-center justify-center text-charcoal-800 group-hover:scale-105 transition-transform"
              >
                <Sparkles className="w-5 h-5 text-softgold-500" />
              </motion.div>
              <span className="text-[11px] font-sans text-charcoal-700/70 mt-2 tracking-wider uppercase font-medium">
                {invitation.hint}
              </span>
            </div>

            {/* Bottom bar */}
            <div className="w-full flex justify-between items-center text-[10px] text-charcoal-700/50 font-mono tracking-widest uppercase border-t border-sand-200/60 pt-2">
              <span>EST. TODAY</span>
              <span>NO. 01 OF 01</span>
            </div>
          </div>
        </motion.div>

        {/* Primary Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpen}
          type="button"
          disabled={isOpening}
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-charcoal-800 text-ivory-50 text-sm font-medium tracking-wide shadow-md hover:bg-charcoal-900 transition-all hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-softgold-400"
        >
          <span>{isOpening ? "Opening..." : invitation.buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
}
