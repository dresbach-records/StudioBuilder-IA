
import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const FileManagerPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const files = [
    { name: 'Navbar.tsx', type: 'code', size: '12 KB', modified: '2H AGO', content: 'export const Navbar = () => {\n  return (\n    <nav>...</nav>\n  )' },
    { name: 'Hero_Abstract.png', type: 'image', size: '2.4 MB', modified: '1D AGO', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=400' },
    { name: 'GlobalStyles.css', type: 'code', size: '4.2 KB', modified: '5H AGO', content: ':root {\n  --primary: #3b2bee;\n  --font: Space Grotesk;\n}' },
    { name: 'Background_Gradient.png', type: 'image', size: '1.1 MB', modified: '3D AGO', url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=400' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#050810] text-slate-300 font-sans overflow-hidden">
      
      {/* 1. INTERNAL HEADER (Breadcrumbs & Sync) */}
      <header className="h-16 border-b border-white/5 bg-[#0c111d] flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
              <span className="hover:text-white cursor-pointer transition-colors">My Projects</span>
              <span className="material-icons-round text-[10px] opacity-30">chevron_right</span>
              <span className="text-white">E-commerce Template V2</span>
           </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Synced</span>
           </div>
           
           <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-xl text-[10px] font-black shadow-xl shadow-secondary/30 hover:scale-105 transition-all uppercase tracking-widest">
              <span className="material-icons-round text-sm">save</span>
              Save Root Changes
           </button>
           
           <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden ml-2 shadow-2xl">
              <img src="https://picsum.photos/seed/user-f/100/100" alt="User" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. LEFT PROJECT EXPLORER (Sub-Sidebar) */}
        <aside className="w-64 border-r border-white/5 bg-[#0c111d] flex flex-col shrink-0">
           <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Project Explorer</span>
              <div className="flex gap-2">
                 <span className="material-icons-round text-sm text-slate-600 hover:text-white cursor-pointer">create_new_folder</span>
                 <span className="material-icons-round text-sm text-slate-600 hover:text-white cursor-pointer">unfold_less</span>
              </div>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
              {/* Root Folder Structure */}
              <div className="space-y-1">
                 <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-300">
                    <span className="material-icons-round text-sm transition-transform rotate-90">chevron_right</span>
                    <span className="material-icons-round text-sm text-primary">folder</span> Root Folder
                 </div>
                 
                 <div className="ml-4 space-y-1 border-l border-white/5 pl-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 cursor-pointer">
                       <span className="material-icons-round text-sm">chevron_right</span>
                       <span className="material-icons-round text-sm text-amber-500">folder</span> Assets
                    </div>
                    <div className="space-y-1">
                       <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-black text-primary bg-primary/10 border-l-2 border-primary rounded-r-lg">
                          <span className="material-icons-round text-sm rotate-90">chevron_right</span>
                          <span className="material-icons-round text-sm opacity-60">folder</span> Components
                       </div>
                       <div className="ml-4 border-l border-white/10 pl-2 space-y-0.5">
                          {['Navbar.tsx', 'HeroSection.tsx', 'Footer.tsx'].map(file => (
                             <div key={file} className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium text-slate-500 hover:text-white cursor-pointer">
                                <span className="material-icons-round text-[14px]">code</span> {file}
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 cursor-pointer">
                       <span className="material-icons-round text-sm">chevron_right</span>
                       <span className="material-icons-round text-sm text-rose-500">folder</span> Images
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 cursor-pointer">
                       <span className="material-icons-round text-sm">chevron_right</span>
                       <span className="material-icons-round text-sm text-emerald-500">folder</span> Source Code
                    </div>
                 </div>
              </div>
           </div>

           {/* Sidebar Bottom: Storage Meter */}
           <div className="p-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-600">
                 <span>Storage Usage</span>
                 <span className="text-white">72%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-[72%] shadow-[0_0_10px_#2563EB]"></div>
              </div>
           </div>
        </aside>

        {/* 3. MAIN CONTENT AREA */}
        <main className="flex-1 bg-[#090b14] overflow-y-auto custom-scrollbar flex flex-col">
           
           {/* Folder Toolbar */}
           <div className="px-8 py-6 flex items-center justify-between sticky top-0 bg-[#090b14]/80 backdrop-blur-md z-40 border-b border-white/5">
              <div className="flex items-center gap-6">
                 <div className="relative group min-w-[400px]">
                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-lg">search</span>
                    <input type="text" placeholder="Search files and folders..." className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-xs text-slate-300 outline-none focus:border-primary/40 transition-all" />
                 </div>
                 <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                    <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-slate-600'}`}><span className="material-icons-round text-sm">grid_view</span></button>
                    <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-primary text-white' : 'text-slate-600'}`}><span className="material-icons-round text-sm">view_list</span></button>
                 </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-white/5 rounded-xl text-[10px] font-black uppercase text-slate-400">
                    Sort: Type <span className="material-icons-round text-xs">expand_more</span>
                 </div>
                 <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white hover:bg-white/10 transition-all uppercase tracking-widest">
                    <span className="material-icons-round text-sm">add</span> New Folder
                 </button>
              </div>
           </div>

           {/* Grid View */}
           <div className="p-8 space-y-12 flex-1">
              <div>
                 <div className="flex items-center gap-3 mb-8">
                    <span className="material-icons-round text-primary text-2xl">folder</span>
                    <h2 className="text-xl font-black text-white tracking-tight">Components <span className="text-slate-600 font-medium ml-2 text-sm">(12 Items)</span></h2>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {files.map((file, i) => (
                       <div key={i} className="bg-[#141824] border border-white/5 rounded-[24px] overflow-hidden group hover:border-primary/40 transition-all shadow-xl cursor-pointer">
                          {file.type === 'code' ? (
                             <div className="p-6 h-40 bg-black/40 font-mono text-[10px] leading-relaxed text-slate-500 overflow-hidden relative">
                                <div className="absolute top-4 left-4 px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-black rounded uppercase">JS</div>
                                <pre className="mt-4">{file.content}</pre>
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#141824] to-transparent"></div>
                             </div>
                          ) : (
                             <div className="h-40 bg-slate-800 relative overflow-hidden">
                                <img src={file.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={file.name} />
                                <div className="absolute top-4 right-4 text-white"><span className="material-icons-round text-sm">image</span></div>
                             </div>
                          )}
                          <div className="p-5 flex items-center justify-between">
                             <div>
                                <h4 className="text-xs font-black text-white truncate max-w-[140px]">{file.name}</h4>
                                <div className="flex items-center gap-2 mt-1 text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                                   <span>{file.size}</span>
                                   <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                                   <span>Modified {file.modified}</span>
                                </div>
                             </div>
                             <span className="material-icons-round text-slate-700 group-hover:text-primary transition-colors">more_vert</span>
                          </div>
                       </div>
                    ))}
                    
                    {/* Upload Placeholder */}
                    <div className="bg-transparent border-2 border-dashed border-white/5 rounded-[24px] flex flex-col items-center justify-center p-8 text-slate-600 hover:border-primary/40 hover:text-primary transition-all cursor-pointer group">
                       <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="material-icons-round text-2xl">cloud_upload</span>
                       </div>
                       <p className="text-[10px] font-black uppercase tracking-[0.2em]">Upload Asset</p>
                    </div>
                 </div>
              </div>

              {/* Bottom Activity Table */}
              <section className="pt-12 border-t border-white/5">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-8">Recent Activity</h3>
                 <div className="bg-[#141824] rounded-[24px] border border-white/5 overflow-hidden shadow-2xl">
                    <table className="w-full text-left">
                       <thead className="bg-black/20 text-[9px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                          <tr>
                             <th className="px-8 py-4">Name</th>
                             <th className="px-8 py-4">Size</th>
                             <th className="px-8 py-4">Status</th>
                             <th className="px-8 py-4 text-right">Action</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5 text-[11px] font-bold">
                          {[
                            { name: 'ProjectConfig.json', size: '2.1 KB', status: 'IDLE', col: 'slate-500' },
                            { name: 'README.md', size: '15.4 KB', status: 'MODIFIED', col: 'primary' }
                          ].map((row, i) => (
                             <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="px-8 py-5 flex items-center gap-4">
                                   <span className="material-icons-round text-primary text-sm">description</span>
                                   <span className="text-white">{row.name}</span>
                                </td>
                                <td className="px-8 py-5 text-slate-500 font-mono text-[10px]">{row.size}</td>
                                <td className="px-8 py-5">
                                   <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${row.status === 'MODIFIED' ? 'bg-primary/10 text-primary' : 'bg-slate-800 text-slate-500'}`}>
                                      {row.status}
                                   </span>
                                </td>
                                <td className="px-8 py-5 text-right">
                                   <button className="material-icons-round text-slate-700 hover:text-white transition-colors">download</button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </section>
           </div>
        </main>

        {/* 4. SMALL RIGHT ACTION BAR */}
        <aside className="w-14 border-l border-white/5 bg-[#0c111d] flex flex-col items-center py-6 gap-6 shrink-0">
           <button className="p-2 text-primary bg-primary/10 rounded-lg"><span className="material-icons-round text-lg">folder</span></button>
           <button className="p-2 text-slate-600 hover:text-white transition-colors"><span className="material-icons-round text-lg">history</span></button>
           <button className="p-2 text-slate-600 hover:text-white transition-colors"><span className="material-icons-round text-lg">tune</span></button>
           <div className="mt-auto">
              <button className="p-2 text-slate-600 hover:text-white transition-colors"><span className="material-icons-round text-lg">help_outline</span></button>
           </div>
        </aside>
      </div>

      {/* 5. ENGINEERING FOOTER STATUS BAR */}
      <footer className="h-8 border-t border-white/5 bg-[#090b14] px-6 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-slate-700 shrink-0">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors uppercase">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
               Connected to Studio_Node_04
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
               <span className="material-icons-round text-xs">terminal</span>
               Bash
            </div>
         </div>
         <div className="flex items-center gap-8">
            <span className="opacity-60">UTF-8</span>
            <div className="flex items-center gap-2">
               <span className="material-icons-round text-xs">code</span>
               TypeScript
            </div>
            <div className="flex items-center gap-2 text-slate-500">
               <span className="material-icons-round text-xs animate-spin">sync</span>
               Last Sync: Just now
            </div>
         </div>
      </footer>
    </div>
  );
};

export default FileManagerPage;
