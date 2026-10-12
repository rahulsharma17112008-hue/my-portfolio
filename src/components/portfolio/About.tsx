import React from 'react';
import { User, Terminal, Code2, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';

export const About: React.FC = () => {
  const { developer } = PORTFOLIO_DATA;

  const coreStrengths = [
    {
      icon: Code2,
      title: 'Modern Frontend Architecture',
      description:
        'Crafting responsive web interfaces using React 19, Tailwind CSS, and TypeScript. Focused on optimal render performance, accessible components, and polished micro-interactions.',
      color: 'emerald',
    },
    {
      icon: Database,
      title: 'Cloud Backend & State Systems',
      description:
        'Integrating cloud databases, real-time channels, and authentication with Supabase. Building data migration mechanisms between guest localStorage and cloud PostgreSQL accounts.',
      color: 'cyan',
    },
    {
      icon: Terminal,
      title: 'Strong Algorithmic Foundation',
      description:
        'Experienced with C++, Python, JavaScript, and Data Structures & Algorithms. Developing platforms that test and evaluate programming knowledge with high precision.',
      color: 'purple',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            <span>About The Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Clean, Scalable Web Experiences
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {developer.bio}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {coreStrengths.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-800/90 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy / Verified Credibility Banner */}
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-[#0e1422] to-slate-900/90 p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Continuous Learning & Verified Execution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Every project is built strictly around verified details, clear commit histories, and production deployments. Code Quest serves as a live testament to end-to-end full-stack development.
              </p>
            </div>
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold font-mono flex items-center gap-2 transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>GitHub Verified Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
