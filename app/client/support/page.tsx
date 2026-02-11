
import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const SupportPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Central de Suporte</h1>
        <p className="text-slate-500 mt-1">Estamos aqui para ajudar com qualquer dúvida técnica ou financeira.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <Card className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <span className="material-icons-round text-primary">forum</span>
                 Novo Ticket de Atendimento
              </h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Departamento</label>
                       <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 text-sm">
                          <option>Suporte Técnico</option>
                          <option>Financeiro</option>
                          <option>Vendas</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Prioridade</label>
                       <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 text-sm">
                          <option>Baixa</option>
                          <option>Média</option>
                          <option>Alta / Urgente</option>
                       </select>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Assunto</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Resumo do seu problema..." />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Mensagem Detalhada</label>
                    <textarea rows={5} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" placeholder="Descreva em detalhes o que está acontecendo..."></textarea>
                 </div>
                 <Button className="w-full py-4 shadow-xl">Enviar Solicitação</Button>
              </form>
           </Card>
        </div>

        <div className="space-y-6">
           <Card className="p-6">
              <h4 className="font-bold mb-4">Outros Canais</h4>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <span className="material-icons-round text-primary text-xl">alternate_email</span>
                    <div>
                       <p className="text-sm font-bold">E-mail Direto</p>
                       <p className="text-xs text-slate-500">ajuda@studiobuilder.ai</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <span className="material-icons-round text-emerald-500 text-xl">whatsapp</span>
                    <div>
                       <p className="text-sm font-bold">WhatsApp Business</p>
                       <p className="text-xs text-slate-500">+55 (11) 98765-4321</p>
                    </div>
                 </div>
              </div>
           </Card>

           <Card className="p-6 bg-slate-900 text-white border-none">
              <h4 className="font-bold mb-2">Base de Conhecimento</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">Acesse tutoriais e respostas para as dúvidas mais comuns.</p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-xs transition-all">Ver Tutoriais</button>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
