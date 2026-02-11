
import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const GlobalSettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Branding');

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-[1400px] mx-auto pb-12">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-white tracking-tight">Global Workspace Settings</h1>
          <p className="text-slate-500 font-medium">Manage enterprise branding, secure API connections, and domain routing for your platform instance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/10 transition-all">Discard</button>
          <button className="px-8 py-2.5 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all">Save Changes</button>
        </div>
      </div>

      <div className="flex gap-10 border-b border-white/5 pb-0">
        {['Branding', 'APIs & Integrations', 'System Domains', 'Security Policy'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold transition-all border-b-2 ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Brand Identity Section */}
          <Card className="p-10 bg-[#141824] border border-white/5 rounded-[32px] space-y-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-icons-round">palette</span>
               </div>
               <h3 className="text-xl font-bold text-white">Brand Identity</h3>
            </div>

            <div className="grid grid-cols-2 gap-10">
               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Workspace Name</label>
                     <input type="text" defaultValue="StudioBuilder Enterprise" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Support Email</label>
                     <input type="email" defaultValue="ops@studiobuilder.ai" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/50 outline-none" />
                  </div>
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Platform Logo</label>
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 bg-primary/10 border-2 border-dashed border-primary/30 rounded-2xl flex items-center justify-center text-primary">
                        <span className="material-icons-round text-3xl">architecture</span>
                     </div>
                     <div className="space-y-2">
                        <button className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase rounded-lg hover:bg-primary hover:text-white transition-all">Change Logo</button>
                        <p className="text-[9px] text-slate-600 leading-relaxed">Recommended: SVG or PNG, 512×512px</p>
                     </div>
                  </div>
               </div>
            </div>
          </Card>

          {/* Visual Theme Section */}
          <Card className="p-10 bg-[#141824] border border-white/5 rounded-[32px] space-y-8">
            <h3 className="text-xl font-bold text-white">Visual Theme</h3>
            <div className="grid grid-cols-3 gap-8">
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Primary Color</label>
                  <div className="flex items-center gap-3 p-3 bg-black/20 border border-white/10 rounded-xl">
                     <div className="w-10 h-10 bg-primary rounded-lg shadow-lg shadow-primary/20"></div>
                     <div>
                        <p className="text-xs font-bold text-white">#2B3BEE</p>
                        <p className="text-[9px] text-slate-600 font-black uppercase">Brand Primary</p>
                     </div>
                  </div>
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Accent Color</label>
                  <div className="flex items-center gap-3 p-3 bg-black/20 border border-white/10 rounded-xl">
                     <div className="w-10 h-10 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/20"></div>
                     <div>
                        <p className="text-xs font-bold text-white">#10B981</p>
                        <p className="text-[9px] text-slate-600 font-black uppercase">Success/Active</p>
                     </div>
                  </div>
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Interface Style</label>
                  <div className="flex gap-2">
                     <div className="flex-1 p-3 bg-primary/10 border-2 border-primary rounded-xl flex flex-col items-center gap-2 cursor-pointer shadow-xl shadow-primary/5">
                        <span className="material-icons-round text-primary">dark_mode</span>
                        <span className="text-[8px] font-black uppercase tracking-widest">Dark</span>
                     </div>
                     <div className="flex-1 p-3 bg-black/20 border-2 border-transparent rounded-xl flex flex-col items-center gap-2 cursor-pointer opacity-40 grayscale hover:opacity-100 transition-all">
                        <span className="material-icons-round">light_mode</span>
                        <span className="text-[8px] font-black uppercase tracking-widest">Light</span>
                     </div>
                  </div>
               </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-8">
             <Card className="p-8 bg-[#141824] border border-white/5 rounded-[32px] flex items-center justify-between group hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white"><span className="material-icons-round">hub</span></div>
                   <div>
                      <h4 className="font-bold text-white">GitHub Connector</h4>
                      <p className="text-[10px] text-emerald-500 font-black flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-500"></span> CONNECTED</p>
                   </div>
                </div>
                <span className="material-icons-round text-slate-700 group-hover:text-white transition-colors">settings</span>
             </Card>
             <Card className="p-8 bg-[#141824] border border-white/5 rounded-[32px] flex items-center justify-between group hover:border-amber-500/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500"><span className="material-icons-round">local_fire_department</span></div>
                   <div>
                      <h4 className="font-bold text-white">Firebase Backend</h4>
                      <p className="text-[10px] text-amber-500 font-black flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span> WARNING: LOW QUOTA</p>
                   </div>
                </div>
                <span className="material-icons-round text-slate-700 group-hover:text-white transition-colors">settings</span>
             </Card>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <Card className="p-8 bg-[#141824] border border-white/5 rounded-[32px] shadow-2xl space-y-8">
              <h3 className="text-sm font-black uppercase text-slate-500 tracking-[0.2em]">Live Preview</h3>
              <div className="aspect-[3/4] bg-black/60 rounded-2xl border border-white/5 p-6 relative overflow-hidden group">
                 <div className="absolute top-2 right-2 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                 </div>
                 <div className="mt-8 space-y-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-2 bg-white/5 rounded w-1/2"></div>
                    <div className="h-2 bg-white/5 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-4 mt-12">
                       <div className="aspect-video bg-primary/20 rounded-lg"></div>
                       <div className="aspect-video bg-white/5 rounded-lg"></div>
                    </div>
                    <div className="h-10 bg-primary rounded-xl w-full mt-10"></div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 flex items-end p-6">
                    <p className="text-[10px] text-slate-500 italic">This is how users will see your platform branding.</p>
                 </div>
              </div>
           </Card>

           <Card className="p-8 bg-primary/5 border border-primary/20 rounded-[32px] space-y-4">
              <div className="flex items-center gap-3 text-primary">
                 <span className="material-icons-round">info</span>
                 <h4 className="font-bold">Admin Note</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                 Branding changes are global and will affect all 24 sub-workspaces and the client-facing login portal. CDN propagation usually takes 2-5 minutes.
              </p>
           </Card>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5">
         <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-8">Integrations & Secure Keys</h3>
         <Card className="overflow-hidden bg-[#141824] border border-white/5 rounded-[32px]">
            <table className="w-full text-left">
               <thead className="bg-black/20 text-[9px] font-black text-slate-600 uppercase tracking-widest border-b border-white/5">
                  <tr>
                     <th className="px-10 py-6">Provider</th>
                     <th className="px-10 py-6">Secret Key Alias</th>
                     <th className="px-10 py-6">Status</th>
                     <th className="px-10 py-6 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5 text-sm">
                  {[
                    { name: 'GitHub Enterprise', type: 'OAuth 2.0', key: '••••••••••••••••••••••••••••••••••••••', status: 'Active' },
                    { name: 'Stripe Live', type: 'Payments', key: 'sk_live_51Mv9X2FhN0k3Lp8Q0w9r2z1s...', status: 'Active' },
                    { name: 'Gemini 3 Pro', type: 'LLM Gateway', key: '••••••••••••••••••••••••••••', status: 'Paused' }
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                       <td className="px-10 py-8">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-black/40 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                <span className="material-icons-round">{row.name.includes('Git') ? 'terminal' : row.name.includes('Stripe') ? 'payments' : 'auto_awesome'}</span>
                             </div>
                             <div>
                                <p className="font-bold text-white">{row.name}</p>
                                <p className="text-[10px] text-slate-600 font-black uppercase tracking-wider">{row.type}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-10 py-8">
                          <div className="flex items-center gap-4">
                             <span className="font-mono text-xs text-slate-500 bg-black/40 px-3 py-2 rounded-lg">{row.key}</span>
                             <span className="material-icons-round text-slate-700 text-sm hover:text-white cursor-pointer">visibility</span>
                             <span className="material-icons-round text-slate-700 text-sm hover:text-white cursor-pointer">content_copy</span>
                          </div>
                       </td>
                       <td className="px-10 py-8">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'}`}>
                             {row.status}
                          </span>
                       </td>
                       <td className="px-10 py-8 text-right">
                          <button className="material-icons-round text-slate-700 hover:text-rose-500 transition-colors">delete</button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
            <div className="p-8 border-t border-white/5 flex justify-center">
               <button className="flex items-center gap-2 text-slate-500 hover:text-primary font-black text-[10px] uppercase tracking-widest transition-all">
                  <span className="material-icons-round">add</span>
                  Add Integration
               </button>
            </div>
         </Card>
      </div>
    </div>
  );
};

export default GlobalSettingsPage;
