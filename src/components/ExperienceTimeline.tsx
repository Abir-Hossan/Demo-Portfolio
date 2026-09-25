import React from 'react';
import { EXPERIENCES, RESUME_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career History & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            6+ years engineering software solutions, leading development workflows, and shipping high-impact web products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-3 pl-6 space-y-10">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"></span>

                  <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl space-y-4">
                    
                    {/* Role & Company Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-indigo-400 flex items-center gap-2 mt-0.5">
                          <span>{exp.company}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400 font-normal text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-medium self-start sm:self-auto border border-slate-700/60">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Impact Metric Badge */}
                    {exp.impactMetric && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Impact: {exp.impactMetric}</span>
                      </div>
                    )}

                    {/* Key Responsibilities */}
                    <div className="space-y-1.5 pt-1">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Education</span>
              </h3>

              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                  <div className="text-xs font-semibold text-indigo-400">{edu.institution}</div>
                  <div className="text-[11px] font-mono text-slate-400">{edu.year}</div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Certifications</span>
              </h3>

              <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
