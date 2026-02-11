
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectWizard } from '../../../../context/ProjectWizardContext';
import Button from '../../../../components/ui/Button';

const WizardReview: React.FC = () => {
  const { data, submitProject } = useProjectWizard();
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = async () => {
    if (!confirmed) return;
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(r => setTimeout(r, 2000));
    const projectId = submitProject();
    navigate(`/client/portal/${projectId}`);
  };

  return (
    <div className="bg-[#0c0a1d] text-white">
      <div className="p-12 space-y-12">
        <div className="flex justify-between items-center">
           <span className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-80">PASSO 5 DE 5</span>
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Concluindo sua visão</span>
        </div>

        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-black">Revisão Final</h1>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">Tudo pronto! Revise os detalhes do seu briefing abaixo. Esta é a base que nossa IA usará para construir a estrutura do seu projeto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative group">
              <div className="absolute top-4 right-4 text-slate-600 hover:text-primary cursor-pointer"><span className="material-icons-round text-sm">edit</span></div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-icons-round">info</span>
                 </div>
                 <div>
                    <h3 className="font-bold">Informações Básicas</h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black">Identidade do projeto</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Nome do Projeto</p>
                    <p className="font-bold">{data.name}</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Indústria</p>
                    <p className="font-bold">{data.type}</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Cronograma</p>
                    <p className="text-primary font-bold">Urgente (4-6 semanas)</p>
                 </div>
              </div>
           </div>

           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative group">
              <div className="absolute top-4 right-4 text-slate-600 hover:text-primary cursor-pointer"><span className="material-icons-round text-sm">edit</span></div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-icons-round">sensors</span>
                 </div>
                 <div>
                    <h3 className="font-bold">Escopo & Objetivos</h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black">Funcionalidades e metas</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Público Alvo</p>
                    <p className="font-bold">{data.audience}</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Funcionalidades Chave</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                       {data.structure.slice(0, 3).map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-slate-400">{s}</span>)}
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative group">
              <div className="absolute top-4 right-4 text-slate-600 hover:text-primary cursor-pointer"><span className="material-icons-round text-sm">edit</span></div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-icons-round">attach_file</span>
                 </div>
                 <div>
                    <h3 className="font-bold">Arquivos & Ativos</h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black">Documentação anexada</p>
                 </div>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="material-icons-round text-slate-500">description</span>
                    <div className="flex-1 min-w-0">
                       <p className="text-xs font-bold truncate">branding_guidelines.pdf</p>
                       <p className="text-[9px] text-slate-500 uppercase">2.4 MB</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="material-icons-round text-slate-500">image</span>
                    <div className="flex-1 min-w-0">
                       <p className="text-xs font-bold truncate">wireframes_final.png</p>
                       <p className="text-[9px] text-slate-500 uppercase">8.1 MB</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative group">
              <div className="absolute top-4 right-4 text-slate-600 hover:text-primary cursor-pointer"><span className="material-icons-round text-sm">edit</span></div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-icons-round">architecture</span>
                 </div>
                 <div>
                    <h3 className="font-bold">Estrutura & Tech</h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black">Preferências técnicas</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Arquitetura</p>
                    <p className="font-bold">Microserviços escaláveis</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500 mb-1">Stack Preferencial</p>
                    <p className="italic font-medium">Next.js, Tailwind CSS, Node.js</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-12 bg-primary/5 border border-primary/20 rounded-[40px] flex flex-col items-center text-center space-y-8">
           <label className="flex items-center gap-4 cursor-pointer group">
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${confirmed ? 'bg-primary border-primary shadow-lg shadow-primary/30' : 'border-white/10'}`}>
                 {confirmed && <span className="material-icons-round text-white text-sm font-black">check</span>}
              </div>
              <input type="checkbox" className="hidden" checked={confirmed} onChange={() => setConfirmed(!confirmed)} />
              <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">Confirmo que as informações acima estão corretas e estou pronto para iniciar.</span>
           </label>

           <div className="flex items-center gap-8 w-full max-w-lg">
              <Button 
                size="lg" 
                className="flex-1 py-5 bg-primary shadow-2xl shadow-primary/20 text-lg group"
                disabled={!confirmed || isSubmitting}
                onClick={handleFinish}
              >
                {isSubmitting ? (
                   <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>CONCLUIR PROJETO <span className="material-icons-round group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2">rocket_launch</span></>
                )}
              </Button>
              <button className="text-sm font-bold text-slate-500 hover:text-white transition-colors">Salvar Rascunho</button>
           </div>
           
           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
              <span className="material-icons-round text-[10px]">shield</span>
              PROCESSAMENTO SEGURO VIA STUDIOBUILDER CLOUD ENGINE
           </div>
        </div>

        <div className="pt-8 text-center">
           <button onClick={() => navigate('/client/new-project/step-4')} className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">Sair do Wizard</button>
        </div>
      </div>
    </div>
  );
};

export default WizardReview;
