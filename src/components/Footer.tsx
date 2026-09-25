import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  Heart,
  Terminal,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-white block">{PERSONAL_INFO.name}</span>
              <span className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.title}</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#playground" className="hover:text-white transition-colors">Playground</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & CLI */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-emerald-400 font-mono text-xs flex items-center gap-1"
              title="Open CLI Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React 19, TypeScript, Tailwind CSS & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
