
import React, { useState } from 'react';

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="bg-white dark:bg-panel-dark border border-slate-200 dark:border-border-dark rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Platform Onboarding</h1>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {step} of 3</span>
        </div>

        <div className="p-12">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8">
                <span className="material-icons-round text-4xl">rocket</span>
              </div>
              <h2 className="text-3xl font-bold">Connect your workspace</h2>
              <p className="text-slate-500">Integrate your existing GitHub organization or Bitbucket workspace to let our agents assist with your deployments.</p>
              <button onClick={() => setStep(2)} className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl flex items-center gap-3">
                Connect GitHub <span className="material-icons-round">arrow_forward</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <h2 className="text-3xl font-bold">AI Agent Preferences</h2>
              <p className="text-slate-500">Select how much autonomy you want to grant our engineering agents.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 border-2 border-primary bg-primary/5 rounded-2xl">
                   <h4 className="font-bold">Co-Pilot Mode</h4>
                   <p className="text-xs text-slate-500 mt-1">Agents suggest code but never push without review.</p>
                </div>
                <div className="p-6 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-primary transition-all cursor-pointer">
                   <h4 className="font-bold">Autonomous Mode</h4>
                   <p className="text-xs text-slate-500 mt-1">Agents push to dev branches and fix CI/CD failures automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="px-8 py-3 bg-slate-100 dark:bg-white/5 rounded-xl font-bold">Back</button>
                <button onClick={() => setStep(3)} className="px-8 py-3 bg-primary text-white font-bold rounded-xl">Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                <span className="material-icons-round text-5xl">done_all</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">You're all set!</h2>
              <p className="text-slate-500 max-w-sm mx-auto mb-12">Your environment is fully synced and our agents are ready to begin their first architectural scan.</p>
              <a href="#/client/portal" className="px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30">Go to Dashboard</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
