import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  MessageSquare 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'fullstack',
    budget: '$5k - $10k'
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Engineer Something Exceptional
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Available for Senior Web Developer positions, high-impact contract roles, and architectural consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Schedule Call */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4 text-xs font-mono text-slate-300">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Email Address</span>
                    <span className="text-white font-bold">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Phone Number</span>
                    <span className="text-white font-bold">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Location</span>
                    <span className="text-white font-bold">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Schedule Discovery Call Simulator */}
              <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>15-Min Technical Discovery Call</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Need a quick architectural assessment or role discussion? Book a direct calendar slot.
                </p>
                <button
                  onClick={() => alert('Calendar booking system simulated!')}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md"
                >
                  Schedule Free Discovery Call
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Kabir will review your details and respond via email within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '', projectType: 'fullstack' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">Project / Discussion Scope</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        { id: 'fullstack', label: 'Full-Stack Web App' },
                        { id: 'frontend', label: 'React / Frontend UI' },
                        { id: 'fulltime', label: 'Full-Time Position' },
                        { id: 'consulting', label: 'Code Review & Audit' },
                        { id: 'other', label: 'Other Inquiries' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: t.id as any })}
                          className={`p-2.5 rounded-xl text-xs text-center border font-medium transition-all ${
                            formData.projectType === t.id
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">Message Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, team requirements, or role specs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Sending Message...' : 'Send Message To Kabir'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
