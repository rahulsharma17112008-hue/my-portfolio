import React from 'react';
import { 
  ExternalLink, 
  Play, 
  Sparkles, 
  CheckCircle, 
  Database, 
  Flame
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA } from './portfolioData';

interface FeaturedProjectProps {
  onOpenInteractiveDemo: () => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenInteractiveDemo }) => {
  const { featuredProject } = PORTFOLIO_DATA;

  return (
    <section id="project" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Featured Production Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Code Quest
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {featuredProject.tagline} — an interactive web application designed to test and sharpen core programming knowledge.
          </p>
        </div>

        {/* Big Premium Project Card */}
        <div className="rounded-3xl border border-slate-700/80 bg-gradient-to-b from-[#0e1424]/90 via-[#0a0f1d]/90 to-[#070b14]/90 backdrop-blur-xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          {/* Top Window Chrome */}
          <div className="px-6 py-4 border-b border-slate-800/90 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
                code-queust.vercel.app
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Vercel
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Project Details & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase block mb-1">
                  Full-Stack Web Application
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Interactive Quiz & Skill Evaluation Engine
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                {featuredProject.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
                    <span className="block text-xs font-mono text-slate-400 mb-0.5">{m.label}</span>
                    <span className="block text-xs sm:text-sm font-semibold text-white">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block">
                  Core Architectural Capabilities
                </span>
                {featuredProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 text-slate-200 text-xs font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live App</span>
                </a>

                <button
                  onClick={onOpenInteractiveDemo}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold text-xs sm:text-sm transition-all"
                >
                  <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  <span>Try Demo In Portfolio</span>
                </button>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Interactive Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 shadow-2xl space-y-4">
                {/* Header within Mockup */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-white tracking-wide">CODE QUEST</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Accuracy 100%</span>
                </div>

                {/* Simulated Topics */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {['JavaScript', 'Python', 'C++', 'DSA'].map((t, idx) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                        idx === 0
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Simulated Question */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/90 text-xs font-mono text-slate-200">
                  <p className="text-emerald-300 text-[11px] mb-1">// Question 01</p>
                  <p>What is the output of `typeof null` in JavaScript?</p>
                </div>

                {/* Simulated Options */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 flex items-center justify-between">
                    <span>A. "null"</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 flex items-center justify-between">
                    <span>B. "undefined"</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-emerald-500/80 bg-emerald-950/40 text-emerald-300 flex items-center justify-between font-semibold">
                    <span>C. "object"</span>
                    <span className="text-[10px] bg-emerald-500 text-black px-1.5 rounded font-bold">✓ CORRECT</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 flex items-center justify-between">
                    <span>D. "number"</span>
                  </div>
                </div>

                {/* Supabase backend status pill */}
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-[11px] text-cyan-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    Supabase Auth & PostgreSQL synced
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                {/* Interactive Launcher Trigger */}
                <button
                  onClick={onOpenInteractiveDemo}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Click to Launch Playable Quiz In Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
