
import React from 'react';
import Card from '../../../components/ui/Card';

const StackPage: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend Engine',
      desc: 'Interfaces ultra-performantes com foco em SEO e experiência do usuário (UX).',
      icon: 'web',
      items: [
        { name: 'Next.js 14', detail: 'App Router & Server Components' },
        { name: 'React 19', detail: 'Action Hooks & Concurrent Mode' },
        { name: 'Tailwind CSS', detail: 'Utility-First Styling Engine' },
        { name: 'TypeScript', detail: 'Static Typing for Enterprise Scale' }
      ]
    },
    {
      title: 'Backend & Orchestration',
      desc: 'Sistemas distribuídos e APIs robustas desenhadas para escalabilidade infinita.',
      icon: 'terminal',
      items: [
        { name: 'Node.js / Go', detail: 'High Performance Runtime' },
        { name: 'GraphQL', detail: 'Type-Safe Data Fetching' },
        { name: 'Redis', detail: 'Low-Latency Caching Layer' },
        { name: 'PostgreSQL', detail: 'Relational Data Integrity' }
      ]
    },
    {
      title: 'AI & Intelligence',
      desc: 'Agentes autônomos baseados em modelos de última geração integrados nativamente.',
      icon: 'auto_awesome',
      items: [
        { name: 'Gemini 3 Pro', detail: 'Complex Reasoning & Coding AI' },
        { name: 'Vector DBs', detail: 'Pinecone / Milvus for Context' },
        { name: 'LLM Fine-tuning', detail: 'Domain-Specific Agent Training' },
        { name: 'Prisma Client', detail: 'AI-Enhanced ORM Mapping' }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      desc: 'Nuvem empresarial com parcerias globais para 99.9% de disponibilidade.',
      icon: 'cloud_done',
      items: [
        { name: 'Hostinger Global', detail: 'Enterprise Server Partnership' },
        { name: 'Docker / K8s', detail: 'Container Orchestration' },
        { name: 'Vercel Edge', detail: 'Global Content Delivery' },
        { name: 'GitHub Actions', detail: 'Automated CI/CD Pipelines' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24 space-y-24">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-black tracking-tight mb-4">Stack Técnica</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Nossa arquitetura não é apenas moderna, é <span className="text-primary italic">autônoma</span>. 
          Utilizamos o estado da arte em tecnologia para garantir que cada projeto gerado pelo StudioBuilder AI seja resiliente, seguro e escalável.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techCategories.map((cat, i) => (
          <Card key={i} className="p-10 bg-white/5 border-white/5 hover:border-primary/20 transition-all">
            <div className="flex items-start gap-6">
               <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <span className="material-icons-round text-3xl">{cat.icon}</span>
               </div>
               <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{cat.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.items.map(item => (
                      <div key={item.name} className="p-4 rounded-xl bg-background-dark/50 border border-white/5 hover:border-white/10 transition-colors">
                        <p className="text-sm font-bold text-slate-200">{item.name}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-tighter">{item.detail}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-3xl font-bold">Por que Hostinger?</h2>
          <p className="text-slate-400 leading-relaxed">
            Nossa parceria exclusiva com a Hostinger Enterprise permite que o StudioBuilder AI provisione nós de hospedagem 
            de alto desempenho em segundos, localizados em data centers Tier-3 globalmente.
          </p>
          <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
             <span className="material-icons-round text-emerald-500">bolt</span>
             <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Latência reduzida em 40%</p>
          </div>
        </div>
        <div className="lg:col-span-2 bg-slate-900 rounded-[32px] p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-icons-round text-[120px]">architecture</span>
           </div>
           <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Status da Engine v2.4</h4>
              </div>
              <div className="grid grid-cols-3 gap-8">
                 <div>
                    <p className="text-4xl font-black text-primary">0.14s</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-2">TTFB Global Médio</p>
                 </div>
                 <div>
                    <p className="text-4xl font-black text-secondary">100%</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-2">Type-Safety Coverage</p>
                 </div>
                 <div>
                    <p className="text-4xl font-black text-emerald-500">99.9%</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-2">Uptime de Deployment</p>
                 </div>
              </div>
              <div className="pt-8 border-t border-white/5 flex items-center gap-6">
                 <img src="https://img.icons8.com/color/48/amazon-web-services.png" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" alt="AWS" title="Infrastrutura Core" />
                 <img src="https://img.icons8.com/color/48/google-logo.png" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" alt="GCP" title="AI Training Nodes" />
                 <img src="https://img.icons8.com/color/48/stripe.png" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" alt="Stripe" title="Global Payments" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StackPage;
