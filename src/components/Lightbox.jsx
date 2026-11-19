import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-900/75 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors z-20"
          aria-label="Close photo view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev Button */}
        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm transition-colors z-20 hidden sm:flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm transition-colors z-20 hidden sm:flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Polaroid Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white p-4 sm:p-5 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col items-center overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full overflow-hidden rounded-lg bg-sand-100 flex items-center justify-center">
            <img
              src={photo.url}
              alt={photo.caption}
              className="max-h-[65vh] w-auto object-contain rounded-md"
            />
          </div>

          <div className="w-full pt-4 pb-2 text-center flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-charcoal-700 font-sans font-medium">
              {photo.date}
            </span>
            <p className="font-handwriting text-2xl text-charcoal-800 mt-1">
              {photo.caption}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
