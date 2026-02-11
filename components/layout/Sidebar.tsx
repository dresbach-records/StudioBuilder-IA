
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

interface SidebarProps {
  variant: 'client' | 'admin';
}

interface SidebarLink {
  to: string;
  icon: string;
  label: string;
  badge?: string;
  color?: string;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ variant }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const sections: SidebarSection[] = [
    {
      title: 'CORE',
      links: [
        { to: '/admin/dashboard', icon: 'grid_view', label: 'Dashboard' },
        { to: '/editor/conversational', icon: 'chat_bubble_outline', label: 'Planning Chat' },
      ]
    },
    {
      title: 'WORKSPACE',
      links: [
        { to: '/editor/visual', icon: 'dashboard_customize', label: 'Visual Editor' },
        { to: '/editor/mapper', icon: 'account_tree', label: 'Visual Mapper' },
        { to: '/editor/inspect', icon: 'visibility', label: 'Live Inspector', badge: 'LIVE', color: 'text-emerald-400' },
        { to: '/editor/code', icon: 'terminal', label: 'AI Code IDE', badge: 'BETA' },
        { to: '/seo/generator', icon: 'search', label: 'SEO Generator', badge: 'NEW', color: 'text-amber-400' },
        { to: '/editor/files', icon: 'folder_open', label: 'Assets Manager' },
      ]
    },
    {
      title: 'ENGINEERING',
      links: [
        { to: '/database/generator', icon: 'storage', label: 'DB Modeling', badge: 'SQL', color: 'text-primary' },
        { to: '/admin/infrastructure', icon: 'cloud_queue', label: 'DevOps & Deploy' },
        { to: '/admin/audit', icon: 'query_stats', label: 'System Logs' },
      ]
    },
    {
      title: 'BUSINESS',
      links: [
        { to: '/crm/pipeline', icon: 'featured_play_list', label: 'CRM Pipeline' },
        { to: '/crm/proposals', icon: 'architecture', label: 'Proposals & Contracts' },
        { to: '/admin/financial', icon: 'payments', label: 'Financial Reports' },
      ]
    }
  ];

  return (
    <aside className="w-20 lg:w-64 border-r border-white/5 bg-[#090b14] h-screen fixed top-0 left-0 flex flex-col z-30 transition-all overflow-hidden font-sans">
      
      {/* Search Module */}
      <div className="p-4 pt-6">
        <div className="relative group">
          <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
          <input 
            type="text" 
            placeholder="Search modules..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-12 text-xs text-slate-300 outline-none focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-6 pb-6">
        
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="px-4 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">{section.title}</h3>
            {section.links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all relative group ${
                    isActive 
                    ? 'bg-primary/20 text-white border-l-4 border-primary shadow-lg shadow-primary/10' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span className={`material-icons-round text-lg shrink-0 ${location.pathname === link.to ? 'text-primary' : link.color || 'text-slate-500 group-hover:text-slate-300'}`}>
                  {link.icon}
                </span>
                <span className="hidden lg:block text-xs font-bold tracking-tight">{link.label}</span>
                {link.badge && (
                  <span className={`ml-auto hidden lg:block px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest border ${link.badge === 'LIVE' ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/20' : 'bg-primary/20 text-primary border-primary/20'}`}>
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}

            {section.title === 'CORE' && (
               <div className="px-2 py-4">
                  <button 
                    onClick={() => navigate('/client/new-project/step-1')}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary hover:bg-blue-600 text-white rounded-xl text-xs font-black shadow-xl shadow-primary/30 transition-all active:scale-95 group"
                  >
                    <span className="material-icons-round text-lg group-hover:rotate-90 transition-transform">add_box</span>
                    <span className="hidden lg:block">Create New App</span>
                  </button>
               </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Profile */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-3 p-2 hover:bg-white/5 rounded-2xl transition-all group">
          <div className="w-10 h-10 rounded-xl bg-slate-800 overflow-hidden shrink-0 border border-white/10 relative">
            <img src="https://picsum.photos/seed/sterling/100/100" alt="Alex Sterling" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#090b14] rounded-full"></div>
          </div>
          <div className="hidden lg:block text-left flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate leading-none mb-1">Alex Sterling</p>
            <p className="text-[10px] text-slate-500 font-medium truncate uppercase tracking-widest">Enterprise Studio</p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
