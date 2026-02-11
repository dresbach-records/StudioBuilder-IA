
import React from 'react';
import Card from '../../../components/ui/Card';

const SEOReport: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">SEO Audit Report</h1>
          <p className="text-slate-500">Autonomous visibility and performance analysis.</p>
        </div>
        <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20">
          Run Full Scan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'SEO Score', val: '94/100', color: 'emerald-500' },
          { label: 'Total Backlinks', val: '2,840', color: 'primary' },
          { label: 'Organic Traffic', val: '+45%', color: 'emerald-500' },
          { label: 'Crawl Errors', val: '02', color: 'rose-500' }
        ].map((item, i) => (
          <Card key={i} className="p-6">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
             <h3 className={`text-3xl font-black text-${item.color}`}>{item.val}</h3>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Card className="lg:col-span-8 overflow-hidden">
           <div className="p-6 border-b border-slate-100 dark:border-white/5 font-bold">Top Performing Keywords</div>
           <div className="p-0">
             <table className="w-full text-left">
               <thead className="bg-slate-50 dark:bg-white/5 text-[10px] uppercase font-bold text-slate-400">
                 <tr>
                    <th className="px-6 py-4">Keyword</th>
                    <th className="px-6 py-4">Position</th>
                    <th className="px-6 py-4">Volume</th>
                    <th className="px-6 py-4">Difficulty</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                 {[
                   { kw: 'ai engineering studio', pos: '#2', vol: '12.4k', diff: 'Med' },
                   { kw: 'autonomous sass builder', pos: '#1', vol: '4.2k', diff: 'Low' },
                   { kw: 'next.js architecture platform', pos: '#4', vol: '45k', diff: 'High' }
                 ].map((row, i) => (
                   <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                     <td className="px-6 py-4 font-bold">{row.kw}</td>
                     <td className="px-6 py-4 text-emerald-500 font-bold">{row.pos}</td>
                     <td className="px-6 py-4">{row.vol}</td>
                     <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.diff === 'High' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>{row.diff}</span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
           <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <span className="material-icons-round text-primary">auto_awesome</span>
                AI Recommendations
              </h4>
              <ul className="space-y-4 text-xs text-slate-500 leading-relaxed">
                 <li className="flex gap-2">
                   <span className="material-icons-round text-emerald-500 text-sm">check_circle</span>
                   Optimize H1 tags on /portfolio for "custom engineering".
                 </li>
                 <li className="flex gap-2">
                   <span className="material-icons-round text-emerald-500 text-sm">check_circle</span>
                   Implement JSON-LD structured data for FAQ section.
                 </li>
                 <li className="flex gap-2 text-rose-500">
                   <span className="material-icons-round text-sm">report_problem</span>
                   4 orphan pages detected. Add internal links from footer.
                 </li>
              </ul>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default SEOReport;
