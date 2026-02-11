
import React, { useState } from 'react';

const DigitalSignaturePage: React.FC = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="bg-white dark:bg-panel-dark rounded-3xl border border-slate-200 dark:border-border-dark overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20">
          <h1 className="text-2xl font-bold flex items-center gap-3">
             <span className="material-icons-round text-primary">draw</span>
             Master Service Agreement
          </h1>
          <p className="text-sm text-slate-500 mt-1">Version 2.4 - Last updated June 2024</p>
        </div>
        
        <div className="p-12 h-96 overflow-y-auto custom-scrollbar prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          <h3>1. Engagement</h3>
          <p>StudioBuilder AI ("Company") shall provide engineering services as described in the project blueprint selected by the Client ("Client").</p>
          <h3>2. AI Autonomy</h3>
          <p>The Client acknowledges that development involves autonomous agents. Quality assurance is performed by human engineers before final deployment.</p>
          <h3>3. Intellectual Property</h3>
          <p>Upon full payment, all custom source code generated specifically for the Client shall be transferred to the Client under a perpetual license.</p>
          <p>This is a standard mock agreement for engineering services. In a real application, this would contain detailed legal clauses.</p>
          <div className="h-48"></div>
        </div>

        <div className="p-8 bg-slate-50 dark:bg-black/40 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
             <label className="flex items-center gap-3 cursor-pointer">
               <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" checked={signed} onChange={() => setSigned(!signed)} />
               <span className="text-sm font-medium">I accept the terms and conditions outlined above.</span>
             </label>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl italic font-serif text-xl">
               {signed ? 'Alex Sterling' : 'Signature Required'}
             </div>
             <button disabled={!signed} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 disabled:opacity-50 transition-all">
               Finalize Signing
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignaturePage;
