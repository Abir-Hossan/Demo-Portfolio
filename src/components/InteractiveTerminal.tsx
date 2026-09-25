import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Maximize2, 
  Minimize2,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume
}: InteractiveTerminalProps) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: '1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 font-bold">
            🚀 Kabir Hossan Developer CLI v2.4.0 (x86_64-linux)
          </p>
          <p className="text-slate-400">
            Type <span className="text-indigo-400 font-bold">help</span> to view available commands or <span className="text-amber-300 font-bold">hire</span> to start collaboration!
          </p>
        </div>
      )
    }
  ]);

  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-indigo-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1 font-mono">
              <div><span className="text-emerald-400">help</span> - Show this menu</div>
              <div><span className="text-emerald-400">bio</span> - About Kabir</div>
              <div><span className="text-emerald-400">skills</span> - List tech stack</div>
              <div><span className="text-emerald-400">projects</span> - View projects</div>
              <div><span className="text-emerald-400">hire</span> - Contact & Hire</div>
              <div><span className="text-emerald-400">resume</span> - Open CV</div>
              <div><span className="text-emerald-400">date</span> - Current time</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal</div>
              <div><span className="text-emerald-400">exit</span> - Close CLI</div>
            </div>
          </div>
        );
        break;

      case 'bio':
      case 'about':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-white font-bold">{PERSONAL_INFO.name} - {PERSONAL_INFO.title}</p>
            <p className="text-slate-400">{PERSONAL_INFO.shortBio}</p>
            <p className="text-emerald-400 font-mono">Status: {PERSONAL_INFO.status}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-indigo-400 font-bold">Core Stack Proficiency:</p>
            {SKILLS.map((s) => (
              <div key={s.id} className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-200">{s.name}</span>
                <span className="text-emerald-400">{s.proficiency}%</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-indigo-400 font-bold">Featured Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="font-mono text-[11px]">
                <span className="text-white font-bold">• {p.title}</span> ({p.category})
              </div>
            ))}
          </div>
        );
        break;

      case 'hire':
      case 'sudo hire':
        try {
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
        } catch (err) {}
        outputNode = (
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl space-y-1 text-xs">
            <p className="text-emerald-400 font-bold text-sm">🎉 Excellent Decision!</p>
            <p className="text-slate-200">Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-mono">{PERSONAL_INFO.email}</a></p>
            <p className="text-slate-300">Location: {PERSONAL_INFO.location}</p>
            <p className="text-amber-300">Available for Senior Full-Stack & Contract Roles!</p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume.txt':
        onOpenResume();
        outputNode = <p className="text-xs text-indigo-400">Opening printable PDF CV modal...</p>;
        break;

      case 'date':
        outputNode = <p className="text-xs text-slate-300 font-mono">{new Date().toString()}</p>;
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <p className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cmd}". Type <span className="underline">help</span> for commands.
          </p>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        command: inputVal,
        output: outputNode
      }
    ]);

    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-3xl h-[480px] flex flex-col shadow-2xl overflow-hidden font-mono">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="ml-2 text-xs text-slate-300 font-bold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              kabir@dev-workstation:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Log Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              {log.command && (
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">kabir@dev:~$</span>
                  <span className="text-slate-100 font-bold">{log.command}</span>
                </div>
              )}
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Form Line */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs">kabir@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'hire'..."
            className="flex-1 bg-transparent text-xs text-white focus:outline-none font-mono"
          />
          <button type="submit" className="text-slate-400 hover:text-white p-1">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
