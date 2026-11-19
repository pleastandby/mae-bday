import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';
import { sound } from '../utils/audio';

export default function Scene07Final({ onReplay }) {
  const { closing } = siteContent;

  const handleCelebrateMore = () => {
    sound.playSparkle();
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#D4B34C', '#E2D8EE', '#DCB5B7', '#FAF5DF'],
      disableForReducedMotion: true,
    });
  };

  return (
    <footer className="py-28 px-4 sm:px-6 relative z-10 border-t border-sand-200/60 bg-gradient-to-b from-transparent to-ivory-200/40 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Celebration icon button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCelebrateMore}
          className="w-14 h-14 rounded-full bg-softgold-100 border border-softgold-300/80 shadow-md flex items-center justify-center text-softgold-500 mb-8 cursor-pointer group"
          title="Click for a sparkle!"
          aria-label="Click for a celebration sparkle"
        >
          <Sparkles className="w-6 h-6 group-hover:animate-spin" />
        </motion.button>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 tracking-tight font-normal leading-tight"
        >
          {closing.celebrationText}
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-base sm:text-lg text-charcoal-700/85 font-light leading-relaxed max-w-lg mx-auto"
        >
          {closing.wish}
        </motion.p>

        {/* Footnote */}
        <div className="mt-14 pt-8 border-t border-sand-200/60 w-full flex flex-col items-center gap-4">
          <p className="font-handwriting text-2xl text-charcoal-700">
            {closing.footnote}
          </p>

          {/* Replay button */}
          <button
            onClick={onReplay}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sand-300 bg-white/60 hover:bg-white text-xs font-mono uppercase tracking-wider text-charcoal-700 hover:text-charcoal-900 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{closing.replayButton}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
