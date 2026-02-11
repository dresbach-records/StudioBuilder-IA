
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectWizard } from '../../../../context/ProjectWizardContext';
import Input from '../../../../components/ui/Input';
import Button from '../../../../components/ui/Button';

const WizardStep1: React.FC = () => {
  const { data, updateData } = useProjectWizard();
  const navigate = useNavigate();

  const handleNext = () => {
    if (data.name && data.type) {
      navigate('/client/new-project/step-2');
    }
  };

  return (
    <div className="p-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight dark:text-white">Basic Information</h1>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Let's start with the core details of your project. This helps us tailor the next steps to your specific needs.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Input 
          label="Project Name"
          placeholder="e.g. My Awesome Startup"
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
        />

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Project Type</label>
          <select 
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/50 text-sm appearance-none"
            value={data.type}
            onChange={(e) => updateData({ type: e.target.value })}
          >
            <option value="">Select a type...</option>
            <option value="SaaS Platform">SaaS Platform</option>
            <option value="Mobile App">Mobile App</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Institutional Site">Institutional Site</option>
            <option value="Dashboard">Dashboard / CRM</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Main Objective</label>
          <textarea 
            placeholder="What do you want to achieve with this project?"
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none h-32"
            value={data.objective}
            onChange={(e) => updateData({ objective: e.target.value })}
          />
        </div>

        <Input 
          label="Target Audience"
          placeholder="e.g. Tech-savvy professionals aged 25-40"
          value={data.audience}
          onChange={(e) => updateData({ audience: e.target.value })}
        />

        <div className="grid grid-cols-2 gap-6">
           <Input 
             label="Estimated Budget"
             placeholder="$ 0.00"
             value={data.budget}
             onChange={(e) => updateData({ budget: e.target.value })}
           />
           <Input 
             label="Desired Deadline"
             type="date"
             value={data.deadline}
             onChange={(e) => updateData({ deadline: e.target.value })}
           />
        </div>
      </div>

      <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
         <button onClick={() => navigate('/client/portal')} className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
           <span className="material-icons-round">logout</span>
           Save & Exit
         </button>
         <Button 
           size="lg" 
           className="px-12 py-4 bg-secondary shadow-secondary/20"
           onClick={handleNext}
           disabled={!data.name || !data.type}
         >
           Next Step <span className="material-icons-round">arrow_forward</span>
         </Button>
      </div>
    </div>
  );
};

export default WizardStep1;
