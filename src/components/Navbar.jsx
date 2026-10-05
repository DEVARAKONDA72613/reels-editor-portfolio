import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { id: '01', label: 'PROFILE', href: '#profile', section: 'profile' },
  { id: '02', label: 'WORK', href: '#work', section: 'work' },
  { id: '03', label: 'ACCOUNTS', href: '#accounts', section: 'accounts' },
  { id: '04', label: 'STYLE', href: '#style', section: 'style' },
  { id: '05', label: 'ABOUT', href: '#about', section: 'about' },
  { id: '06', label: 'CONTACT', href: '#contact', section: 'contact' },
];

export const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const { setCursorText } = useTheme();

  const close = () => setOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[70] p-5 md:p-7">
        <div className="flex items-start justify-between">
          <a
            href="#intro"
            className="pointer-events-auto block"
            onMouseEnter={() => setCursorText('HOME')}
            onMouseLeave={() => setCursorText('')}
          >
            <div className="font-mono text-[11px] font-semibold tracking-[0.2em] text-white">
              MANOJ S N
            </div>
            <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-zinc-600">
              DRIFTER.CUTS / PORTFOLIO 2026
            </div>
          </a>

          <div className="pointer-events-auto hidden flex-col items-end gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.section;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group flex min-w-[104px] items-center justify-end gap-3 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] transition-colors"
                  style={{ color: active ? '#f2eee5' : '#66635f' }}
                  onMouseEnter={() => setCursorText(item.label)}
                  onMouseLeave={() => setCursorText('')}
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    {item.label}
                  </span>
                  <span className="w-5 text-right text-[7px] text-zinc-700">
                    {item.id}
                  </span>
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: active ? 'var(--accent-color)' : 'transparent' }}
                  />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center border border-white/10 bg-black/50 text-zinc-200 backdrop-blur-md lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[65] flex flex-col justify-between bg-[#080807] p-7 pt-28 lg:hidden">
          <div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between border-b border-white/10 py-5 font-mono text-sm tracking-[0.18em] text-zinc-200"
              >
                <span>{item.label}</span>
                <span className="text-zinc-600">{item.id}</span>
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-4 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">
            <div>@drifter.cuts</div>
            <div className="mt-2">SHORT-FORM VIDEO EDITOR</div>
          </div>
        </div>
      )}
    </>
  );
};
