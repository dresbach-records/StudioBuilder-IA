
import React from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';

const WizardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { id: 1, label: 'Basics', path: '/client/new-project/step-1' },
    { id: 2, label: 'Design', path: '/client/new-project/step-2' },
    { id: 3, label: 'Technical', path: '/client/new-project/step-3' },
    { id: 4, label: 'Content', path: '/client/new-project/step-4' },
    { id: 5, label: 'Review', path: '/client/new-project/review' },
  ];

  const currentStep = steps.find(s => location.pathname.includes(s.path))?.id || 1;
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark font-sans flex flex-col selection:bg-primary/20">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 dark:border-white/5 bg-white dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 px-8 flex items-center justify-between">
        <Link to="/client/portal" className="flex items-center gap-2">
           <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
             <span className="material-icons-round text-sm">architecture</span>
           </div>
           <span className="font-bold text-lg dark:text-white">StudioBuilder <span className="text-primary">AI</span></span>
        </Link>
        <div className="flex items-center gap-6">
           <button className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">Help Center</button>
           <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
             <span className="material-icons-round text-slate-400 text-sm">person</span>
           </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto w-full pt-12 pb-8 px-8">
        <div className="flex justify-between items-center mb-6 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-white/5 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-sm ${
                currentStep >= s.id 
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20' 
                : 'bg-white dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-white/10'
              }`}>
                {s.id}
              </div>
              <span className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${
                currentStep >= s.id ? 'text-primary' : 'text-slate-400'
              }`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-8 pb-24">
        <div className="bg-white dark:bg-panel-dark border border-slate-200 dark:border-white/5 rounded-3xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Outlet />
        </div>

        <div className="mt-8 text-center space-y-2">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {currentStep} of 5: Project Foundation</p>
           <div className="flex items-center justify-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1"><span className="material-icons-round text-xs">lock</span> Secure Data</span>
              <span className="flex items-center gap-1"><span className="material-icons-round text-xs">cloud_done</span> Auto-saving</span>
           </div>
        </div>
      </main>

      <footer className="py-8 text-center border-t border-slate-200 dark:border-white/5 opacity-50">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          © 2026 StudioBuilder AI. Desenvolvido por vini amaral techlab.ltda
        </p>
      </footer>
    </div>
  );
};

export default WizardLayout;
