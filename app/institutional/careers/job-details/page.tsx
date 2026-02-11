
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';
import Badge from '../../../../components/ui/Badge';

const JobDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/institutional/careers/success');
    }, 1500);
  };

  return (
    <div className="bg-[#0c0a1d] min-h-screen text-white font-sans selection:bg-primary/30">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <Link to="/institutional/careers" className="hover:text-white transition-colors">Carreiras</Link>
        <span className="material-icons-round text-[10px]">chevron_right</span>
        <span>Engenharia</span>
        <span className="material-icons-round text-[10px]">chevron_right</span>
        <span className="text-slate-300">Desenvolvedor Backend Sênior</span>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Conteúdo da Vaga (Esquerda) */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-secondary/20 border-secondary/30 text-secondary-light flex items-center gap-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              VAGA ABERTA
            </Badge>
            <h1 className="text-6xl font-black leading-tight tracking-tight">Desenvolvedor Backend Sênior</h1>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
              <span className="flex items-center gap-2">
                <span className="material-icons-round text-primary text-lg">place</span> Remoto (Brasil)
              </span>
              <span className="flex items-center gap-2">
                <span className="material-icons-round text-primary text-lg">work</span> Full-time
              </span>
              <span className="flex items-center gap-2">
                <span className="material-icons-round text-primary text-lg">payments</span> R$ 18k - R$ 25k
              </span>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Sobre a Vaga</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              No StudioBuilder AI, estamos redefinindo a engenharia de software através da inteligência artificial generativa. Procuramos um Engenheiro Backend Sênior para liderar a construção de sistemas distribuídos de alta escala que servem de base para nossa plataforma. Você trabalhará em um ambiente de engenharia puro, focado em performance e código limpo.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Responsabilidades</h2>
            <ul className="space-y-4">
              {[
                "Projetar e implementar micro-serviços escaláveis utilizando Go e Node.js.",
                "Otimizar consultas em bancos de dados relacionais e NoSQL para alta performance.",
                "Mentorar desenvolvedores pleno e junior através de code reviews rigorosos.",
                "Contribuir para a arquitetura de sistemas baseados em eventos (Kafka/RabbitMQ)."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="material-icons-round text-primary text-xl">check_circle</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Requisitos Técnicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Backend Core', desc: 'Experiência profunda com Go ou Node.js (TypeScript).', col: 'primary' },
                { title: 'Infra & Cloud', desc: 'AWS (Lambda, EKS), Docker e Kubernetes.', col: 'primary' },
                { title: 'Data Storage', desc: 'PostgreSQL, Redis e compreensão de indexação.', col: 'primary' },
                { title: 'Architecture', desc: 'Micro-serviços, DDD e Event Driven Architecture.', col: 'primary' }
              ].map((req, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-primary/40 transition-all">
                  <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">{req.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{req.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Nossos Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Home Office', desc: 'Trabalhe de onde quiser, para sempre.', icon: 'home' },
                { title: 'Stock Options', desc: 'Seja sócio do StudioBuilder AI.', icon: 'trending_up' },
                { title: 'Tech Allowance', desc: 'Auxílio para o seu setup de ponta.', icon: 'laptop' }
              ].map((benefit, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto">
                    <span className="material-icons-round text-2xl">{benefit.icon}</span>
                  </div>
                  <h4 className="font-bold text-sm">{benefit.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Banner decorativo opcional baseado na imagem */}
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] flex items-end p-12 bg-slate-900 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" alt="Engine" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black">Engineering Excellence</h3>
              <p className="text-slate-400 font-bold text-sm">Construindo o futuro da produtividade dev.</p>
            </div>
          </div>
        </div>

        {/* Sidebar Formulário (Direita) */}
        <div className="lg:col-span-5 space-y-8">
          <Card className="p-10 bg-white/5 border border-white/10 rounded-[32px] shadow-2xl sticky top-24">
            <div className="space-y-2 mb-8">
              <h3 className="text-2xl font-black">Candidatura Rápida</h3>
              <p className="text-xs text-slate-500">Leva apenas 2 minutos. Prometemos retorno em 48h.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Nome Completo</label>
                  <input required type="text" placeholder="Ex: Lucas Silva" className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-700 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">E-mail Corporativo</label>
                  <input required type="email" placeholder="lucas@empresa.com" className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-700 text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">LinkedIn</label>
                    <input type="text" placeholder="linkedin.com/in/..." className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-700 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">GitHub</label>
                    <input type="text" placeholder="github.com/..." className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-700 text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Currículo (PDF)</label>
                  <div className="border-2 border-dashed border-white/5 rounded-2xl py-10 flex flex-col items-center justify-center text-slate-600 hover:border-primary/40 transition-all cursor-pointer group bg-slate-900/50">
                    <span className="material-icons-round text-3xl mb-3 group-hover:text-primary transition-colors">cloud_upload</span>
                    <p className="text-[10px] font-bold"><span className="text-primary">Clique para upload</span> ou arraste o arquivo aqui</p>
                    <p className="text-[8px] mt-2 opacity-50 uppercase tracking-widest">Máximo: 5MB</p>
                  </div>
                </div>
              </div>

              <Button 
                isLoading={isSubmitting}
                className="w-full py-5 bg-secondary hover:bg-purple-600 shadow-xl shadow-secondary/20 text-lg group"
                type="submit"
              >
                Enviar Candidatura <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">send</span>
              </Button>

              <p className="text-[9px] text-center text-slate-600 leading-relaxed uppercase tracking-wider">
                Ao clicar em enviar, você aceita nossa <Link to="/institutional/privacy" className="text-slate-400 hover:underline">Política de Privacidade</Link> e autoriza o contato de nossos recrutadores.
              </p>
            </form>
          </Card>

          <Card className="p-8 bg-white/5 border border-white/10 rounded-[32px] flex items-center gap-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
              <span className="material-icons-round text-2xl">card_giftcard</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Conhece alguém ideal?</h4>
              <p className="text-[10px] text-slate-500 mt-1">Indique e ganhe um bônus de R$ 2.000 se contratado.</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default JobDetailsPage;
