import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Smartphone, 
  Monitor, 
  Code2,
  Sparkles,
  Zap
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1.5">{project.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image / Mockup Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

          {/* Floating Category Pill */}
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 text-xs font-mono border border-slate-700/80 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-4 border-b border-slate-800 bg-slate-950/50 flex gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all ${
              activeTab === 'overview'
                ? 'bg-slate-900 text-indigo-400 border-t-2 border-indigo-500'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Highlights
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all ${
              activeTab === 'architecture'
                ? 'bg-slate-900 text-indigo-400 border-t-2 border-indigo-500'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & Specs
          </button>
          {project.codeSample && (
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all ${
                activeTab === 'code'
                  ? 'bg-slate-900 text-indigo-400 border-t-2 border-indigo-500'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Code Snippet
            </button>
          )}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 space-y-6">

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.fullDesc}
              </p>

              {/* Impact Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-xl font-black text-indigo-400 font-mono">{m.value}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  Key Features & Functional Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Technical Stack & Infrastructure Blueprint
              </h4>
              <div className="space-y-2.5">
                {project.architecture?.map((arch, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <div className="font-bold text-indigo-300 font-mono">Component Tier #{idx + 1}</div>
                    <div className="text-slate-400">{arch}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Tab */}
          {activeTab === 'code' && project.codeSample && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Core Implementation Pattern
              </h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                <pre>
                  <code>{project.codeSample}</code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20"
              >
                <span>Live Web Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
