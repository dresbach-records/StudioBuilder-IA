
import React, { useState, useEffect } from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import ExportModal from './export-modal';

const DatabaseGenerator: React.FC = () => {
  const [activeFile, setActiveFile] = useState('products.sql');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [scanProgress, setScanProgress] = useState(85);

  const files = [
    { name: 'products.sql', type: 'sql', active: activeFile === 'products.sql' },
    { name: 'orders.ts', type: 'ts', active: activeFile === 'orders.ts' },
    { name: 'users.sql', type: 'sql', active: activeFile === 'users.sql' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#05050a] text-slate-300 font-sans flex flex-col overflow-hidden">
      
      {/* 1. TOP HEADER (conforme imagem) */}
      <header className="h-14 border-b border-white/5 bg-[#0c0c14] flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white shadow-lg">
              <span className="material-icons-round text-sm">architecture</span>
            </div>
            <span className="text-xs font-black text-white uppercase tracking-tighter italic">StudioBuilder AI</span>
          </div>
          
          <nav className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
             <span className="hover:text-white cursor-pointer transition-colors">Project</span>
             <span className="hover:text-white cursor-pointer transition-colors">Editor</span>
             <div className="relative">
                <span className="text-white">Generate Tables</span>
                <div className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-primary"></div>
             </div>
             <span className="hover:text-white cursor-pointer transition-colors">Deploy</span>
          </nav>
        </div>

        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[9px] font-black text-primary uppercase tracking-widest">AI Scanning Active</span>
           </div>
           
           <button 
             onClick={() => setIsExportOpen(true)}
             className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-black shadow-xl shadow-primary/30 hover:scale-105 transition-all uppercase tracking-widest"
           >
              <span className="material-icons-round text-sm">sync</span>
              Sync to Project
           </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. EXPLORER SIDEBAR (Esquerda) */}
        <aside className="w-60 border-r border-white/5 bg-[#09090f] flex flex-col shrink-0">
           <div className="p-4 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Explorer</span>
              <span className="material-icons-round text-sm text-slate-700">more_horiz</span>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
              <div className="space-y-0.5">
                 <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500">
                    <span className="material-icons-round text-sm">expand_more</span>
                    <span className="material-icons-round text-sm">folder</span>
                    <span className="font-bold">app</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500">
                    <span className="material-icons-round text-sm">chevron_right</span>
                    <span className="material-icons-round text-sm">folder</span>
                    <span className="font-bold">components</span>
                 </div>
                 <div className="space-y-0.5">
                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300">
                       <span className="material-icons-round text-sm">expand_more</span>
                       <span className="material-icons-round text-sm text-primary">auto_awesome</span>
                       <span className="font-black italic">tables</span>
                       <Badge variant="primary" className="text-[7px] px-1 py-0 border-none bg-primary/20">NEW</Badge>
                    </div>
                    <div className="ml-4 border-l border-white/5 pl-2 space-y-0.5">
                       {files.map(file => (
                          <div 
                            key={file.name}
                            onClick={() => setActiveFile(file.name)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer transition-all ${file.active ? 'bg-primary/20 text-primary' : 'text-slate-500 hover:bg-white/5'}`}
                          >
                             <span className="material-icons-round text-sm">{file.type === 'sql' ? 'description' : 'code'}</span>
                             {file.name}
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 mt-4">
                    <span className="material-icons-round text-sm text-slate-700">settings</span>
                    <span className="font-bold">next.config.js</span>
                 </div>
              </div>
           </div>

           {/* User Status Node (Bottom Left) */}
           <div className="p-4 border-t border-white/5">
              <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-2xl border border-white/5 shadow-inner">
                 <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary relative">
                    <span className="material-icons-round">psychology</span>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#09090f]"></div>
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-white leading-none mb-1 uppercase tracking-tighter">Studio AI</p>
                    <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Watching changes...</p>
                 </div>
              </div>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE AREA */}
        <main className="flex-1 flex flex-col bg-[#05050a] relative overflow-hidden">
           
           {/* Scanning Banner (Top of main) */}
           <div className="h-10 bg-black/40 border-b border-white/5 flex items-center px-6 justify-between text-[10px] font-bold text-slate-400 shrink-0">
              <div className="flex items-center gap-3">
                 <span className="material-icons-round text-primary text-sm animate-spin">refresh</span>
                 <span>Scanning project entities (Products, Orders, Users)...</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_#2563EB]"></div>
                 </div>
                 <span className="text-white font-black">{scanProgress}% Complete</span>
              </div>
           </div>

           {/* Workspace Viewport (Dual Pane) */}
           <div className="flex-1 flex overflow-hidden">
              {/* Left Pane: Code Editor */}
              <div className="flex-1 border-r border-white/5 flex flex-col">
                 <div className="h-10 border-b border-white/5 bg-[#0c0c14] flex items-center px-4 gap-4">
                    <div className="h-full flex items-center gap-2 px-6 bg-primary/10 border-b-2 border-primary text-[10px] font-black uppercase text-primary tracking-widest">
                       <span className="material-icons-round text-xs">code</span>
                       {activeFile}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white cursor-pointer px-4">
                       <span className="material-icons-round text-xs">description</span>
                       orders.ts
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-white cursor-pointer px-4">
                       <span className="material-icons-round text-xs">account_tree</span>
                       ER Diagram
                    </div>
                 </div>
                 <div className="flex-1 overflow-y-auto custom-scrollbar bg-black/20 p-8 font-mono text-[13px] leading-relaxed">
                    <div className="flex gap-6">
                       <div className="text-slate-800 text-right select-none border-r border-white/5 pr-6 min-w-[40px]">
                          {Array.from({length: 13}).map((_, i) => <div key={i}>{i+1}</div>)}
                       </div>
                       <div className="flex-1">
                          <p><span className="text-primary uppercase">CREATE TABLE</span> products (</p>
                          <p className="pl-4">id <span className="text-amber-500">UUID</span> <span className="text-primary uppercase">PRIMARY KEY DEFAULT</span> gen_random_uuid(),</p>
                          <p className="pl-4">name <span className="text-amber-500 uppercase">VARCHAR(255)</span> <span className="text-primary uppercase">NOT NULL</span>,</p>
                          <p className="pl-4">description <span className="text-amber-500 uppercase">TEXT</span>,</p>
                          <p className="pl-4">price <span className="text-amber-500 uppercase">DECIMAL(10, 2)</span> <span className="text-primary uppercase">NOT NULL</span>,</p>
                          <p className="pl-4">category_id <span className="text-amber-500 uppercase">UUID</span> <span className="text-primary uppercase">REFERENCES</span> categories(id),</p>
                          <p className="pl-4">stock_quantity <span className="text-amber-500 uppercase">INTEGER</span> <span className="text-primary uppercase">DEFAULT</span> 0,</p>
                          <p className="pl-4">created_at <span className="text-amber-500 uppercase">TIMESTAMP WITH TIME ZONE</span> <span className="text-primary uppercase">DEFAULT</span> now(),</p>
                          <p className="pl-4">updated_at <span className="text-amber-500 uppercase">TIMESTAMP WITH TIME ZONE</span> <span className="text-primary uppercase">DEFAULT</span> now()</p>
                          <p>);</p>
                          <p className="mt-6 text-slate-600 italic">-- AI detected relationship between Orders and Products</p>
                          <p><span className="text-primary uppercase">CREATE INDEX</span> idx_products_category <span className="text-primary uppercase">ON</span></p>
                          <p>products(category_id);</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Pane: Visual ER Preview */}
              <div className="flex-1 bg-[#07070b] relative overflow-hidden group" style={{ backgroundImage: 'radial-gradient(#ffffff05 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                 <div className="absolute top-6 left-6 text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] pointer-events-none">Visual Entity Relationship Preview</div>
                 
                 {/* Canvas Toolbar */}
                 <div className="absolute top-6 right-6 flex gap-1">
                    <button className="w-8 h-8 bg-black/40 border border-white/5 rounded flex items-center justify-center text-slate-600 hover:text-white"><span className="material-icons-round text-sm">add</span></button>
                    <button className="w-8 h-8 bg-black/40 border border-white/5 rounded flex items-center justify-center text-slate-600 hover:text-white"><span className="material-icons-round text-sm">remove</span></button>
                 </div>

                 {/* ER Nodes (Simulados conforme imagem 3) */}
                 <div className="absolute top-[15%] left-[20%] w-56 bg-[#0c0c14] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
                    <div className="p-3 bg-slate-800/40 border-b border-white/5 flex items-center gap-2">
                       <span className="material-icons-round text-xs text-primary">person</span>
                       <span className="text-[10px] font-black uppercase text-white">Users</span>
                    </div>
                    <div className="p-3 space-y-1">
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">id</span> <span className="text-slate-600 italic">uuid [PK]</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">email</span> <span className="text-slate-600 italic">string</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">full_name</span> <span className="text-slate-600 italic">string</span></div>
                    </div>
                 </div>

                 <div className="absolute top-[45%] left-[30%] w-56 bg-[#0c0c14] border border-primary/40 rounded-xl overflow-hidden shadow-2xl scale-110 z-10">
                    <div className="p-3 bg-primary/20 border-b border-primary/20 flex items-center gap-2">
                       <span className="material-icons-round text-xs text-primary">shopping_cart</span>
                       <span className="text-[10px] font-black uppercase text-white tracking-widest">Orders</span>
                    </div>
                    <div className="p-3 space-y-1">
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">id</span> <span className="text-slate-600 italic">uuid [PK]</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-primary">user_id</span> <span className="text-primary/60 italic">uuid [FK]</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">total_amount</span> <span className="text-slate-600 italic">decimal</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">status</span> <span className="text-slate-600 italic">enum</span></div>
                    </div>
                 </div>

                 <div className="absolute top-[65%] left-[55%] w-56 bg-[#0c0c14] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    <div className="p-3 bg-slate-800/40 border-b border-white/5 flex items-center gap-2">
                       <span className="material-icons-round text-xs text-primary">inventory_2</span>
                       <span className="text-[10px] font-black uppercase text-white">Products</span>
                    </div>
                    <div className="p-3 space-y-1">
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">id</span> <span className="text-slate-600 italic">uuid [PK]</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">name</span> <span className="text-slate-600 italic">string</span></div>
                       <div className="flex justify-between text-[9px] font-bold"><span className="text-slate-400">price</span> <span className="text-slate-600 italic">decimal</span></div>
                    </div>
                 </div>

                 {/* SVG Connection Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <path d="M430,190 C500,190 520,380 430,380" stroke="#2563EB" strokeWidth="1.5" fill="transparent" strokeDasharray="4 4" />
                    <path d="M570,550 C600,550 600,650 630,650" stroke="#2563EB" strokeWidth="1.5" fill="transparent" strokeDasharray="4 4" />
                 </svg>
              </div>
           </div>

           {/* 4. BOTTOM OUTPUT PANEL (conforme imagem) */}
           <div className="h-48 border-t border-white/5 bg-[#09090f] flex flex-col shrink-0">
              <div className="flex items-center gap-8 px-6 border-b border-white/5 bg-black/20">
                 {['OUTPUT', 'AI DEBUGGER', 'PROJECT CONSOLE'].map((tab, i) => (
                    <button key={tab} className={`py-3 text-[9px] font-black uppercase tracking-widest border-b-2 transition-all ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-600 hover:text-slate-400'}`}>
                       {tab}
                    </button>
                 ))}
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 font-mono text-[10px] leading-relaxed">
                 <p className="flex gap-4"><span className="text-primary font-bold">[AI Scan]</span> Analyzing `app/lib/api.ts` and `app/models/`...</p>
                 <p className="flex gap-4"><span className="text-emerald-500 font-bold">[Detected]</span> Entity "Product" found in types. Mapping to SQL table...</p>
                 <p className="flex gap-4"><span className="text-emerald-500 font-bold">[Detected]</span> Many-to-One relationship found: Orders belongs to User.</p>
                 <p className="flex gap-4"><span className="text-indigo-400 font-bold">[Schema]</span> Generating `tables/products.sql` with optimized indexes...</p>
                 <p className="mt-2 flex gap-4 text-slate-700">➜ Watching for project file changes...</p>
              </div>
           </div>
        </main>
      </div>

      {/* 5. ENGINEERING STATUS BAR (Bottom) */}
      <footer className="h-7 border-t border-white/5 bg-[#0c0c14] px-4 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.2em] text-slate-600 shrink-0">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
               <span className="material-icons-round text-xs">account_tree</span>
               main*
            </div>
            <div className="flex items-center gap-4">
               <span className="flex items-center gap-1.5 opacity-80"><span className="material-icons-round text-[10px]">cancel</span> 0</span>
               <span className="flex items-center gap-1.5 opacity-80"><span className="material-icons-round text-[10px]">warning</span> 2</span>
            </div>
         </div>
         <div className="flex items-center gap-8">
            <span className="opacity-60">NEXT.JS 14.2</span>
            <span className="opacity-100 font-black text-primary">POSTGRESQL</span>
            <span className="opacity-60">UTF-8</span>
         </div>
      </footer>

      {/* Export Schema Modal */}
      {isExportOpen && <ExportModal onClose={() => setIsExportOpen(false)} />}
    </div>
  );
};

export default DatabaseGenerator;
