
import React, { useState } from 'react';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const EditorVisual: React.FC = () => {
  const [device, setDevice] = useState('desktop');
  const [showOptimizer, setShowOptimizer] = useState(false);
  const [viewMode, setViewMode] = useState<'edit' | 'analysis'>('analysis'); // Default analysis for demo
  const [quality, setQuality] = useState(75);

  const extractedColors = [
    { hex: '#0F172A', label: 'Deep Navy' },
    { hex: '#2560E9', label: 'Primary Blue' },
    { hex: '#8B5CF6', label: 'Accent Purple' },
    { hex: '#EC4899', label: 'Highlight Pink' },
    { hex: '#10B981', label: 'Success Green' },
    { hex: '#F8FAFC', label: 'Neutral Ghost' },
  ];

  const vibeTags = [
    { label: 'Glassmorphism', active: true },
    { label: 'Cyber-Minimalist', active: true },
    { label: 'Vibrant Gradients', active: false, highlight: 'rose' },
    { label: 'Industrial UI', active: true },
    { label: 'High Precision', active: false, highlight: 'emerald' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#050810] text-slate-300 font-sans overflow-hidden relative">
      
      {/* 1. EDITOR SUB-HEADER (INTERNAL TOOLBAR) */}
      <div className="h-16 border-b border-white/5 bg-[#0c111d] flex items-center justify-between px-6 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-4">
           {/* Logo and Context */}
           <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg mr-2">
              <span className="material-icons-round text-white text-sm">architecture</span>
           </div>
           
           <div className="flex items-center gap-3">
              <span className="text-xs font-black text-white uppercase tracking-tighter">StudioBuilder <span className="text-primary italic">AI</span></span>
              <div className="w-px h-4 bg-white/10 mx-2"></div>
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Project: <span className="text-white">Neon-Genesis-SaaS</span></span>
              </div>
           </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 mr-4">
              <button onClick={() => setViewMode('edit')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${viewMode === 'edit' ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}>Visual Editor</button>
              <button onClick={() => setViewMode('analysis')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${viewMode === 'analysis' ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}>AI Analysis</button>
           </div>
           
           <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white hover:border-white/20 transition-all uppercase tracking-widest">Export Code</button>
           <button className="px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-black shadow-xl shadow-primary/30 hover:scale-105 transition-all uppercase tracking-widest">Publish</button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. LEFT TOOLBAR */}
        <aside className="w-16 border-r border-white/5 bg-[#0c111d] flex flex-col items-center py-6 gap-6 shrink-0">
           <button className={`p-3 rounded-xl border transition-all ${viewMode === 'edit' ? 'text-primary bg-primary/10 border-primary/20 shadow-lg shadow-primary/5' : 'text-slate-600 hover:text-white'}`}><span className="material-icons-round">layers</span></button>
           <button className={`p-3 rounded-xl border transition-all ${viewMode === 'analysis' ? 'text-primary bg-primary/10 border-primary/20 shadow-lg shadow-primary/5' : 'text-slate-600 hover:text-white'}`}><span className="material-icons-round">auto_awesome</span></button>
           <button className="p-3 text-slate-600 hover:text-white transition-colors"><span className="material-icons-round">image</span></button>
           <button className="p-3 text-slate-600 hover:text-white transition-colors"><span className="material-icons-round">palette</span></button>
        </aside>

        {/* 3. MAIN ANALYSIS CANVAS (Fiel à Imagem 4) */}
        <main className="flex-1 bg-[#090b14] p-12 overflow-hidden relative flex flex-col items-center justify-center">
           
           {viewMode === 'analysis' ? (
             <div className="w-full max-w-5xl aspect-video bg-[#141824] rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden group">
                {/* Source Content Preview */}
                <div className="absolute inset-0 p-24 flex items-center justify-center">
                   <div className="relative w-full max-w-lg aspect-[4/3] bg-emerald-900/20 border border-emerald-500/20 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col items-center justify-center p-12 text-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent absolute top-1/2 left-0 animate-pulse shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
                      
                      {/* Analysis Points */}
                      <div className="absolute top-1/4 left-1/3 w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center animate-ping">
                         <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center">
                         <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>

                      <h2 className="text-2xl font-black text-white uppercase tracking-[0.4em] opacity-40">Source Institutional Data Card</h2>
                      <p className="mt-4 font-mono text-[10px] text-slate-500 leading-relaxed max-w-xs">
                         DINIDAL DALOIN DADINCACUITE<br/>
                         GINGE MAC / CAFFE HATQUBK
                      </p>
                   </div>
                </div>

                {/* Analysis Status Toast (conforme imagem) */}
                <div className="absolute top-8 left-8">
                   <div className="flex items-center gap-3 px-4 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Analyzing Texture Vectors...</span>
                   </div>
                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             </div>
           ) : (
             <div className="w-full max-w-5xl h-[600px] bg-white rounded-3xl shadow-2xl flex items-center justify-center text-slate-400">Visual Editor Canvas</div>
           )}
        </main>

        {/* 4. VISUAL DNA BREAKDOWN SIDEBAR (RIGHT - Fiel à Imagem 4) */}
        <aside className="w-96 border-l border-white/5 bg-[#0c111d] flex flex-col shrink-0">
           <div className="p-8 border-b border-white/5 space-y-4">
              <Badge variant="primary" className="bg-primary/5 text-[9px] px-3 py-1 border-primary/20">Analysis Complete</Badge>
              <div className="flex justify-between items-start">
                 <div>
                    <h2 className="text-2xl font-black text-white tracking-tight leading-none">Visual DNA Breakdown</h2>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed font-medium">AI has extracted design tokens from your inspiration source.</p>
                 </div>
                 <button className="text-slate-600 hover:text-white transition-all"><span className="material-icons-round text-lg">close</span></button>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-12">
              
              {/* Extracted Palette Section */}
              <section className="space-y-6">
                 <div className="flex justify-between items-end">
                    <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Extracted Palette</h3>
                    <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded">6 Colors Found</span>
                 </div>
                 <div className="grid grid-cols-4 gap-4">
                    {extractedColors.map((color, i) => (
                       <div key={i} className={`space-y-3 group ${i === 0 ? 'col-span-1' : ''}`}>
                          <div 
                            className={`aspect-square rounded-xl border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-2xl ${i === 0 ? 'border-primary ring-4 ring-primary/10' : 'border-white/5 hover:border-white/20'}`}
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <p className="text-[9px] font-mono text-center text-slate-500 uppercase">{color.hex}</p>
                       </div>
                    ))}
                 </div>
              </section>

              {/* Identified Typography Section */}
              <section className="space-y-6">
                 <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Identified Typography</h3>
                 <div className="space-y-4">
                    {/* Headings */}
                    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl relative group hover:border-primary/40 transition-all cursor-pointer">
                       <span className="absolute top-4 right-4 material-icons-round text-primary text-sm">check_circle</span>
                       <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mb-3">Headings</p>
                       <h4 className="text-xl font-bold text-white mb-1">Space Grotesk</h4>
                       <p className="text-[10px] text-slate-500 italic">Geometric, high-readability sans-serif</p>
                    </div>
                    {/* Body */}
                    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl relative group hover:border-primary/40 transition-all cursor-pointer">
                       <span className="absolute top-4 right-4 material-icons-round text-primary text-sm">check_circle</span>
                       <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mb-3">Body & Labels</p>
                       <h4 className="text-xl font-bold text-white mb-1">Inter UI</h4>
                       <p className="text-[10px] text-slate-500 italic">Optimized for small text and interfaces</p>
                    </div>
                 </div>
              </section>

              {/* Design Vibe Tags Section */}
              <section className="space-y-6 pb-4">
                 <h3 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Design Vibe Tags</h3>
                 <div className="flex flex-wrap gap-2">
                    {vibeTags.map((tag, i) => (
                       <div 
                         key={i} 
                         className={`px-4 py-2 rounded-full text-[10px] font-bold border transition-all cursor-default ${
                           tag.active 
                           ? 'bg-slate-800 text-slate-300 border-white/10' 
                           : tag.highlight === 'rose' 
                             ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' 
                             : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                         }`}
                       >
                          {tag.label}
                       </div>
                    ))}
                 </div>
              </section>
           </div>

           {/* Sidebar Footer Actions */}
           <div className="p-8 border-t border-white/5 bg-black/20 space-y-6">
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                 <span className="material-icons-round text-lg">auto_awesome</span>
                 Apply to Design System
              </button>
              <div className="flex items-center justify-between px-2">
                 <button className="flex items-center gap-2 text-[9px] font-black uppercase text-slate-600 hover:text-white transition-colors">
                    <span className="material-icons-round text-sm">download</span>
                    Export Tokens (JSON)
                 </button>
                 <button className="flex items-center gap-2 text-[9px] font-black uppercase text-slate-600 hover:text-white transition-colors">
                    <span className="material-icons-round text-sm">refresh</span>
                    Re-analyze
                 </button>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default EditorVisual;
