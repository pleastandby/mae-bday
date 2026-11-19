/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F4ECE1',
          300: '#EDE0CF',
        },
        lavender: {
          50: '#F8F6FB',
          100: '#F0EBF6',
          200: '#E2D8EE',
          300: '#CFBFDF',
        },
        dustypink: {
          50: '#FAF6F6',
          100: '#F5EAEB',
          200: '#EBD4D5',
          300: '#DCB5B7',
          400: '#C99497',
        },
        softgold: {
          50: '#FDFCF5',
          100: '#FAF5DF',
          200: '#F4E8B8',
          300: '#E6CF82',
          400: '#D4B34C',
          500: '#B8922C',
        },
        paper: '#FBF9F5',
        charcoal: {
          700: '#4A4642',
          800: '#332F2C',
          900: '#1F1C1A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'polaroid-hover': '0 20px 30px -8px rgba(0, 0, 0, 0.12), 0 12px 14px -6px rgba(0, 0, 0, 0.06)',
        'envelope': '0 15px 35px -5px rgba(184, 146, 44, 0.12), 0 10px 15px -5px rgba(0,0,0,0.04)',
        'card-soft': '0 4px 20px -2px rgba(100, 90, 80, 0.06)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 0.85, transform: 'scale(1.15)' },
        },
        'gentle-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.04)', opacity: 1 },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
