import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client & Teammate Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-indigo-500/40" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <span className="text-[10px] text-slate-400 font-mono block">{t.role}, {t.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
