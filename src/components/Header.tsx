import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Monitor, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  Download,
  Palette
} from 'lucide-react';
import { ViewMode, ThemeMode, AccentColor } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  theme,
  setTheme,
  accentColor,
  setAccentColor,
  onOpenTerminal,
  onOpenResume
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Playground', href: '#playground' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const accentOptions: { id: AccentColor; name: string; bg: string }[] = [
    { id: 'indigo', name: 'Indigo', bg: 'bg-indigo-600' },
    { id: 'emerald', name: 'Emerald', bg: 'bg-emerald-600' },
    { id: 'violet', name: 'Violet', bg: 'bg-violet-600' },
    { id: 'amber', name: 'Amber', bg: 'bg-amber-500' },
    { id: 'cyan', name: 'Cyan', bg: 'bg-cyan-500' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a 
            href="#about" 
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                S. Kabir Hossan
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work"></span>
              </span>
              <span className="text-xs text-slate-400 block -mt-0.5 font-mono">Full-Stack Web Dev</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-800/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools & Switchers */}
          <div className="flex items-center gap-2">

            {/* Mode Switcher: Web vs Mobile App Sim */}
            <div className="bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 flex items-center gap-1 text-xs">
              <button
                onClick={() => setViewMode('web')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'web'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Full Responsive Web Mode"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Web View</span>
              </button>
              <button
                onClick={() => setViewMode('mobile-sim')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'mobile-sim'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Interactive Mobile App Shell Mode"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">App View</span>
              </button>
            </div>

            {/* CLI Terminal Button */}
            <button
              onClick={onOpenTerminal}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Open Terminal CLI"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline font-bold">CLI</span>
            </button>

            {/* Accent Color Picker Toggle */}
            <div className="relative">
              <button
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                title="Customize Accent Color"
              >
                <Palette className="w-4 h-4" />
              </button>

              {colorPickerOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 px-2 py-1 block">
                    Accent Theme
                  </span>
                  <div className="grid grid-cols-5 gap-1.5 pt-1">
                    {accentOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setAccentColor(opt.id);
                          setColorPickerOpen(false);
                        }}
                        className={`w-6 h-6 rounded-full ${opt.bg} transition-transform ${
                          accentColor === opt.id ? 'scale-125 ring-2 ring-white' : 'opacity-80 hover:opacity-100'
                        }`}
                        title={opt.name}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Resume CV Download Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    onOpenResume();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
                >
                  <Download className="w-4 h-4" />
                  View & Download Resume
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
