import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  User, 
  Briefcase, 
  GraduationCap,
  Phone,
  MapPin
} from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { developer, featuredProject } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700/80 bg-[#0d121f] text-slate-100 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                Resume & Credentials
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                  Verified PDF Attached
                </span>
              </h3>
              <p className="text-xs text-slate-400">{developer.name} • {developer.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Quick PDF Action Ribbon */}
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-sm space-y-0.5 text-center sm:text-left">
              <p className="font-semibold text-white flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Official Resume PDF Available
              </p>
              <p className="text-slate-300 text-xs">
                View in your browser or download the complete PDF copy directly.
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View PDF</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href="/resume.pdf"
                download="Rahul_Sharma_Resume.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold text-xs transition-all shadow-md shadow-emerald-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <User className="w-4 h-4 text-emerald-400" />
                Candidate Overview
              </div>
              <span className="text-xs text-emerald-400 font-mono">Open to Opportunities</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Name</span>
                <span className="text-slate-200 font-medium text-sm">{developer.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Education</span>
                <span className="text-slate-200 font-medium text-sm">B.Tech in IT (Amity University, 2025–2029)</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Contact Email</span>
                <span className="text-slate-200 font-mono text-xs">{developer.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Contact Phone</span>
                <span className="text-slate-200 font-mono text-xs flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400" />
                  +91 8120303795
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Location</span>
                <span className="text-slate-200 text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  DD Nagar, Gwalior (474005)
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">GitHub Profile</span>
                <a 
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-xs"
                >
                  @{developer.githubUsername}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Verified Technical Highlights */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-medium text-sm border-b border-slate-800/80 pb-3">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              Verified Project Milestone
            </div>
            
            <div className="text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-sm">{featuredProject.title}</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono border border-cyan-500/20">
                  Shipped to Production
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-medium text-sm border-b border-slate-800/80 pb-3">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              Technical & Programming Skills
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              {['TypeScript', 'React', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'C++', 'Data Structures', 'Web Development'].map((skill) => (
                <div key={skill} className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-200 text-xs font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-5 border-t border-slate-800/80 bg-slate-900/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Rahul_Sharma_Resume.pdf"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
