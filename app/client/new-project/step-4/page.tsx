
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectWizard } from '../../../../context/ProjectWizardContext';
import Button from '../../../../components/ui/Button';

const WizardStep4: React.FC = () => {
  const { data, updateData } = useProjectWizard();
  const navigate = useNavigate();

  const options = [
    { id: 'Home', icon: 'home' },
    { id: 'Sobre', icon: 'info' },
    { id: 'Serviços', icon: 'design_services' },
    { id: 'Blog', icon: 'article' },
    { id: 'Contato', icon: 'alternate_email' },
    { id: 'Área Restrita', icon: 'lock' },
    { id: 'Loja Virtual', icon: 'shopping_cart' },
    { id: 'Integração WhatsApp', icon: 'chat' },
    { id: 'Pagamentos Online', icon: 'payments' },
    { id: 'Dashboard Admin', icon: 'admin_panel_settings' },
  ];

  const toggle = (id: string) => {
    const current = new Set(data.structure);
    if (current.has(id)) current.delete(id);
    else current.add(id);
    updateData({ structure: Array.from(current) });
  };

  return (
    <div className="p-12 space-y-12">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-black tracking-tight dark:text-white">Project Structure</h1>
        <p className="text-slate-500 dark:text-slate-400">Select the core pages and functional modules that our AI engine will architect for your workspace.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {options.map(opt => (
          <div 
            key={opt.id}
            onClick={() => toggle(opt.id)}
            className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-4 cursor-pointer transition-all ${
              data.structure.includes(opt.id) 
              ? 'border-primary bg-primary/5 ring-4 ring-primary/5' 
              : 'border-slate-100 dark:border-white/5 hover:border-slate-200'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              data.structure.includes(opt.id) ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
            }`}>
               <span className="material-icons-round">{opt.icon}</span>
            </div>
            <span className="text-xs font-bold text-center">{opt.id}</span>
          </div>
        ))}
      </div>

      <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
         <button onClick={() => navigate('/client/new-project/step-3')} className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
            <span className="material-icons-round">arrow_back</span>
            Back
         </button>
         <Button 
           size="lg" 
           className="px-12 py-4 bg-primary shadow-primary/20"
           onClick={() => navigate('/client/new-project/review')}
           disabled={data.structure.length === 0}
         >
           Final Review <span className="material-icons-round">arrow_forward</span>
         </Button>
      </div>
    </div>
  );
};

export default WizardStep4;
