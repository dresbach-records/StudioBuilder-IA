
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const ClientPortal: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('sb_projects') || '[]');
    setProjects(saved);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Central de Projetos</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Acompanhe o status e a evolução dos seus serviços contratados.</p>
        </div>
        <div className="flex gap-4">
           <Button 
             variant="outline" 
             onClick={() => navigate('/client/support')}
             icon="support_agent"
           >
             Suporte
           </Button>
           <Button 
             onClick={() => navigate('/client/new-project/step-1')}
             className="bg-primary text-white shadow-lg shadow-primary/20"
             icon="add"
           >
             Novo Projeto
           </Button>
        </div>
      </div>

      {projects.length === 0 ? (
        <Card className="p-16 text-center space-y-6">
           <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <span className="material-icons-round text-4xl">folder_open</span>
           </div>
           <div>
              <h3 className="text-xl font-bold">Nenhum projeto encontrado</h3>
              <p className="text-slate-500 max-w-sm mx-auto mt-2">Você ainda não tem projetos ativos. Clique no botão acima para iniciar seu primeiro briefing guiado por IA.</p>
           </div>
           <Button onClick={() => navigate('/client/new-project/step-1')} size="lg">Começar Agora</Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <Card key={proj.id} className="p-6 hover:border-primary transition-all group">
               <div className="flex justify-between items-start mb-4">
                  <Badge variant={proj.status === 'Concluído' ? 'success' : proj.status === 'Em Análise' ? 'primary' : 'warning'}>
                     {proj.status}
                  </Badge>
                  <span className="text-xs font-bold text-slate-400">{new Date(proj.createdAt).toLocaleDateString()}</span>
               </div>
               <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{proj.name}</h3>
               <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
                     <span>Progresso</span>
                     <span>{proj.progress || 10}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                     <div 
                        className="h-full bg-primary transition-all duration-1000" 
                        style={{ width: `${proj.progress || 10}%` }}
                     ></div>
                  </div>
               </div>
               <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link to={`/client/portal/${proj.id}`} className="text-primary text-xs font-bold hover:underline flex items-center justify-between">
                     Ver Painel do Projeto
                     <span className="material-icons-round text-sm">arrow_forward</span>
                  </Link>
               </div>
            </Card>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <Card className="lg:col-span-8 p-6">
            <h2 className="font-bold mb-6 flex items-center gap-2">
               <span className="material-icons-round text-primary">receipt_long</span>
               Faturas Pendentes
            </h2>
            <div className="space-y-4">
               {[
                 { id: '#8821', val: 'R$ 2.450,00', date: 'Vence em 2 dias', status: 'Pendente' },
                 { id: '#8794', val: 'R$ 150,00', date: 'Pago em 05/06', status: 'Pago' }
               ].map((invoice, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-white/5">
                    <div className="flex items-center gap-4">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center ${invoice.status === 'Pago' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                          <span className="material-icons-round text-sm">{invoice.status === 'Pago' ? 'check' : 'schedule'}</span>
                       </div>
                       <div>
                          <p className="text-sm font-bold">Fatura {invoice.id}</p>
                          <p className="text-xs text-slate-500">{invoice.date}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-bold">{invoice.val}</p>
                       {invoice.status === 'Pendente' && <button className="text-[10px] text-primary font-bold hover:underline">Pagar Agora</button>}
                    </div>
                 </div>
               ))}
            </div>
         </Card>

         <Card className="lg:col-span-4 p-6 bg-slate-900 text-white border-none shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
               <span className="material-icons-round text-primary">dns</span>
               <h3 className="font-bold uppercase tracking-widest text-[10px]">Infraestrutura Ativa</h3>
            </div>
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Node Cluster Scale</span>
                  <Badge variant="success">Online</Badge>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">SSL Automático</span>
                  <Badge variant="success">Ativo</Badge>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Backups S3</span>
                  <Badge variant="success">OK</Badge>
               </div>
               <button onClick={() => navigate('/client/hosting')} className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-xs transition-all uppercase tracking-widest">
                  Gerenciar Infra
               </button>
            </div>
         </Card>
      </div>
    </div>
  );
};

export default ClientPortal;
