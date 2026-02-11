
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface TopbarProps {
  isEditor?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ isEditor }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const pathParts = location.pathname.split('/').filter(Boolean);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={`h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-20 ${isEditor ? '' : 'sticky top-0'}`}>
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="material-icons-round text-sm">lock</span>
          {pathParts.map((part, i) => (
            <React.Fragment key={part}>
              <span className="capitalize">{part.replace('-', ' ')}</span>
              {i < pathParts.length - 1 && <span className="material-icons-round text-[10px]">chevron_right</span>}
            </React.Fragment>
          ))}
        </div>
        {!isEditor && (
          <div className="relative w-full max-w-md hidden sm:block">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input 
              type="text" 
              placeholder="Buscar projetos..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isEditor && (
          <div className="flex items-center gap-1 bg-primary/10 p-1 rounded-lg mr-4">
            <button className="p-1.5 rounded bg-primary text-white shadow-sm">
              <span className="material-icons-round text-sm">desktop_windows</span>
            </button>
            <button className="p-1.5 rounded text-slate-500 hover:text-primary">
              <span className="material-icons-round text-sm">smartphone</span>
            </button>
          </div>
        )}
        
        <button className="p-2 text-slate-400 hover:text-primary relative">
          <span className="material-icons-round">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 dark:border-border-dark"></div>
        
        <div className="group relative flex items-center gap-3 cursor-pointer">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold leading-none">{user?.name || 'Usuário Visitante'}</p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-tighter">{user?.role || 'Nível Gratuito'}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 overflow-hidden ring-2 ring-transparent group-hover:ring-primary/30 transition-all">
            <img 
              src={user?.avatar || "https://picsum.photos/seed/user/200/200"} 
              alt="Perfil" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Menu Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-panel-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all p-2 z-50">
            <button onClick={() => navigate('/client/portal')} className="w-full text-left px-4 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg flex items-center gap-2">
              <span className="material-icons-round text-sm">person</span> Perfil
            </button>
            <button onClick={() => navigate('/admin/dashboard')} className="w-full text-left px-4 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg flex items-center gap-2">
              <span className="material-icons-round text-sm">admin_panel_settings</span> Painel Admin
            </button>
            <div className="my-1 border-t border-slate-100 dark:border-border-dark"></div>
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-xs font-bold text-rose-500 hover:bg-rose-500/10 rounded-lg flex items-center gap-2">
              <span className="material-icons-round text-sm">logout</span> Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
