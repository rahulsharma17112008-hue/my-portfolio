import { useState, useEffect } from 'react';
import { Navbar } from './components/portfolio/Navbar';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { FeaturedProject } from './components/portfolio/FeaturedProject';
import { Skills } from './components/portfolio/Skills';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/Footer';
import { ResumeModal } from './components/portfolio/ResumeModal';
import { InteractiveDemoModal } from './components/portfolio/InteractiveDemoModal';

// Optional Full App components if user enters standalone quiz mode
import { Dashboard } from './components/Dashboard';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { Login } from './components/Login';
import { questions } from './data';
import type { Topic, QuizResult } from './types';
import { Code2, ArrowLeft } from 'lucide-react';
import { supabase } from './lib/supabase';
import type { User } from '@supabase/supabase-js';

type AppMode = 'portfolio' | 'full-codequest';
type QuizView = 'dashboard' | 'quiz' | 'results';

function App() {
  const [appMode, setAppMode] = useState<AppMode>('portfolio');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // State for optional full Code Quest exploration
  const [session, setSession] = useState<{ user: User } | null>(null);
  const [quizView, setQuizView] = useState<QuizView>('dashboard');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [history, setHistory] = useState<QuizResult[]>([]);

  // Ensure dark mode class is applied to html
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Supabase session listener for full-app mode
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setQuizView('quiz');
    setUserAnswers({});
  };

  const handleQuizComplete = async (answers: Record<number, number>) => {
    setUserAnswers(answers);
    setQuizView('results');

    if (selectedTopic && session?.user) {
      const topicQuestions = questions.filter((q) => q.topic === selectedTopic);
      const score = topicQuestions.reduce((acc, q, index) => {
        return acc + (answers[index] === q.correctAnswer ? 1 : 0);
      }, 0);
      const accuracy = Math.round((score / topicQuestions.length) * 100);

      const result = {
        user_id: session.user.id,
        category: selectedTopic,
        score,
        total_questions: topicQuestions.length,
        accuracy,
        completed_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('quiz_results')
        .insert([result])
        .select()
        .single();

      if (!error && data) {
        setHistory((prev) => [...prev, data as QuizResult]);
      }
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setQuizView('dashboard');
  };

  // If in standalone full Code Quest app mode
  if (appMode === 'full-codequest') {
    const currentQuestions = selectedTopic
      ? questions.filter((q) => q.topic === selectedTopic)
      : [];

    return (
      <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans">
        {/* Top bar to easily switch back to Portfolio */}
        <header className="bg-slate-900/90 border-b border-slate-800 sticky top-0 z-30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <button
              onClick={() => setAppMode('portfolio')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400" />
              <span>← Return to Rahul Sharma Portfolio</span>
            </button>

            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setQuizView('dashboard')}
            >
              <div className="p-1.5 bg-emerald-600 rounded-lg">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold tracking-tight text-white">CodeQuest Standalone Engine</span>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {!session ? (
            <div className="max-w-md mx-auto">
              <div className="mb-4 text-center">
                <p className="text-xs text-slate-400 mb-2">
                  Code Quest includes user accounts and cloud history persistence via Supabase.
                </p>
              </div>
              <Login />
            </div>
          ) : (
            <>
              {quizView === 'dashboard' && (
                <Dashboard
                  onSelectTopic={handleSelectTopic}
                  history={history}
                  onSignOut={handleSignOut}
                />
              )}

              {quizView === 'quiz' && currentQuestions.length > 0 && (
                <Quiz
                  questions={currentQuestions}
                  onComplete={handleQuizComplete}
                  onCancel={() => setQuizView('dashboard')}
                />
              )}

              {quizView === 'results' && currentQuestions.length > 0 && (
                <Results
                  questions={currentQuestions}
                  userAnswers={userAnswers}
                  onRetry={() => {
                    setUserAnswers({});
                    setQuizView('quiz');
                  }}
                  onHome={() => setQuizView('dashboard')}
                />
              )}
            </>
          )}
        </main>
      </div>
    );
  }

  // Primary Default View: Dark Premium Personal Portfolio
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenInteractiveDemo={() => setIsDemoOpen(true)}
        />
        <About />
        <FeaturedProject
          onOpenInteractiveDemo={() => setIsDemoOpen(true)}
        />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive In-Portfolio Demo Modal */}
      <InteractiveDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}

export default App;
