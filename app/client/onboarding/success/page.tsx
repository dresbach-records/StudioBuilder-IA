
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';

const OnboardingSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center py-24 px-8">
      <div className="max-w-md w-full text-center space-y-8 animate-in zoom-in-95 duration-700">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-primary/40">
           <span className="material-icons-round text-5xl">rocket_launch</span>
        </div>
        <div>
           <h1 className="text-4xl font-black mb-4">You're Ready for Lift-off!</h1>
           <p className="text-slate-500 leading-relaxed">Your engineering workspace has been provisioned, your Git repositories are synced, and the AI agents are standing by for your first command.</p>
        </div>
        <div className="pt-8 grid grid-cols-1 gap-4">
           <Button onClick={() => navigate('/client/portal')} size="lg" className="w-full">
              Open My Dashboard
           </Button>
           <Button onClick={() => navigate('/editor/visual')} variant="outline" size="lg" className="w-full">
              Go to Visual Editor
           </Button>
        </div>
        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">StudioBuilder AI • Autonomous Engineering Firm</p>
      </div>
    </div>
  );
};

export default OnboardingSuccess;
