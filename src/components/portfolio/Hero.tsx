import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Download,
  Sparkles, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from './portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
  onOpenInteractiveDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInteractiveDemo }) => {
  const [copied, setCopied] = useState(false);
  const { developer } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-8 shadow-lg shadow-emerald-500/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{developer.status}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-mono text-[11px]">Full-Stack Web</span>
          </div>

          {/* 3D Developer Character Avatar with Subtle Depth & Lighting */}
          <div className="relative mb-8 group">
            {/* Subtle ambient depth halo matching the theme */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-cyan-500/25 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-b from-emerald-500/40 via-teal-500/20 to-cyan-500/40 shadow-2xl overflow-hidden bg-slate-950">
              <img
                src="/assets/developer-avatar.jpg"
                alt="Rahul Sharma - 3D Developer Avatar"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Verified check badge */}
            <div 
              className="absolute bottom-1 right-1 p-2 rounded-full bg-emerald-500 text-slate-950 border-2 border-slate-950 shadow-xl z-10 flex items-center justify-center"
              title="Verified Developer"
            >
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {developer.name}
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-medium bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent mb-6">
            {developer.role}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal">
            Specializing in modern <strong className="text-white font-medium">TypeScript</strong>,{' '}
            <strong className="text-white font-medium">React 19</strong>, and{' '}
            <strong className="text-white font-medium">Supabase</strong>. Passionate about architecting responsive,
            high-performance web applications and building interactive technical tools like{' '}
            <a href="#project" className="text-emerald-400 hover:underline font-medium">
              Code Quest
            </a>
            .
          </p>

          {/* Action CTAs: Includes View Resume & Download Resume */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full mb-12">
            <a
              href="#project"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Featured Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* View Resume Button (Opens PDF in New Tab) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-sm transition-all shadow-md shadow-emerald-500/5 group"
            >
              <FileText className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400/80" />
            </a>

            {/* Download Resume Button (Downloads PDF) */}
            <a
              href="/resume.pdf"
              download="Rahul_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-sm transition-all shadow-md hover:border-slate-600 group"
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* Interactive In-App Demo button */}
            <button
              onClick={onOpenInteractiveDemo}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:bg-slate-800/70 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Try In-App Quiz Demo</span>
            </button>
          </div>

          {/* Verified Quick Links & Copy Email */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-800/80 w-full text-xs">
            {/* GitHub */}
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all font-mono"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>@{developer.githubUsername}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* LinkedIn */}
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all font-mono"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all font-mono group"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{developer.email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
              )}
            </button>
          </div>

          {copied && (
            <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono animate-in fade-in">
              ✓ Email address copied to clipboard!
            </div>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-slate-800/80 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-left">
            <span className="text-2xl font-bold text-white font-mono block mb-1">React 19</span>
            <span className="text-xs text-slate-400">Modern reactive components & state architecture</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-left">
            <span className="text-2xl font-bold text-emerald-400 font-mono block mb-1">TypeScript</span>
            <span className="text-xs text-slate-400">Strict end-to-end type safety & clean code</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-left">
            <span className="text-2xl font-bold text-cyan-400 font-mono block mb-1">Supabase</span>
            <span className="text-xs text-slate-400">Cloud database, authentication, and persistence</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-left">
            <span className="text-2xl font-bold text-purple-400 font-mono block mb-1">Production</span>
            <span className="text-xs text-slate-400">Deployed live on Vercel with zero-lag builds</span>
          </div>
        </div>
      </div>
    </section>
  );
};
