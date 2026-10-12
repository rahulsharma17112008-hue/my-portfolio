import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Layers, 
  Wrench
} from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ElementType> = {
    'Frontend Development': Code2,
    'Backend & Cloud Services': Database,
    'Core Languages & Problem Solving': Terminal,
    'Tooling & Deployment': Wrench,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Tech Stack & Engineering Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Verified technologies and developer tooling utilized in production web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Code2;
            return (
              <div
                key={cat.name}
                className="rounded-2xl border border-slate-800/90 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-slate-700/80 transition-all space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-emerald-400 border border-slate-700/60">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.name}</h3>
                      <p className="text-xs text-slate-400">{cat.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-2 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
