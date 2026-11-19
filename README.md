# 🌸 A Little Birthday Corner for Mae

> **"A Little Corner of the Internet, Just to Celebrate You."**

A minimal, warm, and interactive birthday website created for Mae with React, Vite, Tailwind CSS, and Framer Motion.

---

## ✨ Features & Scenes

- **Scene 01 — A Little Invitation**: Minimal opening screen with an illustrated envelope, wax seal button, and smooth unsealing animation with celebration confetti.
- **Scene 02 — The Birthday Greeting**: Editorial hero section celebrating Mae with elegant typography, floating stars, and delicate pastel accents.
- **Scene 03 — Little Things Worth Celebrating**: Interactive cards exploring:
  - *Your curious little universe* (Perspective)
  - *The things that make you unique* (Personality)
  - *A little appreciation* (Gratitude)
  - *Here's to new adventures* (The Journey)
- **Scene 04 — A Little Gallery**: Polaroid-style photo frames featuring Mae's provided photos with washi tape accents, handwritten captions, and a full-screen Lightbox with zoom and keyboard navigation.
- **Scene 05 — A Birthday Note**: Warm stationery letter with a postage stamp, thoughtful friendship appreciation message, and handwritten sign-off.
- **Scene 06 — One Last Little Surprise**: Interactive gift box that unwraps with confetti and chime sounds, revealing a special achievement unlocked badge.
- **Scene 07 — The Final Screen**: Clean birthday wishes and a smooth replay button to relive the experience anytime.
- **Ambient Melody Player**: Floating audio toggle that plays a gentle pentatonic lullaby using Web Audio API (no external audio files required).

---

## 🚀 Getting Started

### 1. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Building for Production
Create an optimized production build:
```bash
npm run build
```
The compiled files will be in the `dist/` directory, ready to deploy to Netlify, Vercel, or GitHub Pages.

---

## 📝 Customizing Text & Photos

All content is centralized in **[`src/data/content.js`](./src/data/content.js)**:
- Edit letter text, greetings, and card messages in one single place.
- To change or add photos, update `src/assets/photos/` or edit the `gallery.photos` array in `content.js`.
