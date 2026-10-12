import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from './portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { developer } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate sending & trigger mailto
    setSubmitted(true);
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Interested in collaboration, engineering roles, or feedback on Code Quest? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Verified Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors font-mono"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-400 block mb-1">Direct Email</span>
                <a
                  href={`mailto:${developer.email}`}
                  className="text-base font-semibold text-white hover:text-emerald-400 transition-colors font-mono break-all"
                >
                  {developer.email}
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Responses typically sent within 24 hours.
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex items-center justify-between group hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all backdrop-blur-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 block">Professional Network</span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Rahul Sharma on LinkedIn
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex items-center justify-between group hover:border-slate-700 hover:bg-slate-900/70 transition-all backdrop-blur-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 block">Code & Contributions</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    @{developer.githubUsername}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to dispatch an email directly to Rahul Sharma.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300">
                    Your message has been formatted. If your default email client didn't open automatically, send directly to{' '}
                    <strong className="text-emerald-400 font-mono">{developer.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Opportunity / Code Quest Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Rahul, I noticed your work on Code Quest and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Rahul</span>
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
