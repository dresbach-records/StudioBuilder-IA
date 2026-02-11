
import React, { useState } from 'react';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const SiteMapper: React.FC = () => {
  const [activePage, setActivePage] = useState('index.html');
  const [zoom, setZoom] = useState(85);

  const pages = [
    { name: 'index.html', active: true, root: true },
    { name: 'about.html', active: false },
    { name: 'services.html', active: false },
    { name: 'contact.html', active: false, warning: true },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#050810] text-slate-300 font-sans flex flex-col overflow-hidden">
      
      {/* 1. MAPPER HEADER */}
      <header className="h-16 border-b border-white/5 bg-[#0c111d] flex items-center justify-between px-6 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
            <span className="material-icons-round text-white text-sm">architecture</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black text-white uppercase tracking-tight">StudioBuilder AI</span>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none">Project: Acme_Corp_Revamp</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 mr-4">
              <button className="px-5 py-1.5 rounded-lg text-[10px] font-black uppercase bg-white/10 text-white shadow-lg transition-all">Mapper</button>
              <button className="px-5 py-1.5 rounded-lg text-[10px] font-black uppercase text-slate-500 hover:text-slate-300 transition-all">Editor</button>
           </div>
           
           <div className="flex items-center gap-3 px-4 py-1.5 border-l border-white/5">
              <span className="material-icons-round text-slate-500 text-sm cursor-pointer hover:text-white">search</span>
              <span className="text-[10px] font-black text-slate-300">{zoom}%</span>
              <span className="material-icons-round text-slate-500 text-sm cursor-pointer hover:text-white">zoom_in</span>
           </div>

           <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-black shadow-xl shadow-primary/30 hover:scale-105 transition-all uppercase tracking-widest ml-4">
              <span className="material-icons-round text-sm">play_arrow</span>
              Live Preview
           </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. LEFT SIDEBAR (PAGES & COMPONENTS) */}
        <aside className="w-64 border-r border-white/5 bg-[#0c111d] flex flex-col shrink-0">
           <div className="p-6">
              <div className="relative group">
                 <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-sm">search</span>
                 <input type="text" placeholder="Search pages..." className="w-full bg-black/40 border border-white/5 rounded-xl py-2 pl-9 pr-4 text-[10px] outline-none focus:border-primary/40" />
              </div>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-8">
              <div>
                 <div className="px-4 flex justify-between items-center mb-4">
                    <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Pages</h3>
                    <span className="material-icons-round text-sm text-slate-600 hover:text-white cursor-pointer">add</span>
                 </div>
                 <div className="space-y-1">
                    {pages.map(page => (
                       <div key={page.name} className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer group transition-all ${page.active ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:bg-white/5'}`}>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-bold font-mono opacity-40 uppercase">html</span>
                             <span className="text-xs font-bold">{page.name}</span>
                          </div>
                          {page.warning && <span className="material-icons-round text-rose-500 text-xs">report_problem</span>}
                       </div>
                    ))}
                 </div>
              </div>

              <div>
                 <div className="px-4 mb-4">
                    <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Components</h3>
                 </div>
                 <div className="space-y-1">
                    {['Navbar.tsx', 'Footer.tsx'].map(comp => (
                       <div key={comp} className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
                          <span className="material-icons-round text-sm opacity-40">widgets</span>
                          <span className="text-xs font-bold">{comp}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* User Profile Info (Bottom Left) */}
           <div className="p-4 border-t border-white/5">
              <div className="flex items-center gap-3 p-2 bg-white/5 rounded-2xl border border-white/5 shadow-inner">
                 <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-xs font-black">JD</div>
                 <div>
                    <p className="text-xs font-bold text-white leading-none mb-1">John Designer</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Pro Account</p>
                 </div>
                 <span className="material-icons-round text-slate-600 text-sm ml-auto">settings</span>
              </div>
           </div>
        </aside>

        {/* 3. MAIN VISUAL CANVAS (NODE ENGINE) */}
        <main className="flex-1 bg-[#090b14] relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#ffffff05 1px, transparent 0)', backgroundSize: '32px 32px' }}>
           
           {/* Mapper Node: Index.html */}
           <div className="absolute top-[20%] left-[25%] group cursor-grab active:cursor-grabbing">
              <div className="mb-2 flex items-center gap-2">
                 <span className="material-icons-round text-primary text-sm">home</span>
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Home Page</span>
                 <Badge variant="primary" className="bg-primary/20 text-[8px] px-2 border-none">ROOT</Badge>
              </div>
              <div className="w-64 aspect-video bg-white/5 border-2 border-primary rounded-2xl p-1 shadow-[0_0_50px_rgba(37,99,235,0.1)] transition-transform group-hover:scale-105 duration-500 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=400" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="mt-2 flex justify-between items-center px-1">
                 <span className="text-[10px] font-bold text-slate-500 font-mono italic tracking-tighter">index.html</span>
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500/40"></div>
                 </div>
              </div>

              {/* Connection Handles */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0c111d] border-2 border-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform cursor-crosshair">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="absolute -right-3 top-[65%] -translate-y-1/2 w-6 h-6 bg-[#0c111d] border-2 border-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform cursor-crosshair">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
           </div>

           {/* Secondary Nodes (Partial Previews) */}
           <div className="absolute top-[12%] left-[65%] opacity-40 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-48 aspect-video bg-amber-500/20 border border-white/10 rounded-xl overflow-hidden grayscale group">
                 <div className="absolute top-2 right-2 text-white/40"><span className="material-icons-round text-sm">info</span></div>
                 <div className="absolute inset-0 flex items-center justify-center"><p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">ABOUT</p></div>
              </div>
              <p className="text-[10px] font-bold text-slate-600 mt-2 text-center tracking-widest">about.html</p>
           </div>

           <div className="absolute top-[45%] left-[65%] opacity-40 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-48 aspect-video bg-indigo-500/20 border border-white/10 rounded-xl overflow-hidden grayscale">
                 <div className="absolute top-2 right-2 text-white/40"><span className="material-icons-round text-sm">settings</span></div>
                 <div className="absolute inset-0 flex items-center justify-center"><p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SERVICES</p></div>
              </div>
              <p className="text-[10px] font-bold text-slate-600 mt-2 text-center tracking-widest">services.html</p>
           </div>

           {/* SVG Connection Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
              <path d="M485,210 C550,210 570,165 635,165" stroke="#2563EB" strokeWidth="2" fill="transparent" />
              <path d="M485,245 C580,245 540,360 635,360" stroke="#2563EB" strokeWidth="2" fill="transparent" />
           </svg>

           {/* CANVAS TOOLBAR (Bottom Center) */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#0c111d]/90 backdrop-blur-2xl border border-white/10 p-2 rounded-2xl flex items-center gap-2 shadow-2xl z-50">
              <div className="flex items-center gap-1 bg-primary/20 p-1 rounded-xl">
                 <button className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg"><span className="material-icons-round text-lg">near_me</span></button>
                 <button className="w-10 h-10 text-slate-500 hover:text-white rounded-lg flex items-center justify-center transition-all"><span className="material-icons-round text-lg">pan_tool</span></button>
                 <button className="w-10 h-10 text-slate-500 hover:text-white rounded-lg flex items-center justify-center transition-all"><span className="material-icons-round text-lg">link</span></button>
              </div>
              <div className="w-px h-6 bg-white/10 mx-1"></div>
              <button className="w-10 h-10 text-slate-500 hover:text-white rounded-lg flex items-center justify-center transition-all"><span className="material-icons-round text-lg">auto_fix_high</span></button>
              <button className="w-10 h-10 text-slate-500 hover:text-white rounded-lg flex items-center justify-center transition-all"><span className="material-icons-round text-lg">grid_view</span></button>
              <div className="w-px h-6 bg-white/10 mx-1"></div>
              <button className="w-10 h-10 text-slate-700 hover:text-rose-500 rounded-lg flex items-center justify-center transition-all"><span className="material-icons-round text-lg">delete</span></button>
           </div>

           {/* MINI-MAP (Bottom Right) */}
           <div className="absolute bottom-10 right-10 w-48 h-32 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-none group">
              <div className="flex-1 relative flex items-center justify-center">
                 <div className="w-8 h-6 bg-primary opacity-40 rounded"></div>
                 <div className="absolute top-4 right-4 w-4 h-3 bg-white/10 rounded"></div>
                 <div className="absolute bottom-4 right-4 w-4 h-3 bg-white/10 rounded"></div>
              </div>
              <div className="h-6 bg-white/5 flex items-center justify-between px-3">
                 <div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-slate-600"></div><div className="w-1 h-1 rounded-full bg-slate-600"></div></div>
                 <span className="material-icons-round text-[10px] text-slate-600">zoom_out_map</span>
              </div>
           </div>
        </main>

        {/* 4. RIGHT SIDEBAR (CONNECTION PROPERTIES) */}
        <aside className="w-80 border-l border-white/5 bg-[#0c111d] flex flex-col shrink-0">
           <div className="p-8 border-b border-white/5">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-2">Connection Properties</h3>
              <p className="text-[10px] text-slate-500 font-medium italic leading-relaxed">Select a connection to edit logic</p>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-12">
              {/* Origin Button Context */}
              <section className="space-y-4">
                 <h4 className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Origin Button</h4>
                 <div className="p-5 bg-white/5 border border-white/10 rounded-[20px] relative group hover:border-primary/40 transition-all cursor-pointer flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full border border-primary/40 flex items-center justify-center text-primary ring-4 ring-primary/5 shadow-inner">
                       <span className="material-icons-round text-sm">radio_button_checked</span>
                    </div>
                    <div>
                       <p className="text-xs font-black text-white leading-none mb-1 italic">btn_hero_cta</p>
                       <p className="text-[9px] text-slate-500 font-medium tracking-tight">"Get Started" - Navbar</p>
                    </div>
                 </div>
              </section>

              {/* Transition Effect Selections */}
              <section className="space-y-6">
                 <h4 className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Transition Effect</h4>
                 <div className="grid grid-cols-2 gap-3">
                    {['Instant', 'Fade', 'Slide', 'Zoom'].map((effect, i) => (
                       <button key={effect} className={`py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${i === 0 ? 'bg-primary/20 border-primary text-primary shadow-xl shadow-primary/5' : 'bg-white/5 border-white/10 text-slate-500 hover:text-white'}`}>
                          {effect}
                       </button>
                    ))}
                 </div>
              </section>

              {/* Logic/Trigger */}
              <section className="space-y-4">
                 <h4 className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Logic / Trigger</h4>
                 <div className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-300 cursor-pointer hover:border-white/20 transition-all">
                    <span>On Click</span>
                    <span className="material-icons-round text-slate-600 text-sm">expand_more</span>
                 </div>
              </section>

              {/* AI Suggestion Box */}
              <section className="p-8 bg-primary/5 border border-primary/20 rounded-[32px] space-y-6 relative overflow-hidden group">
                 <div className="flex items-center gap-3 text-primary">
                    <span className="material-icons-round text-lg animate-pulse">lightbulb</span>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">AI Suggestion</h4>
                 </div>
                 <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    Consider linking your <span className="text-white">'Home'</span> hero button directly to <span className="text-white">'Contact'</span> for higher conversion based on your project goals.
                 </p>
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-icons-round text-[80px]">auto_fix_high</span>
                 </div>
              </section>
           </div>

           {/* Right Sidebar Footer Action */}
           <div className="p-8 border-t border-white/5 bg-black/20">
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white flex items-center justify-center gap-3 transition-all shadow-2xl shadow-black/40 active:scale-95 group">
                 <span className="material-icons-round text-lg text-slate-500 group-hover:text-primary transition-colors">code</span>
                 Export Navigation Schema
              </button>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default SiteMapper;
