/**
 * Web Audio API based ambient synthesizer and sound effects
 * Zero external audio file dependencies - runs smoothly and immediately anywhere.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.intervalId = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle chime chord (soft music box sound)
  playChime(noteFreq = 523.25, duration = 1.2, volume = 0.08) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback not permitted yet", e);
    }
  }

  // Celebration sparkle arpeggio
  playSparkle() {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 1.4, 0.07);
      }, idx * 110);
    });
  }

  // Soft envelope open / pop
  playPop() {
    this.playChime(440, 0.8, 0.06);
    setTimeout(() => this.playChime(554.37, 1.0, 0.06), 90);
  }

  // Toggle ambient background melody
  toggleAmbientMusic(onStateChange) {
    this.init();
    if (this.isPlayingMusic) {
      this.stopAmbientMusic();
      if (onStateChange) onStateChange(false);
    } else {
      this.startAmbientMusic();
      if (onStateChange) onStateChange(true);
    }
  }

  startAmbientMusic() {
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    // Peaceful pentatonic scale (C major pentatonic / A minor pentatonic: C, D, E, G, A)
    const melody = [
      523.25, 587.33, 659.25, 783.99, 880.00,
      659.25, 783.99, 523.25, 587.33, 659.25,
      783.99, 880.00, 1046.50, 880.00, 783.99
    ];

    let step = 0;
    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const freq = melody[step % melody.length];
      this.playChime(freq, 2.0, 0.04);
      step++;
    };

    playNext();
    this.intervalId = setInterval(playNext, 1200);
  }

  stopAmbientMusic() {
    this.isPlayingMusic = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

export const sound = new SoundController();
