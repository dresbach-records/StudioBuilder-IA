
import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const DesignLibrary: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Design System</h1>
          <p className="text-slate-500">Manage global tokens, UI components, and brand consistency.</p>
        </div>
        <Button icon="palette">Config Styles</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Color Palette</h3>
          <div className="grid grid-cols-4 gap-4">
             {['bg-primary', 'bg-secondary', 'bg-emerald-500', 'bg-rose-500', 'bg-amber-500', 'bg-indigo-500', 'bg-slate-900', 'bg-slate-100'].map(c => (
               <div key={c} className="space-y-2">
                 <div className={`aspect-square rounded-xl ${c} shadow-sm border border-black/5`}></div>
                 <p className="text-[10px] font-mono text-center opacity-50">{c.split('-')[1]}</p>
               </div>
             ))}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Typography</h3>
          <div className="space-y-6">
             <div>
               <p className="text-4xl font-black">Heading Extra</p>
               <p className="text-xs text-slate-400 mt-1 font-mono tracking-widest">INTER BLACK / 36PX</p>
             </div>
             <div>
               <p className="text-xl font-bold">Subheading Medium</p>
               <p className="text-xs text-slate-400 mt-1 font-mono tracking-widest">INTER BOLD / 20PX</p>
             </div>
             <div>
               <p className="text-sm text-slate-500">Body regular font used for long paragraphs and general interface labels throughout the system.</p>
               <p className="text-xs text-slate-400 mt-1 font-mono tracking-widest">INTER REGULAR / 14PX</p>
             </div>
          </div>
        </Card>
      </div>

      <Card className="p-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Component Preview</h3>
        <div className="flex flex-wrap gap-6 items-center">
           <Button>Primary Action</Button>
           <Button variant="secondary">Secondary Action</Button>
           <Button variant="outline">Outline Button</Button>
           <Button variant="ghost">Ghost Link</Button>
           <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
              <span className="material-icons-round text-primary">verified</span>
              <span className="text-sm font-medium">Standard Icon Badge</span>
           </div>
        </div>
      </Card>
    </div>
  );
};

export default DesignLibrary;
