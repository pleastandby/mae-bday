/**
 * Centralized Editable Content for Mae's Birthday Website
 * Easily update text, images, and card messages here.
 */

import photo1 from '../assets/photos/mae-1.png';
import photo2 from '../assets/photos/mae-2.png';
import photo3 from '../assets/photos/mae-3.png';

export const siteContent = {
  // Global & Meta
  recipientName: "Mae",
  metaTitle: "A Little Birthday Corner for Mae",
  tagline: "A Little Corner of the Internet, Just to Celebrate You.",

  // Scene 01: A Little Invitation
  invitation: {
    greeting: "Hey, Mae.",
    subtext: "There's a little something waiting for you.",
    buttonText: "Open your surprise",
    hint: "Click to unseal",
  },

  // Scene 02: Birthday Greeting Hero
  hero: {
    preheading: "Today is a good day to celebrate someone wonderful.",
    heading: "HAPPY BIRTHDAY, MAE!",
    subheading:
      "Another year, another collection of memories, discoveries, unexpected adventures, and little reasons to smile.",
    badge: "Special Edition • Today's Celebration",
  },

  // Scene 03: Little Things Worth Celebrating
  celebrationCards: {
    sectionTitle: "Little Things Worth Celebrating",
    sectionSubtitle: "Click each card to discover a quiet little reminder of why you're appreciated.",
    cards: [
      {
        id: "universe",
        tag: "01 / Perspective",
        title: "Your curious little universe",
        icon: "Compass",
        preview: "A rare kind of genuine curiosity...",
        message:
          "The way you look at things with genuine curiosity and a lighthearted perspective is something truly special. Never lose that spark of wonder.",
        color: "bg-lavender-100/70 border-lavender-200 text-charcoal-800",
        accent: "#9D84B7",
      },
      {
        id: "unique",
        tag: "02 / Personality",
        title: "The things that make you unique",
        icon: "Sparkles",
        preview: "Effortlessly authentic, always grounded...",
        message:
          "You bring a quiet, authentic charm wherever you go. You're simply yourself without pretense, and that makes being around you so easy and pleasant.",
        color: "bg-dustypink-100/70 border-dustypink-200 text-charcoal-800",
        accent: "#C98A8E",
      },
      {
        id: "appreciation",
        tag: "03 / Gratitude",
        title: "A little appreciation",
        icon: "HeartHandshake",
        preview: "For the warmth and quiet kindness...",
        message:
          "Thank you for the good energy, the smiles, and the comfortable conversations. Having you as a friend is something to be genuinely grateful for.",
        color: "bg-softgold-100/70 border-softgold-200 text-charcoal-800",
        accent: "#C89B3C",
      },
      {
        id: "adventures",
        tag: "04 / The Journey",
        title: "Here's to new adventures",
        icon: "MapPin",
        preview: "Uncharted days and bright horizons...",
        message:
          "May this upcoming year be packed with exciting travels, newfound passions, tasty food, spontaneous belly laughs, and open skies.",
        color: "bg-ivory-200/80 border-sand-200 text-charcoal-800",
        accent: "#7A7265",
      },
    ],
  },

  // Scene 04: A Little Gallery
  gallery: {
    sectionTitle: "A Little Gallery",
    sectionSubtitle: "A few snapshots of pure joy, quiet confidence, and sunny adventures.",
    photos: [
      {
        id: 1,
        url: photo1,
        caption: "Playful frames & quiet charm",
        date: "Memory • 01",
        rotation: "-rotate-2",
        tapePosition: "center",
      },
      {
        id: 2,
        url: photo2,
        caption: "That genuine, radiant laugh",
        date: "Memory • 02",
        rotation: "rotate-2",
        tapePosition: "left",
      },
      {
        id: 3,
        url: photo3,
        caption: "Sunny skies & ocean breeze",
        date: "Memory • 03",
        rotation: "-rotate-1",
        tapePosition: "right",
      },
    ],
  },

  // Scene 05: A Birthday Note
  letter: {
    stamp: "FIRST CLASS • AIR MAIL",
    heading: "A little note for you.",
    salutation: "Hey Mae,",
    paragraphs: [
      "Happy birthday!",
      "I hope this new chapter brings you beautiful experiences, exciting discoveries, unexpected opportunities, and plenty of reasons to smile.",
      "Keep exploring the things that interest you, keep being curious, and never stop working towards the things that matter to you.",
      "I'm genuinely glad our paths crossed, and I hope life continues to surprise you in wonderful ways.",
      "Wishing you happiness, good health, meaningful experiences, and a year worth remembering.",
    ],
    closing: "Have a wonderful birthday, Mae!",
    signOff: "With warm appreciation,",
    author: "Your Friend",
  },

  // Scene 06: One Last Little Surprise
  giftBox: {
    title: "One Last Little Surprise",
    subtitle: "Because no birthday is complete without unwrapping at least one small box.",
    tapPrompt: "Tap the box to open your birthday surprise",
    openedMessage: "Here's to another year of being wonderfully you.",
    achievement: "Achievement unlocked: Another trip around the sun! 🌟",
    buttonReset: "Wrap it back up",
  },

  // Scene 07: The Final Screen
  closing: {
    celebrationText: "HAPPY BIRTHDAY, MAE!",
    wish: "May this year be kind to you, full of discoveries, and filled with moments worth remembering.",
    footnote: "Made with care, just for your birthday.",
    replayButton: "Start from the beginning",
  },
};
