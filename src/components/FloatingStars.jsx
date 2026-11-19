import React, { useMemo } from 'react';

export default function FloatingStars() {
  // Generate random subtle stars/sparkles positions
  const stars = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 96 + 2, // 2% to 98%
      y: Math.random() * 96 + 2,
      size: Math.random() * 8 + 6, // 6px to 14px
      opacity: Math.random() * 0.45 + 0.15,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
      type: i % 3, // 0: star, 1: sparkle, 2: soft dot
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        >
          {star.type === 0 && (
            <svg
              width={star.size}
              height={star.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4B34C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-softgold-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          )}

          {star.type === 1 && (
            <svg
              width={star.size * 1.1}
              height={star.size * 1.1}
              viewBox="0 0 24 24"
              fill="#CFBFDF"
              className="text-lavender-300 opacity-80"
            >
              <path d="M12 0L14 9L23 11L14 13L12 22L10 13L1 11L10 9L12 0Z" />
            </svg>
          )}

          {star.type === 2 && (
            <div
              className="rounded-full bg-dustypink-300/60"
              style={{
                width: `${star.size * 0.5}px`,
                height: `${star.size * 0.5}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
