import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeAccent, setActiveAccent] = useState('#D56A35');
  const [activeReel, setActiveReel] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-glow', activeAccent);
    document.documentElement.style.setProperty('--accent-color', activeAccent);
  }, [activeAccent]);

  const selectReel = (reel) => {
    setActiveReel(reel || null);
    setActiveAccent(reel?.accent || '#D56A35');
    if (reel) setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);

  const hoverReel = (reel) => {
    if (reel) {
      setActiveAccent(reel.accent || '#D56A35');
      setActiveReel(reel);
    } else if (!isViewerOpen) {
      setActiveAccent('#D56A35');
      setActiveReel(null);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activeAccent,
        setActiveAccent,
        activeReel,
        setActiveReel,
        selectReel,
        hoverReel,
        isViewerOpen,
        closeViewer,
        cursorText,
        setCursorText,
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeAccent} 0%, transparent 70%)`,
        }}
      />
      <div className="relative bg-[#080809]">{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
