import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { id: '01', label: 'PROFILE', href: '#profile' },
  { id: '02', label: 'WORK', href: '#work' },
  { id: '03', label: 'ACCOUNTS', href: '#accounts' },
  { id: '04', label: 'STYLE', href: '#style' },
  { id: '05', label: 'ABOUT', href: '#about' },
  { id: '06', label: 'CONTACT', href: '#contact' }
];

export const Navbar = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeAccent, setCursorText } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`pointer-events-none fixed left-0 top-0 z-50 w-full p-8 transition-all duration-300 ${
          scrolled ? 'pt-6' : 'pt-8'
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="pointer-events-auto">
            <h1 className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-100">MANOJ S N</h1>
            <p className="mt-1 text-mono">REELS EDITOR / 2026</p>
          </div>

          <div className="pointer-events-auto flex flex-col items-end gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-x-2.5"
                  onMouseEnter={() => setCursorText(item.label)}
                  onMouseLeave={() => setCursorText('')}
                  style={{ color: isActive ? '#ffffff' : '#a1a1aa' }}
                >
                  <span className="text-mono transition-colors duration-200 group-hover:text-white">{item.label}</span>
                  <span className="border border-zinc-900 px-1 text-[8px] text-mono">{item.id}</span>
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 z-30 flex flex-col justify-between bg-[#080809]/98 px-8 pb-12 pt-28 font-mono lg:hidden"
        >
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-zinc-800 pb-3 text-lg text-zinc-200"
              >
                <span>{item.label}</span>
                <span className="text-xs text-zinc-600">{item.id}</span>
              </a>
            ))}
          </div>

          <div className="flex justify-between border-t border-zinc-900 pt-6 text-xs text-zinc-500">
            <span>SHORT-FORM VIDEO SPECIALIST</span>
            <span>2026</span>
          </div>
        </motion.div>
      )}
    </>
  );
};
