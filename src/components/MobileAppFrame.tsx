import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Home, 
  Code2, 
  Briefcase, 
  Cpu, 
  Send, 
  RotateCcw,
  Sparkles,
  ChevronLeft,
  X,
  Share2,
  Bell,
  Smartphone,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../data/portfolioData';

interface MobileAppFrameProps {
  onCloseSim: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const MobileAppFrame: React.FC<MobileAppFrameProps> = ({
  onCloseSim,
  onOpenTerminal,
  onOpenResume
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'skills' | 'projects' | 'contact'>('home');
  const [haptics, setHaptics] = useState(false);
  const [notification, setNotification] = useState<string | null>(
    '👋 Welcome to Kabir\'s Mobile App Portfolio!'
  );

  const handleTabClick = (tab: 'home' | 'skills' | 'projects' | 'contact') => {
    if (haptics && window.navigator.vibrate) {
      window.navigator.vibrate(15);
    }
    setActiveTab(tab);
  };

  return (
    <div className="py-12 px-4 flex flex-col items-center justify-center bg-slate-950/80 min-h-screen">
      
      {/* Device Simulator Banner Control Bar */}
      <div className="mb-6 flex items-center justify-between gap-4 max-w-sm w-full bg-slate-900 border border-slate-800 p-3 rounded-2xl shadow-xl">
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-indigo-400" />
          <div>
            <span className="text-xs font-bold text-white block">Mobile App Shell</span>
            <span className="text-[10px] text-slate-400 font-mono">iOS 18 / Android Frame</span>
          </div>
        </div>

        <button
          onClick={onCloseSim}
          className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
        >
          Back to Web View
        </button>
      </div>

      {/* Simulated Device Housing Frame */}
      <div className="relative w-full max-w-[390px] h-[780px] bg-slate-950 rounded-[50px] border-[10px] border-slate-800 shadow-2xl overflow-hidden flex flex-col select-none ring-1 ring-slate-700">
        
        {/* Top Camera Notch / Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></div>
        </div>

        {/* Top Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-950/90 backdrop-blur-md z-40">
          <span className="font-bold">09:41</span>
          <div className="flex items-center gap-2">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5 fill-current text-emerald-400" />
          </div>
        </div>

        {/* App Notification Toast Banner */}
        {notification && (
          <div className="mx-3 my-1 p-2.5 rounded-2xl bg-indigo-600/90 text-white text-xs font-medium backdrop-blur-md flex items-center justify-between animate-in slide-in-from-top duration-300 z-40 shadow-lg">
            <div className="flex items-center gap-2">
              <Bell className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="text-[11px] leading-tight">{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="p-0.5">
              <X className="w-3.5 h-3.5 opacity-80 hover:opacity-100" />
            </button>
          </div>
        )}

        {/* Scrollable App Viewport */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-slate-100 scrollbar-none pb-20">
          
          {/* App Screen: HOME */}
          {activeTab === 'home' && (
            <div className="space-y-4 animate-in fade-in">
              
              {/* App User Profile Card */}
              <div className="p-4 rounded-3xl bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 text-center space-y-2">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-full bg-indigo-600 p-1 ring-4 ring-indigo-500/20">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-extrabold text-2xl">
                      KH
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
                </div>

                <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-indigo-300 font-mono">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-slate-300 line-clamp-2 px-2">
                  {PERSONAL_INFO.shortBio}
                </p>

                <div className="pt-2 flex justify-center gap-2">
                  <button
                    onClick={onOpenResume}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-md flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" /> Resume
                  </button>
                  <button
                    onClick={onOpenTerminal}
                    className="px-3 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono"
                  >
                    $ CLI
                  </button>
                </div>
              </div>

              {/* App Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-2">
                {PERSONAL_INFO.stats.map((s, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-base font-extrabold text-indigo-400 font-mono">{s.value}</div>
                    <div className="text-[10px] text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Featured Highlights List */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-400">
                  Featured Mobile PWAs
                </span>
                {PROJECTS.slice(0, 2).map((p) => (
                  <div key={p.id} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white truncate">{p.title}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">{p.shortDesc}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* App Screen: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Core Mobile & Web Stack
              </h3>
              <div className="space-y-2">
                {SKILLS.map((s) => (
                  <div key={s.id} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">{s.name}</span>
                      <span className="text-indigo-400 font-mono text-[10px]">{s.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${s.proficiency}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* App Screen: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                All App Projects ({PROJECTS.length})
              </h3>
              <div className="space-y-3">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                    <img
                      src={p.image}
                      alt={p.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-28 rounded-xl object-cover"
                    />
                    <h4 className="text-xs font-bold text-white">{p.title}</h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">{p.shortDesc}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-[9px] font-mono text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* App Screen: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Quick Mobile Message
              </h3>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Let's build a web project together!"
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setNotification('✅ Message sent! Kabir will reply via email.')}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
                >
                  Send App Message
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Native Mobile Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-950/95 border-t border-slate-800/80 backdrop-blur-xl flex items-center justify-around px-2 z-40">
          <button
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-colors ${
              activeTab === 'home' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>

          <button
            onClick={() => handleTabClick('skills')}
            className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-colors ${
              activeTab === 'skills' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Skills</span>
          </button>

          <button
            onClick={() => handleTabClick('projects')}
            className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-colors ${
              activeTab === 'projects' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Projects</span>
          </button>

          <button
            onClick={() => handleTabClick('contact')}
            className={`flex flex-col items-center gap-1 text-[10px] font-mono transition-colors ${
              activeTab === 'contact' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </div>

      </div>

    </div>
  );
};
