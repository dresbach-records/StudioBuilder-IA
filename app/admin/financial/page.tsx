
import React from 'react';

const FinancialPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Financial Ledger</h1>
          <p className="text-slate-500">Revenue tracking and infrastructure cost management.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-lg text-sm font-bold">Invoice History</button>
           <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">Payouts</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'MTD Revenue', val: '$142,500.00', color: 'primary' },
          { label: 'Infra Burn Rate', val: '$12,400.00', color: 'rose-500' },
          { label: 'Net Profit', val: '$130,100.00', color: 'emerald-500' }
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-panel-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
             <h3 className={`text-2xl font-black text-${item.color}`}>{item.val}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-panel-dark rounded-2xl border border-slate-200 dark:border-border-dark overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/5 font-bold">Recent Transactions</div>
        <div className="p-6 space-y-4">
           {[
             { entity: 'Acme Cloud Corp', type: 'Subscription', amount: '+$790.00', date: 'Just now' },
             { entity: 'Hostinger Nodes', type: 'Infrastructure', amount: '-$1,200.00', date: '2h ago' },
             { entity: 'Pixel Studio', type: 'Enterprise Payout', amount: '+$4,500.00', date: '5h ago' }
           ].map((tx, i) => (
             <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-black/20 rounded-xl">
               <div className="flex items-center gap-4">
                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tx.amount.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                   <span className="material-icons-round">{tx.amount.startsWith('+') ? 'add' : 'remove'}</span>
                 </div>
                 <div>
                   <p className="text-sm font-bold">{tx.entity}</p>
                   <p className="text-[10px] text-slate-500 uppercase">{tx.type}</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{tx.amount}</p>
                 <p className="text-[10px] text-slate-500">{tx.date}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialPage;
