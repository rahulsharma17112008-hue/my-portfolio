import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from './portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { developer } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070b] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Developer */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#0d121f] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                RS
              </div>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{developer.name}</p>
              <p className="text-[11px] text-slate-400">{developer.role} • Dark Premium Portfolio</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${developer.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors text-xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {currentYear} {developer.name}. All verified details reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            Crafted with React 19 • TypeScript • Tailwind CSS • Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
