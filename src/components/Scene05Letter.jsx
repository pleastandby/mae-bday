import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Feather } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Scene05Letter() {
  const { letter } = siteContent;

  return (
    <section id="letter-section" className="py-24 px-4 sm:px-6 max-w-3xl mx-auto relative z-10">
      {/* Section Subtitle */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-charcoal-700 font-mono block mb-2">
          CORRESPONDENCE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          {letter.heading}
        </h2>
      </div>

      {/* Letter Parchment / Paper Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#FFFDF9] rounded-2xl p-7 sm:p-12 md:p-14 border border-[#ECE4D8] shadow-envelope"
      >
        {/* Subtle decorative stamp in the corner */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex flex-col items-center">
          <div className="w-14 h-16 border-2 border-dashed border-softgold-300/80 bg-softgold-50/70 rounded flex flex-col items-center justify-center p-1 text-center shadow-xs">
            <Feather className="w-4 h-4 text-softgold-500 mb-1" />
            <span className="text-[8px] font-mono tracking-widest text-charcoal-700 uppercase font-semibold">
              AIR MAIL
            </span>
          </div>
        </div>

        {/* Salutation */}
        <p className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal mb-6">
          {letter.salutation}
        </p>

        {/* Letter Paragraphs */}
        <div className="space-y-4 sm:space-y-5 text-charcoal-800/90 font-sans text-base sm:text-lg font-light leading-relaxed">
          {letter.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          <p className="font-serif italic text-lg sm:text-xl text-charcoal-900 font-medium pt-2">
            {letter.closing}
          </p>
        </div>

        {/* Sign-off */}
        <div className="mt-10 pt-6 border-t border-sand-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs text-charcoal-700/60 uppercase tracking-widest font-mono block">
              SENT WITH CARE
            </span>
            <span className="font-handwriting text-2xl sm:text-3xl text-charcoal-800">
              {letter.signOff}
            </span>
          </div>
          <div className="text-right">
            <span className="font-serif italic text-base text-charcoal-700">
              {letter.author}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
