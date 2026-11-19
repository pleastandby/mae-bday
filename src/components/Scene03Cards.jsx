import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, HeartHandshake, MapPin, Eye, RotateCw } from 'lucide-react';
import { siteContent } from '../data/content';
import { sound } from '../utils/audio';

const iconMap = {
  Compass,
  Sparkles,
  HeartHandshake,
  MapPin,
};

export default function Scene03Cards() {
  const { celebrationCards } = siteContent;
  const [openedCardId, setOpenedCardId] = useState(null);

  const toggleCard = (cardId) => {
    sound.playChime(600, 0.8, 0.05);
    setOpenedCardId(prev => (prev === cardId ? null : cardId));
  };

  return (
    <section id="cards-section" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-charcoal-700 font-mono block mb-2">
          GENTLE REFLECTIONS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          {celebrationCards.sectionTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-charcoal-700/80 font-light leading-relaxed">
          {celebrationCards.sectionSubtitle}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {celebrationCards.cards.map((card, idx) => {
          const Icon = iconMap[card.icon] || Sparkles;
          const isOpen = openedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => toggleCard(card.id)}
              className="group cursor-pointer"
            >
              <div
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-400 bg-white shadow-card-soft hover:shadow-md ${
                  isOpen ? 'border-softgold-300 ring-1 ring-softgold-200' : 'border-sand-200/90'
                }`}
              >
                {/* Top header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-charcoal-700/60">
                    {card.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${card.accent}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: card.accent }} />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl text-charcoal-900 mb-2 font-normal group-hover:text-charcoal-950 transition-colors">
                  {card.title}
                </h3>

                {/* Content preview or revealed message */}
                <div className="mt-3 min-h-[75px] flex items-center">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="revealed"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="w-full bg-[#FAF7F2] p-4 rounded-xl border border-sand-200/70"
                      >
                        <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-light">
                          {card.message}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full"
                      >
                        <p className="text-sm text-charcoal-700/70 italic font-light">
                          &ldquo;{card.preview}&rdquo;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action footer */}
                <div className="mt-5 pt-3 border-t border-sand-100 flex items-center justify-between text-xs text-charcoal-700/70">
                  <span className="font-sans font-medium">
                    {isOpen ? "Click to collapse" : "Click to uncover"}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-charcoal-700/60 group-hover:text-charcoal-900">
                    <RotateCw className={`w-3 h-3 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    <span>{isOpen ? 'Close' : 'Read note'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
