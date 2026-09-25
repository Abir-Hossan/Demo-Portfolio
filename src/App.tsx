import React, { useState, useEffect } from 'react';

// Keep this entry point type-safe when React's ambient typings are unavailable.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { LivePlayground } from './components/LivePlayground';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileAppFrame } from './components/MobileAppFrame';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';
import { ViewMode, ThemeMode, AccentColor } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('web');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [accentColor, setAccentColor] = useState<AccentColor>('indigo');
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-900 text-slate-100'
    }`}>
      
      {/* Top Header Navigation */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        theme={theme}
        setTheme={setTheme}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main View Mode Content */}
      {viewMode === 'mobile-sim' ? (
        <main className="pt-20">
          <MobileAppFrame
            onCloseSim={() => setViewMode('web')}
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />
        </main>
      ) : (
        <main className="space-y-4">
          <Hero
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
            setViewMode={setViewMode}
          />
          <TechStack />
          <Projects />
          <LivePlayground />
          <ExperienceTimeline />
          <Testimonials />
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Popup CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Printable / Downloadable Resume Modal */}
      {false && (
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      )}

    </div>
  );
}
