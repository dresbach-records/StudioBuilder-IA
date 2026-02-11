
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const CRMPipeline: React.FC = () => {
  const columns = [
    { title: 'New Leads', color: 'bg-primary', count: 4 },
    { title: 'In Proposal', color: 'bg-amber-500', count: 2 },
    { title: 'Contracting', color: 'bg-purple-500', count: 3 },
    { title: 'Won', color: 'bg-emerald-500', count: 12 }
  ];

  const leads = [
    { id: 1, name: 'Acme Cloud Solution', val: '$14,000', stage: 'New Leads', tags: ['Enterprise', 'AWS'] },
    { id: 2, name: 'Digital Edge Studio', val: '$5,500', stage: 'In Proposal', tags: ['SaaS', 'SEO'] },
    { id: 3, name: 'Quantum Logistics', val: '$28,000', stage: 'Contracting', tags: ['Custom DB'] }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">CRM Pipeline</h1>
          <p className="text-slate-500">Track engineering sales and contract lifecycles.</p>
        </div>
        <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-icons-round">person_add</span> Add Lead
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 custom-scrollbar min-h-[600px]">
        {columns.map(col => (
          <div key={col.title} className="flex-1 min-w-[300px] space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${col.color}`}></span>
                <span className="text-sm font-bold">{col.title}</span>
              </div>
              <span className="text-xs font-bold text-slate-400">{col.count}</span>
            </div>
            <div className="space-y-4">
              {leads.filter(l => l.stage === col.title).map(lead => (
                <Card key={lead.id} className="p-4 hover:border-primary transition-all cursor-grab active:cursor-grabbing">
                  <h4 className="font-bold text-sm mb-2">{lead.name}</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-black text-primary">{lead.val}</span>
                    <span className="material-icons-round text-slate-300 text-sm">more_vert</span>
                  </div>
                  <div className="flex gap-2">
                    {lead.tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-white/5 rounded font-bold text-slate-500">{t}</span>)}
                  </div>
                </Card>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-2xl text-slate-400 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                 <span className="material-icons-round text-sm">add</span>
                 New Lead
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMPipeline;
