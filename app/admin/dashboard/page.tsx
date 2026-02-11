
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      {/* KPI Stats Grid - Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', val: '42', trend: '+5%', icon: 'rocket_launch', color: 'primary' },
          { label: 'MRR (USD)', val: '$128,500', trend: '+12.4%', icon: 'account_balance_wallet', color: 'secondary' },
          { label: 'Total Clients', val: '89', trend: 'Stable', icon: 'groups', color: 'slate-500' },
          { label: 'Avg. Completion', val: '14 Days', trend: '-2d', trendCol: 'emerald-500', icon: 'timer', color: 'amber-500' }
        ].map((kpi, i) => (
          <Card key={i} className="p-6 bg-[#111827]/50 border-white/5 rounded-2xl relative group hover:border-primary/20 transition-all shadow-xl">
             <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary`}>
                   <span className="material-icons-round text-xl">{kpi.icon}</span>
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-bold ${kpi.trendCol || (kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-slate-500')}`}>
                   {kpi.trend}
                </div>
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{kpi.label}</p>
             <h3 className="text-2xl font-black text-white">{kpi.val}</h3>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Column (Left/Center) */}
        <div className="lg:col-span-8 space-y-8">
           
           {/* Project Health Section */}
           <Card className="p-8 bg-[#111827]/50 border-white/5 rounded-2xl">
              <div className="flex justify-between items-center mb-10">
                 <div className="flex items-center gap-3">
                    <span className="material-icons-round text-primary text-xl">analytics</span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Project Health</h3>
                 </div>
                 <button className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2">
                    Full Report <span className="material-icons-round text-xs">open_in_new</span>
                 </button>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between px-4 gap-12">
                 {/* Donut Chart Visual */}
                 <div className="relative w-56 h-56">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="42" fill="transparent" stroke="#1e293b" strokeWidth="10" />
                       <circle cx="50" cy="50" r="42" fill="transparent" stroke="#2563EB" strokeWidth="10" strokeDasharray="263.8" strokeDashoffset="65.9" strokeLinecap="round" />
                       <circle cx="50" cy="50" r="42" fill="transparent" stroke="#7C3AED" strokeWidth="10" strokeDasharray="263.8" strokeDashoffset="210.1" strokeLinecap="round" />
                       <circle cx="50" cy="50" r="42" fill="transparent" stroke="#F59E0B" strokeWidth="10" strokeDasharray="263.8" strokeDashoffset="242.7" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <p className="text-4xl font-black text-white leading-none">42</p>
                       <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">Total Units</p>
                    </div>
                 </div>

                 {/* Indicators Legend */}
                 <div className="flex-1 space-y-6 min-w-[200px]">
                    {[
                      { label: 'On Track', val: '28 Projects', color: 'bg-primary' },
                      { label: 'At Risk', val: '10 Projects', color: 'bg-secondary' },
                      { label: 'Delayed', val: '4 Projects', color: 'bg-amber-500' }
                    ].map((item, i) => (
                       <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                             <span className="text-xs font-bold text-slate-400">{item.label}</span>
                          </div>
                          <span className="text-xs font-black text-white">{item.val}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </Card>

           {/* Team Velocity Section */}
           <Card className="p-8 bg-[#111827]/50 border-white/5 rounded-2xl">
              <div className="flex justify-between items-center mb-10">
                 <div className="flex items-center gap-3">
                    <span className="material-icons-round text-secondary text-xl">auto_graph</span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Team Velocity</h3>
                 </div>
                 <div className="bg-black/30 p-1 rounded-lg flex gap-1">
                    <button className="px-4 py-1.5 bg-slate-800 rounded-md text-[9px] font-bold uppercase text-white">Sprint</button>
                    <button className="px-4 py-1.5 text-[9px] font-bold uppercase text-slate-500 hover:text-white transition-all">Monthly</button>
                 </div>
              </div>

              <div className="h-48 flex items-end justify-between gap-3 px-2">
                 {[35, 65, 50, 85, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 group relative h-full flex flex-col justify-end">
                       <div 
                         className={`w-full rounded-lg transition-all duration-1000 ${i === 5 ? 'bg-primary shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-primary/20'}`} 
                         style={{ height: `${h}%` }}
                       ></div>
                    </div>
                 ))}
              </div>
           </Card>
        </div>

        {/* Sidebar Activity Column (Right) */}
        <div className="lg:col-span-4">
           <Card className="h-full p-8 bg-[#111827]/50 border-white/5 rounded-2xl flex flex-col">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-3">
                    <span className="material-icons-round text-primary animate-pulse text-lg">bolt</span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Activity Stream</h3>
                 </div>
                 <Badge variant="primary" className="bg-primary/5 text-[8px] px-2 animate-pulse">LIVE</Badge>
              </div>

              <div className="space-y-10 relative">
                 <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/5"></div>
                 
                 {[
                   { 
                     title: 'Client Signed Contract', 
                     time: '2m ago', 
                     desc: 'Global Tech Corp finalized the master service agreement for Q3.', 
                     user: 'Marcus J.', 
                     icon: 'description', 
                     color: 'emerald-500' 
                   },
                   { 
                     title: 'Deployment Success', 
                     time: '15m ago', 
                     desc: 'v2.4.0 - Core Engine was successfully pushed to production.', 
                     extra: 'Pipeline took 4.2 min',
                     icon: 'check_circle', 
                     color: 'primary' 
                   },
                   { 
                     title: 'New Project Initialized', 
                     time: '1h ago', 
                     desc: 'AI agent StudioBot-9 initialized "Internal CRM Bot".', 
                     tags: ['AI-DRIVEN', 'INTERNAL'],
                     icon: 'auto_awesome', 
                     color: 'secondary' 
                   },
                   { 
                     title: 'Resource Alert', 
                     time: '3h ago', 
                     desc: 'Storage limit reaching 92% on Node-West-02.', 
                     icon: 'warning', 
                     color: 'amber-500' 
                   }
                 ].map((act, i) => (
                    <div key={i} className="flex gap-6 relative z-10">
                       <div className={`w-10 h-10 rounded-xl bg-${act.color}/10 border border-${act.color}/20 flex items-center justify-center text-${act.color} shrink-0 shadow-lg`}>
                          <span className="material-icons-round text-lg">{act.icon}</span>
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-1">
                             <h5 className="text-xs font-bold text-white truncate">{act.title}</h5>
                             <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest shrink-0">{act.time}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed mb-3">{act.desc}</p>
                          
                          {act.user && (
                             <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full overflow-hidden">
                                   <img src={`https://picsum.photos/seed/${act.user}/40`} alt="User" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-600 uppercase">Managed by {act.user}</span>
                             </div>
                          )}

                          {act.extra && (
                             <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-black/30 rounded border border-white/5">
                                <span className="material-icons-round text-[10px] text-slate-600">schedule</span>
                                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{act.extra}</span>
                             </div>
                          )}

                          {act.tags && (
                             <div className="flex gap-2">
                                {act.tags.map(t => (
                                   <span key={t} className="text-[8px] font-bold text-primary border border-primary/20 bg-primary/5 px-1.5 py-0.5 rounded tracking-widest">{t}</span>
                                ))}
                             </div>
                          )}
                       </div>
                    </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
