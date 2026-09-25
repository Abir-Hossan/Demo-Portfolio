import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Terminal,
  Smartphone,
  Code2,
  CheckCircle2,
  Sparkles,
  GithubIcon,
  LinkedinIcon,
  Mail,
  FileText,
  Zap,
  Play,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ViewMode } from "../types";

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  setViewMode: (mode: ViewMode) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  onOpenResume,
  setViewMode,
}) => {
  const roles = [
    "Senior Web Developer",
    "React 19 & TypeScript Engineer",
    "Full-Stack UI Architect",
    "Responsive PWA Specialist",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [btnClicked, setBtnClicked] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-100 h-100 bg-violet-600/10 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Intro & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide font-mono">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline & Animated Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-indigo-400 via-violet-300 to-indigo-200 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <div className="h-10 flex items-center font-mono text-lg sm:text-xl md:text-2xl text-indigo-400 font-semibold">
                <span className="text-slate-500 mr-2">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2 h-6 bg-indigo-400 ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Short Tagline Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all active:scale-95"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setViewMode("mobile-sim")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 font-medium text-sm border border-slate-700/80 transition-all active:scale-95"
              >
                <Smartphone className="w-4 h-4 text-violet-400" />
                <span>Test App Mode</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs border border-slate-700/80 transition-all"
                title="Launch Developer CLI"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>$ launch-cli</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="ml-auto inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Full CV / Resume</span>
              </button>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm"
                >
                  <div className="text-2xl font-extrabold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Developer Sandbox Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-indigo-500 via-violet-500 to-emerald-500 opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>

              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">
                      LiveReactWidget.tsx
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg text-xs font-mono">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === "preview"
                          ? "bg-indigo-600 text-white font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === "code"
                          ? "bg-indigo-600 text-white font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Source Code
                    </button>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 min-h-80 flex flex-col justify-between">
                  {activeTab === "preview" ? (
                    <div className="space-y-4">
                      {/* Live Demo Widget Header */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                            <Zap className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">
                              Interactive React Component
                            </div>
                            <div className="text-xs text-slate-400">
                              State Count: {btnClicked}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onOpenResume();
                            setBtnClicked((prev: number): number => prev + 1);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm active:scale-95 transition-all"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Interact</span>
                        </button>
                      </div>

                      {/* Animated Result Box */}
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs space-y-2">
                        <div className="text-slate-400">
                          // Component Output Log
                        </div>
                        <div className="text-emerald-400">
                          ✓ React 19 StrictMode: Rendered in 0.4ms
                        </div>
                        <div className="text-indigo-300">
                          ⚡ Tailwind CSS v4 JIT Compiled
                        </div>
                        <div className="text-violet-300">
                          📱 Touch & Desktop Event Listeners Active
                        </div>
                        <div className="text-amber-300">
                          {btnClicked > 0
                            ? `🔥 Button pressed ${btnClicked} times! State updated cleanly.`
                            : '👉 Click "Interact" button above to trigger live state mutation.'}
                        </div>
                      </div>

                      {/* Tech Stack Pills in Card */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {[
                          "React 19",
                          "TypeScript",
                          "Tailwind CSS",
                          "Vite",
                          "HTML5/CSS3",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-75">
                      <pre className="leading-relaxed">
                        <code>{`import React, { useState } from 'react';

export function InteractiveWidget() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="p-4 rounded-xl bg-slate-800">
      <h3 className="font-bold text-white">
        React 19 Component
      </h3>
      <p className="text-xs text-slate-400">
        Clicks: {clicks}
      </p>
      <button onClick={onOpenResume} 
        onClick={() => setClicks(c => c + 1)}
        className="btn-primary"
      >
        Interact
      </button>
    </div>
  );
}`}</code>
                      </pre>
                    </div>
                  )}

                  {/* Card Footer Info */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      100% Client-Side Rendered
                    </span>
                    <span>v2.4.0 • Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
