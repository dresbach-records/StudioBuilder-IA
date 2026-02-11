
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const GitHistory: React.FC = () => {
  const commits = [
    { hash: '8f2a1c', author: 'Architect Agent', msg: 'Refactored database schema for distributed locking', date: '2m ago', branch: 'main' },
    { hash: '4e9b7d', author: 'Alex Sterling', msg: 'Updated landing page hero typography', date: '14m ago', branch: 'feat/ui-revamp' },
    { hash: '2a6c8e', author: 'CodeRefactor Bot', msg: 'Optimized bundle size by tree-shaking unused icons', date: '1h ago', branch: 'main' },
    { hash: 'b3d5f1', author: 'Sarah Chen', msg: 'Implemented JWT token rotation logic', date: '3h ago', branch: 'security/auth-update' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Git Control</h1>
          <p className="text-slate-500">Unified view of autonomous and human contribution history.</p>
        </div>
        <div className="flex gap-2">
           <Badge variant="primary" className="px-4 py-2">Branch: main</Badge>
           <button className="p-2 bg-slate-100 dark:bg-white/5 rounded-lg"><span className="material-icons-round">refresh</span></button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="p-0 divide-y divide-slate-100 dark:divide-slate-800">
          {commits.map((commit, i) => (
            <div key={i} className="flex items-center gap-6 p-6 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex flex-col items-center gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                 <div className="w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{commit.msg}</span>
                  <Badge variant="ghost" className="font-mono">{commit.hash}</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                   <span className="flex items-center gap-1"><span className="material-icons-round text-sm">person</span> {commit.author}</span>
                   <span className="flex items-center gap-1"><span className="material-icons-round text-sm">account_tree</span> {commit.branch}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{commit.date}</p>
                <button className="text-[10px] font-bold text-primary hover:underline mt-1">VIEW DIFF</button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default GitHistory;
