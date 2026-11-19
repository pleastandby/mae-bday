import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Award, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';
import { sound } from '../utils/audio';

export default function Scene06GiftBox() {
  const { giftBox } = siteContent;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);
    sound.playSparkle();

    // Multicolored celebration burst
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4B34C', '#E2D8EE', '#EBD4D5', '#FAF5DF'],
      disableForReducedMotion: true,
    });
  };

  const handleRewrap = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section id="gift-section" className="py-24 px-4 sm:px-6 max-w-3xl mx-auto relative z-10 text-center">
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-charcoal-700 font-mono block mb-2">
          FINAL SURPRISE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          {giftBox.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-charcoal-700/80 font-light">
          {giftBox.subtitle}
        </p>
      </div>

      {/* Interactive Gift Area */}
      <div className="flex flex-col items-center justify-center min-h-[340px]">
        {!isOpen ? (
          /* Wrapped Gift Box */
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenGift}
            className="cursor-pointer group flex flex-col items-center"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenGift()}
            aria-label="Open gift box"
          >
            {/* Soft glow */}
            <div className="relative">
              <div className="absolute -inset-3 bg-softgold-200/50 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-300" />

              {/* Physical Gift Box Visual */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-lavender-100 via-white to-dustypink-100 border border-sand-200 shadow-xl flex items-center justify-center overflow-hidden">
                {/* Ribbon Vertical */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-softgold-300/80 border-x border-softgold-400/50" />
                {/* Ribbon Horizontal */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-softgold-300/80 border-y border-softgold-400/50" />

                {/* Ribbon Bow / Icon */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-softgold-100 border-2 border-softgold-400/80 flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-softgold-500" />
                </div>
              </div>
            </div>

            <motion.p
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 text-sm font-sans font-medium text-charcoal-700/80 group-hover:text-charcoal-900 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-softgold-500" />
              <span>{giftBox.tapPrompt}</span>
            </motion.p>
          </motion.div>
        ) : (
          /* Opened Gift Box & Message Reveal */
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="w-full max-w-lg bg-white p-7 sm:p-9 rounded-2xl border border-softgold-200/90 shadow-2xl relative"
          >
            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softgold-100/80 border border-softgold-300 text-charcoal-800 text-xs font-mono font-medium mb-5">
              <Award className="w-4 h-4 text-softgold-500" />
              <span>{giftBox.achievement}</span>
            </div>

            {/* Revealed Message */}
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal leading-snug">
              &ldquo;{giftBox.openedMessage}&rdquo;
            </h3>

            {/* Little celebratory illustration/stars */}
            <div className="flex items-center justify-center gap-3 my-5 text-softgold-400">
              <span className="h-[1px] w-8 bg-sand-200"></span>
              <Sparkles className="w-5 h-5 text-softgold-500 animate-spin-slow" />
              <span className="h-[1px] w-8 bg-sand-200"></span>
            </div>

            <p className="text-xs text-charcoal-700/60 font-sans">
              Keep shining, keep being yourself, and make the most of this year!
            </p>

            {/* Rewrap button */}
            <button
              onClick={handleRewrap}
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-charcoal-700/60 hover:text-charcoal-900 font-mono uppercase tracking-wider transition-colors pt-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{giftBox.buttonReset}</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
