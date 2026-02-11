
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const DiffViewerPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Diff Viewer</h1>
          <p className="text-slate-500">Analise as alterações sugeridas pela IA antes da aprovação.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-lg text-sm font-bold">Rejeitar</button>
           <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg">Merge Changes</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[600px]">
        <Card className="flex flex-col overflow-hidden bg-rose-500/5 border-rose-500/20">
           <div className="p-3 border-b border-rose-500/20 text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10">Original Version</div>
           <pre className="flex-1 p-6 font-mono text-xs overflow-auto text-slate-500">
             {`export const UserProfile = () => {
  return (
    <div className="p-4 border">
      <h1>User Name</h1>
      <p>Bio description</p>
    </div>
  );
};`}
           </pre>
        </Card>
        <Card className="flex flex-col overflow-hidden bg-emerald-500/5 border-emerald-500/20">
           <div className="p-3 border-b border-emerald-500/20 text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10">AI Optimization</div>
           <pre className="flex-1 p-6 font-mono text-xs overflow-auto">
             {`export const UserProfile = ({ user }) => {
  // AI: Added props and responsive classes
  return (
    <div className="p-6 border rounded-2xl shadow-sm bg-white">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p className="text-slate-500">{user.bio}</p>
    </div>
  );
};`}
           </pre>
        </Card>
      </div>
    </div>
  );
};

export default DiffViewerPage;
