
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjectWizard } from '../../../../context/ProjectWizardContext';
import Button from '../../../../components/ui/Button';

const WizardStep2: React.FC = () => {
  const { data, updateData } = useProjectWizard();
  const navigate = useNavigate();

  return (
    <div className="bg-[#0c0a1d] text-white">
      <div className="p-12 space-y-12">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary opacity-80">
           <span>Step 2 of 5</span>
           <span>Project Scope & Description</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl font-black leading-tight">Define your vision.</h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">Provide the technical and creative foundations for your project. This data helps our AI architect the perfect roadmap.</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Detailed Description</label>
              <span className="text-[9px] text-slate-600">Min. 200 characters recommended</span>
            </div>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-primary/50 text-sm h-48 resize-none placeholder:text-slate-600"
              placeholder="e.g. A high-performance SaaS platform for architectural visualization, allowing users to upload CAD files and generate photorealistic renders in real-time using cloud-based GPU clusters..."
              value={data.description}
              onChange={(e) => updateData({ description: e.target.value })}
            />
            <div className="text-right text-[10px] font-mono text-slate-600">{data.description.length} / 2000</div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Desired Functionalities</label>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-primary/50 text-sm h-40 resize-none placeholder:text-slate-600"
              placeholder="• User Authentication & RBAC&#10;• Real-time Collaboration Engine&#10;• Stripe Integration for Subscriptions&#10;• Automated PDF Report Generation"
              value={data.features}
              onChange={(e) => updateData({ features: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Business Differentiators</label>
            <input 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/50 text-sm placeholder:text-slate-600"
              placeholder="What makes this unique? e.g., Proprietary compression algorithm, first-to-market in EMEA"
              value={data.differentiator}
              onChange={(e) => updateData({ differentiator: e.target.value })}
            />
          </div>

          <div className="space-y-4">
             <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Site References & Benchmarks</label>
             <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 text-slate-500">
                      <span className="material-icons-round text-sm">link</span>
                      <input type="text" className="bg-transparent border-none outline-none text-sm w-full" placeholder="https://reference-site-one.com" />
                   </div>
                   <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-slate-400">
                      <span className="material-icons-round">add</span>
                   </button>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 text-slate-500">
                  <span className="material-icons-round text-sm">link</span>
                  <input type="text" className="bg-transparent border-none outline-none text-sm w-full" placeholder="Add another URL (Optional)" />
                </div>
             </div>
          </div>

          <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-4">
             <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-icons-round">lightbulb</span>
             </div>
             <div>
                <p className="text-xs font-bold text-primary mb-1">Pro Tip</p>
                <p className="text-xs text-slate-400 leading-relaxed">The more descriptive you are about the <span className="text-white">Business Differentiators</span>, the better our AI can suggest specific technology stacks and security protocols tailored to your unique competitive advantage.</p>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex items-center justify-between">
           <button onClick={() => navigate('/client/new-project/step-1')} className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-white transition-colors">
              <span className="material-icons-round">arrow_back</span>
              Back
           </button>
           <div className="flex items-center gap-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Step 2 of 5</span>
              <Button 
                className="px-10 py-4 bg-primary shadow-primary/30"
                onClick={() => navigate('/client/new-project/step-3')}
              >
                Continue to Stack <span className="material-icons-round">arrow_forward</span>
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WizardStep2;
