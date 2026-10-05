import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeAccent, setActiveAccent] = useState(null);
  const [activeReel, setActiveReel] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const accent = activeAccent || '#ffffff';
    document.documentElement.style.setProperty('--accent-glow', accent);
    document.documentElement.style.setProperty('--accent-color', accent);
  }, [activeAccent]);

  const selectReel = (reel) => {
    setActiveReel(reel);
    setActiveAccent(reel ? reel.accentColor : null);
    if (reel) setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  const hoverReel = (reel) => {
    if (reel) {
      setActiveAccent(reel.accentColor);
      setActiveReel(reel);
    } else if (!isViewerOpen) {
      setActiveAccent(null);
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
        setCursorText
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20 transition-colors duration-1000"
        style={{
          background: activeReel
            ? `radial-gradient(circle at 50% 50%, ${activeReel.accentColor} 0%, transparent 70%)`
            : 'transparent'
        }}
      />
      <div
        className="relative transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: '#080809' }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
