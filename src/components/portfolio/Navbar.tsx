import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from './portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { developer } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Featured Work', href: '#project' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-[1px] shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/25 transition-all">
            <div className="w-full h-full bg-[#0d121f] rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                RS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {developer.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Social Icons */}
          <div className="flex items-center gap-1 pr-2 border-r border-slate-800">
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* View Resume Button (Opens PDF in New Tab) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-medium transition-all group"
            title="Open Resume PDF in a new tab"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>View Resume</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300" />
          </a>

          {/* Download Resume Button (Downloads PDF) */}
          <a
            href="/resume.pdf"
            download="Rahul_Sharma_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium transition-all group shadow-sm shadow-emerald-500/5"
            title="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-semibold text-xs shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-emerald-400 text-xs flex items-center gap-1"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Rahul_Sharma_Resume.pdf"
            className="p-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs flex items-center gap-1"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800/80 bg-[#0d121f]/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-800/80 border border-slate-700/70"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Resume</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="/resume.pdf"
                download="Rahul_Sharma_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-1">
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="text-[11px] text-slate-400 hover:text-slate-200 underline"
                >
                  View Details & Overview
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="ml-auto px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
