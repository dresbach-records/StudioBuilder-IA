
import React from 'react';
import Card from '../../../components/ui/Card';
// Added missing import for Badge component
import Badge from '../../../components/ui/Badge';

const AuditLogPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Security Audit Log</h1>
          <p className="text-slate-500">Immutable record of all platform interactions and infrastructure events.</p>
        </div>
        <button className="px-6 py-2.5 bg-rose-500 text-white rounded-xl font-bold shadow-lg shadow-rose-500/20">
          Emergency Lockdown
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-emerald-500">
           <div className="flex justify-between items-center mb-2">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Sessions</span>
             <span className="text-emerald-500 font-bold text-xs">HEALTHY</span>
           </div>
           <h3 className="text-3xl font-black">128</h3>
        </Card>
        <Card className="p-6 border-l-4 border-l-amber-500">
           <div className="flex justify-between items-center mb-2">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Failed Logins</span>
             <span className="text-amber-500 font-bold text-xs">MONITORING</span>
           </div>
           <h3 className="text-3xl font-black">14</h3>
        </Card>
        <Card className="p-6 border-l-4 border-l-primary">
           <div className="flex justify-between items-center mb-2">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Data Integrity</span>
             <span className="text-primary font-bold text-xs">VERIFIED</span>
           </div>
           <h3 className="text-3xl font-black">100%</h3>
        </Card>
      </div>

      <Card className="overflow-hidden">
         <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
            <h4 className="font-bold">Real-time Event Stream</h4>
            <div className="flex gap-2">
               <input type="text" placeholder="Filter events..." className="px-4 py-1.5 bg-slate-100 dark:bg-white/5 border-none rounded-lg text-xs outline-none" />
               <button className="p-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-slate-500"><span className="material-icons-round text-sm">tune</span></button>
            </div>
         </div>
         <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { event: 'User Permission Change', user: 'Alex Sterling', target: ' Sarah Chen (Role: Manager)', time: '2 mins ago', severity: 'High', icon: 'security' },
              { event: 'Database Schema Export', user: 'Architect Agent', target: 'Project Orion', time: '14 mins ago', severity: 'Med', icon: 'storage' },
              { event: 'Login Succeeded', user: 'Marcus Aurelius', target: '192.168.1.104 (Chrome/OSX)', time: '21 mins ago', severity: 'Low', icon: 'login' },
              { event: 'Payment Method Updated', user: 'Pixel Studio', target: 'Visa ****4242', time: '1h ago', severity: 'Med', icon: 'credit_card' }
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                   log.severity === 'High' ? 'bg-rose-500/10 text-rose-500' : 
                   log.severity === 'Med' ? 'bg-amber-500/10 text-amber-500' : 'bg-primary/10 text-primary'
                 }`}>
                    <span className="material-icons-round text-lg">{log.icon}</span>
                 </div>
                 <div className="flex-1">
                    <p className="text-sm font-bold">{log.event}</p>
                    <p className="text-xs text-slate-500">Actor: <span className="font-bold text-slate-700 dark:text-slate-300">{log.user}</span> → {log.target}</p>
                 </div>
                 <div className="text-right shrink-0">
                    <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">{log.time}</p>
                    <Badge variant={log.severity === 'High' ? 'danger' : log.severity === 'Med' ? 'warning' : 'primary'} className="mt-1">
                       {log.severity} SEVERITY
                    </Badge>
                 </div>
              </div>
            ))}
         </div>
      </Card>
    </div>
  );
};

export default AuditLogPage;
