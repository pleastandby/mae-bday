import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import { siteContent } from '../data/content';
import Lightbox from './Lightbox';
import { sound } from '../utils/audio';

export default function Scene04Gallery() {
  const { gallery } = siteContent;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // If there are no photos, gallery stays clean/optional
  if (!gallery.photos || gallery.photos.length === 0) return null;

  const handleOpenPhoto = (index) => {
    sound.playChime(700, 0.6, 0.05);
    setSelectedPhotoIndex(index);
  };

  const handleClose = () => setSelectedPhotoIndex(null);

  const handlePrev = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedPhotoIndex < gallery.photos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  return (
    <section id="gallery-section" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200/50 text-charcoal-700 text-xs tracking-widest uppercase font-mono mb-3">
          <Camera className="w-3.5 h-3.5 text-charcoal-700" />
          <span>Moments & Memories</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          {gallery.sectionTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-charcoal-700/80 font-light leading-relaxed">
          {gallery.sectionSubtitle}
        </p>
      </div>

      {/* Polaroid Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center justify-center">
        {gallery.photos.map((photo, index) => {
          // Placement of washi tape
          const tapeAlign =
            photo.tapePosition === 'left'
              ? 'left-8 -top-3 -rotate-6'
              : photo.tapePosition === 'right'
              ? 'right-8 -top-3 rotate-6'
              : 'left-1/2 -translate-x-1/2 -top-3 rotate-1';

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex justify-center"
            >
              <div
                onClick={() => handleOpenPhoto(index)}
                className={`relative group cursor-pointer bg-white p-3.5 sm:p-4 pb-6 rounded-md shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 transform ${photo.rotation} hover:rotate-0 hover:scale-105 max-w-[280px] w-full`}
              >
                {/* Washi Tape styling */}
                <div className={`washi-tape ${tapeAlign}`} />

                {/* Photo Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-sand-100 rounded-xs">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle expand icon overlay */}
                  <div className="absolute inset-0 bg-charcoal-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-white/80 text-charcoal-800 shadow-sm backdrop-blur-xs">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Polaroid Bottom Margin Note */}
                <div className="pt-3.5 px-1 text-center">
                  <p className="font-handwriting text-xl sm:text-2xl text-charcoal-800 leading-tight">
                    {photo.caption}
                  </p>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-charcoal-700/50 mt-1 block">
                    {photo.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          photo={gallery.photos[selectedPhotoIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedPhotoIndex > 0}
          hasNext={selectedPhotoIndex < gallery.photos.length - 1}
        />
      )}
    </section>
  );
}
