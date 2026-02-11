
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden pt-24 sm:pt-32">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30 animate-pulse"></div>
      <div className="absolute top-[400px] right-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full -z-10 opacity-20"></div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 text-center space-y-12">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] animate-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          Sistema Operacional de Engenharia Autônoma
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white animate-in slide-in-from-bottom-8 duration-700">
          Software que se <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Constrói Sozinho.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-in fade-in duration-1000">
          StudioBuilder AI é a primeira plataforma SaaS de infraestrutura inteligente que orquestra agentes de engenharia para criar, implantar e escalar aplicações empresariais sem intervenção humana constante.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-in zoom-in-95 duration-1000">
          <Button 
            onClick={() => navigate('/register')}
            size="lg" 
            className="w-full sm:w-auto px-12 py-5 bg-primary text-white shadow-2xl shadow-primary/30 text-lg group"
          >
            Criar Meu Projeto
            <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">rocket_launch</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto px-12 py-5 border-white/10 text-white hover:bg-white/5"
            onClick={() => navigate('/institutional/portfolio')}
          >
            Ver Demonstração
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 sm:mt-24 relative max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-black/40 p-2 sm:p-4 shadow-[0_0_100px_rgba(37,99,235,0.1)] group">
           <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
           <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80" 
                className="w-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                alt="System Preview" 
              />
           </div>
           <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-12 lg:left-12 z-20 text-left space-y-2 sm:space-y-4">
              <div className="flex gap-2">
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-rose-500"></div>
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
              </div>
              <p className="text-xs sm:text-sm font-mono text-emerald-500">$ studio-builder --deploy --autonomous</p>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-black tracking-widest">Engine v4.2.0 Stable Connected</p>
           </div>
        </div>
      </section>

      {/* Serviços / Diferenciais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: 'IA Architect', 
            desc: 'Agentes que planejam arquiteturas escaláveis em Next.js e Cloud Native instantaneamente.',
            icon: 'psychology', 
            color: 'primary' 
          },
          { 
            title: 'Auto-Infrastructure', 
            desc: 'Provisionamento automático de clusters Hostinger e AWS com monitoramento real-time.',
            icon: 'dns', 
            color: 'emerald-500' 
          },
          { 
            title: 'Secure Audit', 
            desc: 'Cada linha de código é revisada por IA para garantir conformidade com SOC2 e LGPD.',
            icon: 'shield', 
            color: 'secondary' 
          }
        ].map((item, i) => (
          <div key={i} className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[32px] hover:border-primary/40 transition-all group space-y-6">
            <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center text-${item.color} group-hover:scale-110 transition-transform`}>
              <span className="material-icons-round text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="bg-primary/5 border-y border-white/5 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-8">
           <h2 className="text-3xl sm:text-4xl font-black text-white">Pronto para digitalizar sua engenharia?</h2>
           <p className="text-slate-400">Junte-se a centenas de empresas que já utilizam agentes autônomos para acelerar seu roadmap de produto.</p>
           <div className="flex justify-center">
              <Button onClick={() => navigate('/institutional/inquiry')} size="lg" className="px-12 py-5 shadow-2xl shadow-primary/20">Falar com um Especialista</Button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
