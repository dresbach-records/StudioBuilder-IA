
import React from 'react';

const PermissionsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Permissions Management</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Configure granular access controls for your collaborative engineering workspace.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20">
          Save Role Settings
        </button>
      </div>

      <div className="flex gap-2 border-b border-slate-200 dark:border-border-dark p-1">
        {['Manager', 'Developer', 'Designer'].map((role, i) => (
          <button 
            key={role}
            className={`px-6 py-3 text-sm font-semibold rounded-t-lg transition-all ${
              i === 0 ? 'bg-primary/10 text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-panel-dark border border-slate-200 dark:border-border-dark rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-border-dark">
            <tr>
              <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-500">Module</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-500">Description</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-500 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { module: 'AI Generation', desc: 'Access to LLM prompts, model selection, and fine-tuning parameters.', active: true },
              { module: 'Code Editing', desc: 'Modify source code, manage branches, and initiate pull requests.', active: true },
              { module: 'Database Access', desc: 'Direct access to querying, schema migrations, and backup tools.', active: false },
              { module: 'Billing & Ops', desc: 'Manage subscription plans, payment methods, and invoices.', active: false },
            ].map((perm, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-icons-round text-sm">settings_suggest</span>
                    </div>
                    <span className="font-bold text-sm">{perm.module}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-slate-500">{perm.desc}</td>
                <td className="px-6 py-5 text-right">
                  <button className={`w-12 h-6 rounded-full relative transition-all ${perm.active ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${perm.active ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-4">
        <span className="material-icons-round text-amber-500">report_problem</span>
        <div className="text-sm">
          <p className="font-bold text-amber-600 dark:text-amber-400">Security Warning</p>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Modifying these permissions will affect all sessions immediately. Users might need to re-authenticate to reflect these changes.</p>
        </div>
      </div>
    </div>
  );
};

export default PermissionsPage;
