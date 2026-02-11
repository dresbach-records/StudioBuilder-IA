
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const InfrastructurePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-[1400px] mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-4 mb-2">
             <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30">
                <span className="material-icons-round text-3xl">terminal</span>
             </div>
             <div>
                <h1 className="text-3xl font-black text-white tracking-tight leading-none">Engineering Dashboard</h1>
                <p className="text-slate-500 font-medium text-sm mt-1">DevOps & Deployment Control • <span className="text-emerald-500 font-bold">Live Monitoring</span></p>
             </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-black/40 p-1 rounded-xl flex gap-1">
              <button className="px-6 py-2 bg-white/10 rounded-lg text-xs font-black text-white">Production</button>
              <button className="px-6 py-2 text-xs font-bold text-slate-500 hover:text-white transition-all">Staging</button>
           </div>
           <div className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Cluster: Hostinger-SaoPaulo-01</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'CPU Usage', val: '42%', trend: '-2%', icon: 'memory', color: 'primary' },
          { label: 'RAM (Allocated)', val: '8.4 GB', extra: '/ 16 GB', icon: 'speed', color: 'indigo-500' },
          { label: 'Avg. Latency', val: '24ms', trend: '+4ms', trendCol: 'rose-500', icon: 'timeline', color: 'emerald-500' },
          { label: 'Active Build', val: '#2,481', status: 'RUNNING', icon: 'sync', color: 'amber-500' }
        ].map((kpi, i) => (
          <div key={i} className="bg-[#141824] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group hover:border-primary/20 transition-all shadow-xl">
             <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 bg-${kpi.color}/10 rounded-2xl flex items-center justify-center text-${kpi.color} shadow-inner`}>
                   <span className="material-icons-round text-2xl">{kpi.icon}</span>
                </div>
                {kpi.trend && (
                   <div className={`flex items-center gap-1 text-[10px] font-black ${kpi.trendCol || 'text-emerald-500'}`}>
                      <span className="material-icons-round text-xs">{kpi.trend.startsWith('+') ? 'trending_up' : 'trending_down'}</span>
                      {kpi.trend}
                   </div>
                )}
                {kpi.status && (
                   <span className="px-3 py-1 bg-primary/20 text-primary text-[8px] font-black tracking-widest rounded-lg animate-pulse">{kpi.status}</span>
                )}
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{kpi.label}</p>
             <h3 className="text-3xl font-black text-white">{kpi.val} <span className="text-sm text-slate-600 font-bold">{kpi.extra}</span></h3>
             <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full bg-${kpi.color} w-[60%] opacity-50`}></div>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
           <Card className="bg-black border border-white/5 rounded-[40px] overflow-hidden shadow-2xl relative group">
              <div className="p-6 border-b border-white/5 bg-[#0c111d] flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                       <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase ml-4">bash — build-logs — studiobuilder-v2.481</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="material-icons-round text-slate-700 hover:text-white cursor-pointer transition-colors text-sm">content_copy</span>
                    <span className="material-icons-round text-slate-700 hover:text-white cursor-pointer transition-colors text-sm">fullscreen</span>
                 </div>
              </div>
              <div className="p-10 font-mono text-[11px] leading-relaxed max-h-[480px] overflow-y-auto custom-scrollbar bg-[#050505] text-slate-400">
                 <p className="flex gap-4"><span className="text-slate-700">[14:32:01]</span> <span className="text-primary font-bold">INFO</span> Initializing Docker build context...</p>
                 <p className="flex gap-4"><span className="text-slate-700">[14:32:05]</span> <span className="text-primary font-bold">INFO</span> Loading env configuration from Vault</p>
                 <p className="flex gap-4"><span className="text-slate-700">[14:32:08]</span> <span className="text-emerald-500 font-bold">SUCCESS</span> Connection established to GitHub API</p>
                 <p className="mt-4 text-slate-600"># Step 1/14: FROM node:18-alpine AS builder</p>
                 <p className="text-slate-500">{ '---> 14c772392686' }</p>
                 <p className="text-slate-600"># Step 2/14: WORKDIR /app</p>
                 <p className="text-slate-600"># Step 3/14: COPY package.json yarn.lock ./</p>
                 <p className="text-slate-600"># Step 4/14: RUN yarn install --frozen-lockfile</p>
                 <p className="mt-2 pl-4 text-slate-700">yarn install v1.22.19</p>
                 <p className="pl-4 text-slate-700">[1/4] Resolving packages...</p>
                 <p className="pl-4 text-slate-700">[2/4] Fetching packages...</p>
                 <p className="pl-4 text-slate-700">[3/4] Linking dependencies...</p>
                 <p className="flex gap-4 mt-4"><span className="text-slate-700">[14:34:10]</span> <span className="text-primary font-bold">INFO</span> Bundling assets with Vite...</p>
                 <p className="text-emerald-500 pl-4">✓ 1,248 modules transformed.</p>
                 <p className="text-slate-500 pl-4">dist/index.html 0.45 kB | gzip: 0.28 kB</p>
                 <p className="text-slate-500 pl-4">dist/assets/index-D5-Cj_F-.css 42.12 kB | gzip: 11.23 kB</p>
                 <p className="text-slate-500 pl-4">dist/assets/index-By9_m0K8.js 845.12 kB | gzip: 254.10 kB</p>
                 <p className="flex gap-4 mt-6 animate-pulse"><span className="text-slate-700">[14:34:45]</span> <span className="text-emerald-500 font-bold uppercase">SUCCESS</span> Build completed in 164s</p>
              </div>
           </Card>

           <Card className="p-10 bg-[#141824] border border-white/5 rounded-[40px] shadow-2xl relative overflow-hidden">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">Pipeline Visualization</h3>
              <div className="flex items-center justify-between relative">
                 <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 z-0"></div>
                 <div className="absolute top-1/2 left-0 h-[2px] bg-emerald-500 -translate-y-1/2 z-0 w-1/2 transition-all duration-1000"></div>
                 
                 {[
                   { label: 'Build', icon: 'code', status: 'done', col: 'emerald-500' },
                   { label: 'Testing', icon: 'fact_check', status: 'done', col: 'emerald-500' },
                   { label: 'Deploying', icon: 'cloud_upload', status: 'active', col: 'primary' },
                   { label: 'Production', icon: 'rocket_launch', status: 'idle', col: 'slate-700' }
                 ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center group">
                       <div className={`w-14 h-14 rounded-full border-4 border-[#141824] flex items-center justify-center shadow-2xl transition-all ${
                         step.status === 'done' ? 'bg-emerald-500 text-white' : 
                         step.status === 'active' ? 'bg-primary text-white scale-125 animate-pulse shadow-primary/40' : 
                         'bg-slate-800 text-slate-500'
                       }`}>
                          <span className="material-icons-round">{step.icon}</span>
                       </div>
                       <span className={`text-[10px] font-black uppercase mt-4 tracking-widest ${step.status === 'active' ? 'text-white' : 'text-slate-600'}`}>{step.label}</span>
                    </div>
                 ))}
              </div>
           </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <Card className="p-8 bg-[#141824] border border-white/5 rounded-[40px] space-y-10">
              <div className="flex items-center gap-3 text-primary">
                 <span className="material-icons-round">bolt</span>
                 <h4 className="text-sm font-black uppercase tracking-widest">Quick Actions</h4>
              </div>
              <button className="w-full py-5 bg-primary hover:bg-blue-600 text-white rounded-[24px] font-black text-sm shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 transition-all group active:scale-95">
                 <span className="material-icons-round group-hover:rotate-180 transition-transform">refresh</span>
                 Rebuild System
              </button>
              <div className="grid grid-cols-2 gap-4">
                 <button className="py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons-round text-sm">history</span> Rollback
                 </button>
                 <button className="py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons-round text-sm">key</span> Env Vars
                 </button>
              </div>
           </Card>

           <Card className="p-8 bg-[#141824] border border-white/5 rounded-[40px] space-y-6">
              <div className="flex items-center gap-3 text-amber-500">
                 <span className="material-icons-round">verified_user</span>
                 <h4 className="text-sm font-black uppercase tracking-widest">Security & Health</h4>
              </div>
              <div className="space-y-4">
                 <div className="p-4 bg-black/40 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <span className="material-icons-round text-emerald-500">verified</span>
                       <div>
                          <p className="text-xs font-bold text-white">SSL Certificate</p>
                          <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest">Expires in 284 days</p>
                       </div>
                    </div>
                    <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Valid</span>
                 </div>
                 <div className="p-4 bg-black/40 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <span className="material-icons-round text-primary">security</span>
                       <div>
                          <p className="text-xs font-bold text-white">Cloud Firewall</p>
                          <p className="text-[8px] text-slate-600 font-black uppercase tracking-widest">12 Rules Active</p>
                       </div>
                    </div>
                    <div className="w-10 h-5 bg-primary/20 rounded-full p-1 flex items-center justify-end">
                       <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                 </div>
              </div>
           </Card>

           <Card className="p-8 bg-[#141824] border border-white/5 rounded-[40px] space-y-8">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-3 text-slate-500">
                    <span className="material-icons-round">account_tree</span>
                    <h4 className="text-sm font-black uppercase tracking-widest">Recent Commits</h4>
                 </div>
                 <button className="text-[9px] font-black uppercase text-primary tracking-widest hover:underline">View Repo</button>
              </div>
              <div className="space-y-6">
                 {[
                   { user: 'marcusdev', msg: 'feat: add distributed tracing for worker...', hash: '#4a1c3f2' },
                   { user: 'sarah.eng', msg: 'fix: memory leak in telemetry-collector', hash: '#9b2d1e1' },
                   { user: 'alex_infra', msg: 'docs: update api reference for v2.4', hash: '#c22f89a' }
                 ].map((commit, i) => (
                   <div key={i} className="space-y-2 group cursor-pointer">
                      <p className="text-[11px] font-bold text-white leading-relaxed group-hover:text-primary transition-colors">{commit.msg}</p>
                      <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-700">
                         <span className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-slate-800 border border-white/5"></div>
                            @{commit.user}
                         </span>
                         <span>{commit.hash}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>

      <footer className="pt-24 pb-8 text-center space-y-2 opacity-30">
         <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">StudioBuilder AI Infrastructure Management v4.2.0-stable | © 2024 Engineering Team</p>
      </footer>
    </div>
  );
};

export default InfrastructurePage;
