import React from 'react';

export const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[80] opacity-[0.055] mix-blend-screen"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.8'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'repeat',
    }}
  />
);
