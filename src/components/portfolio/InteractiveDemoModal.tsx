import React, { useState } from 'react';
import { X, RotateCcw, CheckCircle2, XCircle, ExternalLink, Code2, Sparkles, Award } from 'lucide-react';
import { questions, topics } from '../../data';
import type { Topic, Question } from '../../types';
import { PORTFOLIO_DATA } from './portfolioData';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic>('JavaScript');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  // Filter 5 questions for quick demo
  const topicQuestions: Question[] = questions
    .filter((q) => q.topic === selectedTopic)
    .slice(0, 5);

  const currentQ = topicQuestions[currentIndex] || topicQuestions[0];

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleChooseAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < topicQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700/80 bg-[#0d121f] text-slate-100 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Glow bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-indigo-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                Code Quest — Interactive Showcase
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                  Live Preview
                </span>
              </h3>
              <p className="text-xs text-slate-400">Built by {PORTFOLIO_DATA.developer.name} with React 19 & TypeScript</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          {/* Topic Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => handleSelectTopic(t)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTopic === t
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-semibold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {!isFinished ? (
            <div className="space-y-4">
              {/* Question Meta & Progress */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  Question <strong className="text-white">{currentIndex + 1}</strong> of {topicQuestions.length}
                </span>
                <span className="font-mono text-emerald-400">
                  Current Score: {score}/{topicQuestions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / topicQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-sm font-medium text-slate-100 leading-relaxed font-mono">
                  {currentQ?.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ?.options.map((option, idx) => {
                  let btnStyle = 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60';

                  if (isAnswered) {
                    if (idx === currentQ.correctAnswer) {
                      btnStyle = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-300';
                    } else if (idx === selectedAnswer) {
                      btnStyle = 'border-rose-500/80 bg-rose-950/40 text-rose-300';
                    } else {
                      btnStyle = 'border-slate-800/40 bg-slate-900/30 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleChooseAnswer(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-mono">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </span>
                      {isAnswered && idx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && idx === selectedAnswer && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-3 animate-in fade-in">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-cyan-300 block mb-0.5">Explanation</span>
                      <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
                    </div>
                  </div>
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={handleNext}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md shadow-emerald-500/20"
                    >
                      {currentIndex + 1 < topicQuestions.length ? 'Next Question →' : 'View Results'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Quiz Showcase Complete!</h4>
                <p className="text-xs text-slate-400">
                  Topic: <span className="text-emerald-400 font-medium">{selectedTopic}</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                <div>
                  <span className="block text-2xl font-bold text-white font-mono">{score} / {topicQuestions.length}</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">Score</span>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <span className="block text-2xl font-bold text-emerald-400 font-mono">
                    {Math.round((score / topicQuestions.length) * 100)}%
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">Accuracy</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto">
                This is a live preview of the interactive engine developed by Rahul Sharma. Experience the full app with Supabase authentication and 80+ questions on Vercel.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
                <a
                  href={PORTFOLIO_DATA.featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Play Full App on Vercel
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live engine running in-browser</span>
          </div>
          <a
            href={PORTFOLIO_DATA.featuredProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
          >
            GitHub Repo
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
