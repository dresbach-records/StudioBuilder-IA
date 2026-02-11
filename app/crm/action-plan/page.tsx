
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const ActionPlanPage: React.FC = () => {
  const tasks = [
    { title: 'Market Research', status: 'Done', priority: 'High' },
    { title: 'Tech Stack Definition', status: 'In Progress', priority: 'High' },
    { title: 'UI/UX Mockups', status: 'Todo', priority: 'Med' },
    { title: 'Infrastructure Setup', status: 'Todo', priority: 'Low' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Project Action Plan</h1>
        <p className="text-slate-500">Cronograma estratégico gerado pela IA para execução do projeto.</p>
      </div>

      <Card className="p-0">
        <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
           <h4 className="font-bold">Sprint Roadmap 1.0</h4>
           <Badge variant="success">Active Sprint</Badge>
        </div>
        <div className="p-6 space-y-4">
           {tasks.map((task, i) => (
             <div key={i} className="flex items-center gap-4 p-4 border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                <div className={`w-3 h-3 rounded-full ${task.status === 'Done' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                <div className="flex-1">
                   <p className="text-sm font-bold">{task.title}</p>
                   <p className="text-[10px] text-slate-500 uppercase font-black">{task.status}</p>
                </div>
                <Badge variant={task.priority === 'High' ? 'danger' : 'ghost'}>{task.priority}</Badge>
             </div>
           ))}
        </div>
      </Card>
    </div>
  );
};

export default ActionPlanPage;
