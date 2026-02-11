
import React from 'react';

const AIToolsPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-8 space-y-8 overflow-y-auto custom-scrollbar bg-slate-100 dark:bg-background-dark">
      <div>
        <h1 className="text-3xl font-bold">AI Agent Hub</h1>
        <p className="text-slate-500">Orchestrate specialized autonomous agents for your engineering tasks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Architect Agent', desc: 'Designs high-level system diagrams and database schemas.', icon: 'architecture', status: 'IDLE' },
          { name: 'CodeRefactor Bot', desc: 'Scans source files for memory leaks and optimization opportunities.', icon: 'auto_fix_high', status: 'WORKING' },
          { name: 'Security Audit AI', desc: 'Performs deep vulnerability scans on your infrastructure scripts.', icon: 'shield_moon', status: 'IDLE' }
        ].map((agent, i) => (
          <div key={i} className="bg-white dark:bg-panel-dark border border-slate-200 dark:border-border-dark p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-8">
               <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                 <span className="material-icons-round text-3xl">{agent.icon}</span>
               </div>
               <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${agent.status === 'WORKING' ? 'bg-emerald-500 text-white animate-pulse' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`}>
                 {agent.status}
               </span>
            </div>
            <h3 className="text-xl font-bold mb-4">{agent.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{agent.desc}</p>
            <button className="w-full py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
               Deploy Agent
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl">
         <div className="flex items-center gap-4 mb-8">
           <span className="material-icons-round text-primary">analytics</span>
           <h3 className="font-bold text-white">Generation Console</h3>
         </div>
         <div className="font-mono text-xs space-y-2 text-emerald-500/80 max-h-48 overflow-y-auto custom-scrollbar">
           <p><span className="text-slate-500">[14:20:01]</span> ARCHITECT_AGENT: Received blueprint v1.4</p>
           <p><span className="text-slate-500">[14:20:02]</span> ARCHITECT_AGENT: Generating Prisma schemas...</p>
           <p><span className="text-slate-500">[14:20:05]</span> REFACTOR_BOT: Analyzing memory consumption on loop.ts</p>
           <p className="text-white animate-pulse"><span className="text-slate-500">[14:20:08]</span> REFACTOR_BOT: Applied optimization to Map() instance _</p>
         </div>
      </div>
    </div>
  );
};

export default AIToolsPage;
