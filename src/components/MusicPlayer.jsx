import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    sound.toggleAmbientMusic((state) => {
      setIsPlaying(state);
    });
  };

  return (
    <div className="fixed top-5 right-5 z-40">
      <button
        onClick={toggleMusic}
        type="button"
        title={isPlaying ? "Mute music" : "Play ambient music"}
        aria-label={isPlaying ? "Mute music" : "Play ambient music"}
        className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 backdrop-blur-md shadow-sm ${
          isPlaying
            ? 'bg-softgold-100/90 border-softgold-300 text-charcoal-900 shadow-softgold-200/50'
            : 'bg-white/70 border-sand-200/80 text-charcoal-700 hover:bg-white hover:border-sand-300'
        }`}
      >
        {isPlaying ? (
          <>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-softgold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-softgold-500"></span>
            </span>
            <Volume2 className="w-4 h-4 text-softgold-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide">Melody on</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-charcoal-700 opacity-60" />
            <span className="text-xs font-medium tracking-wide opacity-80">Ambient sound</span>
          </>
        )}
      </button>
    </div>
  );
}
