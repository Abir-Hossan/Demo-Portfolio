import React, { useState } from 'react';
import { 
  SKILLS 
} from '../data/portfolioData';
import { Skill } from '../types';
import { 
  Code2, 
  Palette, 
  Zap, 
  Server, 
  Database, 
  Smartphone, 
  GitBranch, 
  Search, 
  X, 
  Terminal, 
  Copy, 
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillModal, setActiveSkillModal] = useState<Skill | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & ORM' },
    { id: 'tools', label: 'Build Tools & Bundlers' },
    { id: 'architecture', label: 'Architecture & UX' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-violet-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-indigo-300" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-pink-400" />;
      default: return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredSkills = SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Frameworks & Core Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any technology card to inspect actual code patterns, proficiency levels, and engineering use cases.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setActiveSkillModal(skill)}
              className="group cursor-pointer p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon & Proficiency Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 group-hover:bg-indigo-600/20 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Skill Name & Description */}
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{skill.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar & Exp Years */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Experience</span>
                  <span className="text-slate-300">{skill.yearsOfExp} Years</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
            No technologies found matching "{searchQuery}".
          </div>
        )}

      </div>

      {/* Code Snippet Modal for Active Skill */}
      {activeSkillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400">
                  {getIcon(activeSkillModal.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{activeSkillModal.name}</h3>
                  <span className="text-xs text-indigo-400 font-mono">
                    {activeSkillModal.proficiency}% Proficiency • {activeSkillModal.yearsOfExp} Years Practical Exp
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveSkillModal(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeSkillModal.description}
              </p>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    Code Pattern / Snippet Example
                  </span>
                  <button
                    onClick={() => handleCopyCode(activeSkillModal.codeSnippet)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto max-h-60">
                  <pre>
                    <code>{activeSkillModal.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveSkillModal(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
