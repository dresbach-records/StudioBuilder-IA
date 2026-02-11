
import React from 'react';

const ProductPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Nosso Produto</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl italic">Potencializando a criação de software com agentes de IA autônomos.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">Engenharia Autônoma</h2>
          <p className="text-slate-400 leading-relaxed">O StudioBuilder AI não é apenas um editor de código; é uma força de trabalho digital. Nossos agentes analisam briefings, projetam arquiteturas de dados e entregam código pronto para produção em tempo recorde.</p>
          <ul className="space-y-4">
             {['Deploy Contínuo AI', 'Refatoração Automática', 'Segurança Integrada', 'Design System Escalável'].map(f => (
               <li key={f} className="flex items-center gap-3">
                 <span className="material-icons-round text-primary">check_circle</span>
                 <span className="font-semibold">{f}</span>
               </li>
             ))}
          </ul>
        </div>
        <div className="relative aspect-video rounded-3xl bg-slate-800 overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/seed/product/1200/800" className="w-full h-full object-cover opacity-60" alt="Product" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
               <span className="material-icons-round text-white text-3xl">play_arrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
