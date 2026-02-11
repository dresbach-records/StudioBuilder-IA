
import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { useNavigate, useLocation } from 'react-router-dom';

const EngineeringLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#090b14] text-slate-300 selection:bg-primary/30 font-sans overflow-hidden">
      {/* Sidebar de Engenharia (Compacta por padrão) */}
      <Sidebar variant="admin" />

      <div className="flex-1 flex flex-col ml-20 lg:ml-64 relative overflow-hidden">
        {/* Engineering Top Bar */}
        <header className="h-14 border-b border-white/5 bg-[#0c111d] flex items-center justify-between px-6 shrink-0 z-50">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-black text-primary uppercase">
                <span className="material-icons-round text-sm">architecture</span>
                Engineering Node v4.0
             </div>
             <div className="h-4 w-px bg-white/10 mx-2"></div>
             <nav className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className={location.pathname === '/editor/visual' ? 'text-white' : 'hover:text-slate-300 cursor-pointer'}>Visual Editor</span>
                <span className="opacity-20">/</span>
                <span className={location.pathname === '/editor/code' ? 'text-white' : 'hover:text-slate-300 cursor-pointer'}>Code IDE</span>
             </nav>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-4 text-[9px] font-black uppercase text-slate-500">
                <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                   CPU: 14%
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                   RAM: 2.4GB
                </div>
             </div>
             <button className="px-4 py-1.5 bg-primary hover:bg-blue-600 text-white rounded-lg text-[10px] font-black shadow-lg transition-all">
                DEPLOY SYSTEM
             </button>
          </div>
        </header>

        {/* Viewport de Engenharia */}
        <main className="flex-1 overflow-hidden relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default EngineeringLayout;
