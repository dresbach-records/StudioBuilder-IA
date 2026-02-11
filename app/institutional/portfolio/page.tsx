
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      title: 'QuantumPay Gateway',
      category: 'Fintech',
      desc: 'Infraestrutura de pagamentos distribuída com processamento de 10k req/s projetada por agentes autônomos.',
      stack: ['Next.js', 'Go', 'Redis'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'EcoSphere Dashboard',
      category: 'SaaS / ESG',
      desc: 'Plataforma de monitoramento ambiental com pipelines de dados em tempo real e visualização analítica.',
      stack: ['React', 'Python', 'AWS S3'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AeroLogistics OS',
      category: 'Enterprise',
      desc: 'Sistema operacional logístico para frotas autônomas, integrando mapeamento geoespacial e IA preditiva.',
      stack: ['Rust', 'GraphQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Helix Health Portal',
      category: 'Healthcare',
      desc: 'Portal de telemedicina em conformidade com HIPAA com criptografia de ponta a ponta gerada via StudioBuilder.',
      stack: ['Next.js', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Nova Market',
      category: 'E-commerce',
      desc: 'Marketplace escalável com sistema de busca por similaridade visual integrado via IA StudioBuilder.',
      stack: ['React', 'ClickHouse', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'CyberShield Console',
      category: 'Security',
      desc: 'Painel de controle de segurança cibernética com detecção de intrusão baseada em comportamento anômalo.',
      stack: ['TypeScript', 'Pinecone', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-20 space-y-4">
        <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
          Excelência em Engenharia
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Nosso Portfólio</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Exploração de sistemas arquitetados, desenvolvidos e implantados autonomamente pela engine StudioBuilder AI. 
          Resultados que unem performance técnica e design impecável.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {['Todos', 'SaaS', 'Fintech', 'Enterprise', 'Healthcare', 'Security'].map(filter => (
          <button key={filter} className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${filter === 'Todos' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'}`}>
            {filter}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <Card key={i} className="group overflow-hidden hover:border-primary/40 transition-all border-white/5 bg-white/5" hoverable>
            <div className="aspect-[16/10] relative overflow-hidden">
               <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100" />
               <div className="absolute top-4 left-4">
                  <Badge variant="primary" className="bg-primary/80 backdrop-blur-md border-none">{proj.category}</Badge>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{proj.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">{proj.desc}</p>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  {proj.stack.map(s => <span key={s} className="text-[9px] font-mono font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">{s}</span>)}
                </div>
                <span className="material-icons-round text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">arrow_forward</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center relative overflow-hidden">
         <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold">Inicie seu projeto hoje mesmo</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Nossos agentes de IA estão prontos para transformar sua visão em uma arquitetura robusta em questão de minutos.</p>
            <button className="px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all">
              Abrir Wizard de Projeto
            </button>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default PortfolioPage;
