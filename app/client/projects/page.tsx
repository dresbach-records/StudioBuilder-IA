
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const ProjectsPage: React.FC = () => {
  const projects = [
    { title: 'Plataforma E-commerce V1', status: 'Em Desenvolvimento', progress: 65, delivery: '15 Jul' },
    { title: 'App Mobile Fitness', status: 'Concluído', progress: 100, delivery: 'Concluído' },
    { title: 'Dashboard Analytics', status: 'Planejamento', progress: 10, delivery: 'A definir' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meus Projetos</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Gerencie e acompanhe a execução técnica dos seus pedidos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <Card key={i} className="p-6">
             <div className="flex justify-between items-start mb-4">
                <Badge variant={proj.status === 'Concluído' ? 'success' : proj.status === 'Em Desenvolvimento' ? 'primary' : 'warning'}>
                   {proj.status}
                </Badge>
             </div>
             <h3 className="text-lg font-bold mb-4">{proj.title}</h3>
             <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
                   <span>Progresso</span>
                   <span>{proj.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                   <div 
                      className="h-full bg-primary transition-all duration-1000" 
                      style={{ width: `${proj.progress}%` }}
                   ></div>
                </div>
             </div>
             <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 dark:border-white/5">
                <span>Entrega Estimada</span>
                <span className="text-slate-900 dark:text-white">{proj.delivery}</span>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
