import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene01Invitation from './components/Scene01Invitation';
import Scene02Greeting from './components/Scene02Greeting';
import Scene03Cards from './components/Scene03Cards';
import Scene04Gallery from './components/Scene04Gallery';
import Scene05Letter from './components/Scene05Letter';
import Scene06GiftBox from './components/Scene06GiftBox';
import Scene07Final from './components/Scene07Final';
import MusicPlayer from './components/MusicPlayer';
import FloatingStars from './components/FloatingStars';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const mainContentRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsUnlocked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCards = () => {
    const cardsEl = document.getElementById('cards-section');
    if (cardsEl) {
      cardsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsUnlocked(false);
    }, 400);
  };

  return (
    <div className="relative min-h-screen bg-ivory-100 text-charcoal-800 paper-texture overflow-x-hidden">
      {/* Delicate floating stars & sparkles */}
      <FloatingStars />

      {/* Persistent floating music toggle */}
      <MusicPlayer />

      {/* Main Experience Flow */}
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Scene01Invitation onOpen={handleOpenInvitation} />
          </motion.div>
        ) : (
          <motion.div
            key="main-experience"
            ref={mainContentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Scene 02: Birthday Greeting Hero */}
            <Scene02Greeting onScrollDown={handleScrollToCards} />

            {/* Scene 03: Little Things Worth Celebrating Cards */}
            <Scene03Cards />

            {/* Scene 04: A Little Gallery with Polaroid Frames */}
            <Scene04Gallery />

            {/* Scene 05: A Birthday Note Letter */}
            <Scene05Letter />

            {/* Scene 06: One Last Little Surprise Gift Box */}
            <Scene06GiftBox />

            {/* Scene 07: The Final Screen */}
            <Scene07Final onReplay={handleReplay} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
