declare module 'react/jsx-runtime';

import React from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ 
  isOpen, 
  onClose 
}: ResumeModalProps): React.ReactElement | null => {

  const handleDownload = () => {
    try {
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.7 } });
    } catch (err) {}
    alert('Resume downloaded in PDF format!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">Curriculum Vitae / Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 space-y-8 bg-slate-950 text-slate-100">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <h1 className="text-3xl font-black text-white">{PERSONAL_INFO.name}</h1>
            <p className="text-base text-indigo-400 font-semibold font-mono">{PERSONAL_INFO.title}</p>
            
            <div className="flex flex-wrap gap-4 text-xs text-slate-300 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {RESUME_DATA.coreCompetencies.map((comp, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              Work History
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2 border-l-2 border-slate-800 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <p className="text-xs text-indigo-400 font-semibold">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                Education
              </h2>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <div className="text-xs text-indigo-400">{edu.institution} ({edu.year})</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                Certifications
              </h2>
              <div className="space-y-1">
                {RESUME_DATA.certifications.map((c, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
