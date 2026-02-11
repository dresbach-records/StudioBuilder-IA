
import React, { useState } from 'react';
import Badge from '../../../components/ui/Badge';

const LiveInspector: React.FC = () => {
  const [device, setDevice] = useState('desktop');

  return (
    <div className="fixed inset-0 z-[110] bg-[#050810] text-slate-300 font-sans flex flex-col overflow-hidden">
      
      {/* 1. INSPECTOR TOP HEADER */}
      <header className="h-16 border-b border-white/5 bg-[#0c111d] flex items-center justify-between px-6 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-icons-round text-white text-sm">architecture</span>
            </div>
            <span className="text-sm font-black text-white uppercase tracking-tighter">StudioBuilder <span className="text-primary italic">AI</span></span>
          </div>

          <div className="h-8 w-px bg-white/10 mx-2"></div>

          {/* Device Toggles */}
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
            {['smartphone', 'tablet', 'desktop_windows', 'laptop'].map((icon, i) => (
              <button 
                key={icon}
                onClick={() => setDevice(icon)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  (device === icon || (device === 'desktop' && i === 2)) ? 'bg-primary text-white shadow-lg' : 'text-slate-600 hover:text-slate-400'
                }`}
              >
                <span className="material-icons-round text-lg">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Browser Mock URL */}
        <div className="flex-1 max-w-2xl px-8">
           <div className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 flex items-center gap-3">
              <span className="material-icons-round text-emerald-500 text-sm">lock</span>
              <span className="text-[10px] font-medium text-slate-500 truncate">preview.studiobuilder.ai/project-x942/</span>
              <span className="text-[10px] font-bold text-white">index.html</span>
              <span className="material-icons-round text-slate-600 text-xs ml-auto cursor-pointer hover:text-white">refresh</span>
           </div>
        </div>

        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-white transition-colors mr-4">
              <span className="material-icons-round text-sm text-primary">edit</span>
              Editor
           </button>
           <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-black shadow-xl shadow-primary/30 hover:scale-105 transition-all uppercase tracking-widest">
              <span className="material-icons-round text-sm">download</span>
              Export Code
           </button>
           <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl ml-2 cursor-pointer">
              <img src="https://picsum.photos/seed/inspector-user/100/100" alt="User" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. MAIN PREVIEW AREA */}
        <main className="flex-1 bg-[#090b14] relative p-10 flex flex-col items-center overflow-hidden">
           {/* Preview Frame */}
           <div className={`w-full h-full bg-slate-800 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/5 relative overflow-hidden transition-all duration-700 ${device === 'smartphone' ? 'max-w-[375px]' : device === 'tablet' ? 'max-w-[768px]' : 'max-w-full'}`}>
              {/* Browser Tabs/Decor */}
              <div className="h-8 bg-[#1a1f2e] border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
                 <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              </div>
              
              {/* Content Canvas */}
              <div className="flex-1 w-full h-full relative group">
                 <img 
                   src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
                   className="w-full h-full object-cover grayscale-[0.2] brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                   alt="Site Preview"
                 />
                 
                 {/* Live Preview Text */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mix-blend-overlay opacity-80">Live Preview Content</h2>
                 </div>

                 {/* Floating Navigation Menu (conforme imagem) */}
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#0c111d]/90 backdrop-blur-2xl border border-white/10 p-1.5 rounded-3xl flex items-center gap-1 shadow-2xl z-50">
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">
                       <span className="material-icons-round text-sm">home</span>
                       Home
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 text-slate-400 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                       <span className="material-icons-round text-sm">design_services</span>
                       Services
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 text-slate-400 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                       <span className="material-icons-round text-sm">collections</span>
                       Portfolio
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-2"></div>
                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all">
                       <span className="material-icons-round text-lg">add</span>
                    </button>
                 </div>
              </div>
           </div>

           {/* Live Status Badge */}
           <div className="absolute bottom-10 left-10">
              <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-xl">
                 <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10B981]"></span>
                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Preview</span>
              </div>
           </div>
        </main>

        {/* 3. INSPECTOR SIDEBAR (conforme imagem) */}
        <aside className="w-[420px] border-l border-white/5 bg-[#0c111d] flex flex-col shrink-0">
           
           {/* Section 1: Inspect Code */}
           <div className="flex-1 flex flex-col min-h-0">
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
                 <div className="flex items-center gap-3 text-primary">
                    <span className="material-icons-round text-lg">code</span>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Inspect Code</h3>
                 </div>
                 <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-icons-round text-sm hover:text-white cursor-pointer">content_copy</span>
                    <span className="material-icons-round text-sm hover:text-rose-500 cursor-pointer">close</span>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 font-mono text-[11px] leading-relaxed bg-[#050810]/50">
                 <div className="flex gap-4">
                    <div className="text-slate-700 text-right select-none pr-4 border-r border-white/5 min-w-[32px]">
                       {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
                    </div>
                    <div className="flex-1 space-y-1">
                       <p className="text-slate-500">&lt;<span className="text-rose-400">div</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"hero-section"</span>&gt;</p>
                       <p className="pl-4 text-slate-500">&lt;<span className="text-rose-400">nav</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"navbar"</span>&gt;</p>
                       <p className="pl-8 text-slate-500">&lt;<span className="text-rose-400">div</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"container"</span>&gt;</p>
                       <p className="pl-12 text-slate-500">&lt;<span className="text-rose-400">a</span> <span className="text-amber-400">href</span>=<span className="text-emerald-400">"/"</span>&gt;Logo&lt;/<span className="text-rose-400">a</span>&gt;</p>
                       <p className="pl-12 text-slate-600 font-italic">&lt;!-- Dynamic Navigation --&gt;</p>
                       <p className="pl-8 text-slate-500">&lt;/<span className="text-rose-400">div</span>&gt;</p>
                       <p className="pl-4 text-slate-500">&lt;/<span className="text-rose-400">nav</span>&gt;</p>
                       <p className="pl-4 text-slate-500">&lt;<span className="text-rose-400">main</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"pt-24"</span>&gt;</p>
                       <p className="pl-8 text-slate-500">&lt;<span className="text-rose-400">h1</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"text-6xl font-bold"</span>&gt;</p>
                       <p className="pl-12 text-white font-bold">Build Faster with AI</p>
                       <p className="pl-8 text-slate-500">&lt;/<span className="text-rose-400">h1</span>&gt;</p>
                       <p className="pl-8 text-slate-500">&lt;<span className="text-rose-400">p</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"mt-6 text-xl"</span>&gt;</p>
                       <p className="pl-12 text-slate-400">The future of web development is here.</p>
                       <p className="pl-8 text-slate-500">&lt;/<span className="text-rose-400">p</span>&gt;</p>
                       <p className="pl-8 text-slate-500">&lt;<span className="text-rose-400">button</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"btn-primary"</span>&gt;</p>
                       <p className="pl-12 text-white">Get Started</p>
                       <p className="pl-8 text-slate-500">&lt;/<span className="text-rose-400">button</span>&gt;</p>
                       <p className="pl-4 text-slate-500">&lt;/<span className="text-rose-400">main</span>&gt;</p>
                       <p className="text-slate-500">&lt;/<span className="text-rose-400">div</span>&gt;</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Section 2: CSS Styles (conforme imagem) */}
           <div className="h-[340px] border-t border-white/5 flex flex-col shrink-0 bg-black/30">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                 <h3 className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em]">CSS Styles</h3>
                 <span className="text-[8px] font-black text-primary uppercase">computed</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 font-mono text-[11px] leading-relaxed">
                 <div className="space-y-6">
                    <div>
                       <p className="text-primary"><span className="text-emerald-400">.hero-section</span> &#123;</p>
                       <div className="pl-4 space-y-0.5">
                          <p className="text-slate-500">background-color: <span className="text-white">#ffffff</span>;</p>
                          <p className="text-slate-500">min-height: <span className="text-emerald-400">100vh</span>;</p>
                          <p className="text-slate-500">display: <span className="text-indigo-400">flex</span>;</p>
                          <p className="text-slate-500">flex-direction: <span className="text-indigo-400">column</span>;</p>
                       </div>
                       <p className="text-primary">&#125;</p>
                    </div>
                    <div>
                       <p className="text-primary"><span className="text-emerald-400">.btn-primary</span> &#123;</p>
                       <div className="pl-4 space-y-0.5">
                          <p className="text-slate-500">padding: <span className="text-white">12px 24px</span>;</p>
                          <p className="text-slate-500">border-radius: <span className="text-white">8px</span>;</p>
                          <p className="text-slate-500">background: <span className="text-emerald-400">var(--primary)</span>;</p>
                       </div>
                       <p className="text-primary">&#125;</p>
                    </div>
                 </div>
              </div>

              {/* Bottom Metrics Bar (conforme imagem) */}
              <div className="p-4 border-t border-white/5 bg-black/40 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                       <span className="material-icons-round text-xs text-primary">speed</span>
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Performance: <span className="text-emerald-500">98/100</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                       <span className="material-icons-round text-xs text-primary">visibility</span>
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SEO Score: <span className="text-emerald-500">92%</span></span>
                    </div>
                 </div>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default LiveInspector;
