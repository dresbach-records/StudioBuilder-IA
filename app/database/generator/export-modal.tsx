
import React, { useState } from 'react';
import Badge from '../../../components/ui/Badge';

interface ExportModalProps {
  onClose: () => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ onClose }) => {
  const [dialect, setDialect] = useState('postgresql');

  const pgSql = `-- StudioBuilder AI Generated Schema
-- Dialect: PostgreSQL | Generated on: 2023-11-15

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  is_public BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_users_email ON users(email);`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-[#05050a]/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl bg-[#0c0c14] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col h-[700px] animate-in zoom-in-95 duration-300">
        
        <div className="flex-1 flex overflow-hidden">
           {/* Modal Sidebar: Dialect Selection */}
           <aside className="w-80 border-r border-white/5 bg-black/40 p-8 flex flex-col shrink-0">
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-icons-round">description</span>
                 </div>
                 <h2 className="text-xl font-black text-white uppercase tracking-tighter">Export Schema</h2>
              </div>

              <div className="space-y-6">
                 <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-4">Target Dialect</h3>
                 
                 {[
                   { id: 'postgresql', name: 'PostgreSQL', desc: 'Standard-compliant, advanced data types and indexing.' },
                   { id: 'mysql', name: 'MySQL', desc: 'High performance, wide cloud compatibility & hosting.' },
                   { id: 'sqlite', name: 'SQLite', desc: 'Serverless, file-based portability for local dev.' }
                 ].map(opt => (
                    <div 
                      key={opt.id}
                      onClick={() => setDialect(opt.id)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer group ${dialect === opt.id ? 'border-primary bg-primary/5' : 'border-white/5 bg-white/5 hover:border-white/10'}`}
                    >
                       <div className="flex items-center gap-3 mb-2">
                          <span className={`material-icons-round text-lg ${dialect === opt.id ? 'text-primary' : 'text-slate-600'}`}>storage</span>
                          <h4 className={`text-sm font-black ${dialect === opt.id ? 'text-white' : 'text-slate-500'}`}>{opt.name}</h4>
                       </div>
                       <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{opt.desc}</p>
                    </div>
                 ))}
              </div>

              <div className="mt-auto pt-8 flex items-center gap-3 text-slate-600">
                 <span className="material-icons-round text-sm">folder</span>
                 <span className="text-[10px] font-mono tracking-tighter">studio-builder/tables/</span>
              </div>
           </aside>

           {/* Modal Content: Code Preview */}
           <main className="flex-1 flex flex-col bg-[#05050a] min-w-0">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/10">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Preview:</span>
                    <span className="text-xs font-black text-white italic tracking-tight">schema_pg.sql</span>
                    <Badge variant="primary" className="text-[8px] bg-primary/10 border-none px-2">READ ONLY</Badge>
                 </div>
                 <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors">
                       <span className="material-icons-round text-sm">content_copy</span>
                       Copy
                    </button>
                    <span className="material-icons-round text-slate-700 hover:text-rose-500 cursor-pointer transition-colors" onClick={onClose}>close</span>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-10 font-mono text-[11px] leading-relaxed bg-[#05050a]/40 text-slate-500">
                 <div className="flex gap-8">
                    <div className="text-slate-800 text-right select-none pr-6 border-r border-white/5 min-w-[32px]">
                       {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
                    </div>
                    <div className="flex-1 whitespace-pre">
                       {pgSql.split('\n').map((line, i) => {
                          const isComment = line.trim().startsWith('--');
                          const isTable = line.includes('CREATE TABLE');
                          return (
                             <div key={i} className={isComment ? 'text-slate-700 italic' : isTable ? 'text-white font-bold' : ''}>
                                {line.split(/(\bCREATE TABLE\b|\bCREATE INDEX\b|\bUUID\b|\bPRIMARY KEY\b|\bNOT NULL\b|\bTIMESTAMP\b)/).map((part, j) => (
                                   <span key={j} className={
                                      part === 'CREATE TABLE' || part === 'CREATE INDEX' ? 'text-primary' : 
                                      part === 'UUID' || part === 'TIMESTAMP' ? 'text-amber-500' : 
                                      part === 'PRIMARY KEY' || part === 'NOT NULL' ? 'text-indigo-400' : ''
                                   }>{part}</span>
                                ))}
                             </div>
                          );
                       })}
                    </div>
                 </div>
              </div>
           </main>
        </div>

        {/* Modal Footer (conforme imagem 1) */}
        <footer className="h-20 border-t border-white/5 bg-[#0c0c14] px-10 flex items-center justify-between shrink-0">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ready to export</span>
              </div>
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">~1.2 KB</span>
           </div>
           
           <div className="flex gap-4">
              <button onClick={onClose} className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all">Cancel</button>
              <button className="px-10 py-3 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:scale-105 transition-all flex items-center gap-3">
                 <span className="material-icons-round text-sm">download</span>
                 Download .sql
              </button>
           </div>
        </footer>
      </div>
    </div>
  );
};

export default ExportModal;
