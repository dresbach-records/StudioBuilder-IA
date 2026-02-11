
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import ProjectData interface
import { useProjectWizard, ProjectData } from '../../../../context/ProjectWizardContext';
import Button from '../../../../components/ui/Button';

const WizardStep3: React.FC = () => {
  const { data, updateData } = useProjectWizard();
  const navigate = useNavigate();

  const styles: Array<{ id: ProjectData['style']; icon: string }> = [
    { id: 'Modern', icon: 'rocket_launch' },
    { id: 'Corporate', icon: 'business' },
    { id: 'Minimalist', icon: 'grid_view' },
    { id: 'Premium', icon: 'diamond' },
  ];

  return (
    <div className="bg-[#0c0a1d] text-white">
      <div className="p-12 space-y-12">
        <div className="flex justify-between items-center">
           <span className="text-[10px] font-bold text-primary tracking-widest uppercase opacity-80">Step 3 of 5</span>
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">60% Completed</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-5xl font-black leading-tight">Visual Identity & Technical Assets</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Define the aesthetic foundation of your project. These assets help our AI engine generate a cohesive design language that aligns with your brand's vision and technical requirements.</p>
            
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
               <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">AI Context Hint</p>
               <p className="text-xs text-slate-400 leading-relaxed">Uploading high-resolution vector logos and high-fidelity reference images significantly improves the accuracy of the generated UI prototypes.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-icons-round">auto_awesome</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">Select Design Direction</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {styles.map(s => (
                    <div 
                      key={s.id}
                      onClick={() => updateData({ style: s.id })}
                      className={`aspect-square rounded-xl border-2 cursor-pointer flex flex-col items-center justify-center gap-4 transition-all ${
                        data.style === s.id 
                        ? 'border-primary bg-primary/10' 
                        : 'border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${data.style === s.id ? 'bg-primary/20' : 'bg-white/5'}`}>
                         <span className="material-icons-round text-2xl">{s.icon}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{s.id}</span>
                      {data.style === s.id && <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center"><span className="material-icons-round text-[10px] text-white font-black">check</span></div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                 <div className="flex items-center gap-2 text-primary">
                    <span className="material-icons-round">palette</span>
                    <h3 className="text-sm font-bold uppercase tracking-widest">Color Palette</h3>
                 </div>
                 <div className="flex gap-8">
                    <div className="space-y-2 flex-1">
                       <label className="text-[9px] font-bold uppercase text-slate-600">Primary Brand Color</label>
                       <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                          <div className="w-8 h-8 rounded bg-primary shadow-lg shadow-primary/20"></div>
                          <input type="text" className="bg-transparent border-none outline-none font-mono text-sm" value="#4b2bee" readOnly />
                       </div>
                    </div>
                    <div className="space-y-2 flex-1">
                       <label className="text-[9px] font-bold uppercase text-slate-600">Suggested Palettes</label>
                       <div className="flex gap-2 pt-4">
                          {[1,2,3].map(i => <div key={i} className="flex -space-x-1">
                             <div className="w-5 h-5 rounded-full bg-slate-800 border border-black/20"></div>
                             <div className="w-5 h-5 rounded-full bg-slate-600 border border-black/20"></div>
                             <div className="w-5 h-5 rounded-full bg-primary border border-black/20"></div>
                          </div>)}
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                     <span className="material-icons-round text-sm">image</span>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest">Brand Logo</h4>
                  </div>
                  <div className="border-2 border-dashed border-white/5 rounded-2xl py-12 flex flex-col items-center justify-center text-slate-500 hover:border-primary transition-all cursor-pointer">
                     <span className="material-icons-round text-2xl mb-2">cloud_upload</span>
                     <p className="text-[10px] font-bold">Drop SVG or PNG</p>
                     <p className="text-[8px] mt-1 opacity-50 uppercase tracking-widest">Max 10MB • 1024x1024 recommended</p>
                  </div>
               </div>
               <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                     <span className="material-icons-round text-sm">description</span>
                     <h4 className="text-[10px] font-bold uppercase tracking-widest">Technical Files</h4>
                  </div>
                  <div className="border-2 border-dashed border-white/5 rounded-2xl py-12 flex flex-col items-center justify-center text-slate-500 hover:border-primary transition-all cursor-pointer">
                     <span className="material-icons-round text-2xl mb-2">insert_drive_file</span>
                     <p className="text-[10px] font-bold">Drop PDF or DOCX</p>
                     <p className="text-[8px] mt-1 opacity-50 uppercase tracking-widest">Product specs, feature lists, etc.</p>
                  </div>
               </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
               <div className="flex items-center gap-2 text-primary">
                  <span className="material-icons-round text-sm">filter</span>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Visual Inspiration</h4>
               </div>
               <div className="grid grid-cols-4 gap-3">
                  <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-slate-500 hover:border-primary transition-all cursor-pointer">
                     <span className="material-icons-round">add</span>
                     <span className="text-[8px] font-bold uppercase mt-1">Add Image</span>
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                     <img src="https://picsum.photos/seed/insp1/200/150" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                     <img src="https://picsum.photos/seed/insp2/200/150" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 relative">
                     <div className="w-full h-1 bg-white/10 absolute bottom-0 left-0">
                        <div className="w-[40%] h-full bg-primary"></div>
                     </div>
                     <span className="text-[8px] font-black tracking-widest text-primary animate-pulse">UPLOADING...</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex items-center justify-between">
           <button onClick={() => navigate('/client/new-project/step-2')} className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-white transition-colors">
              <span className="material-icons-round">arrow_back</span>
              Back
           </button>
           <div className="flex items-center gap-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Skip for now</span>
              <Button 
                className="px-10 py-4 bg-primary shadow-primary/30"
                onClick={() => navigate('/client/new-project/step-4')}
              >
                Continue to Step 4 <span className="material-icons-round">arrow_forward</span>
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WizardStep3;
