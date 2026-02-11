
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../../../components/ui/Card';
import Badge from '../../../../components/ui/Badge';
import Button from '../../../../components/ui/Button';

const ProjectDashboard: React.FC = () => {
  const { projectId } = useParams();
  const projects = JSON.parse(localStorage.getItem('sb_projects') || '[]');
  const project = projects.find((p: any) => p.id === projectId) || {
    name: 'Redesign Identidade Visual - StudioBuilder',
    status: 'Em Análise',
    progress: 15,
    budget: 'R$ 4.500,00'
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      {/* Header Contextual */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-panel-dark p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
         <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PROJETO</p>
            <h1 className="text-3xl font-black tracking-tight">{project.name}</h1>
         </div>
         <div className="flex items-center gap-8">
            <div className="space-y-2">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">STATUS</p>
               <Badge variant="primary" className="px-4 py-1.5 flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  {project.status}
               </Badge>
            </div>
            <div className="space-y-2 min-w-[200px]">
               <div className="flex justify-between items-center mb-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PROGRESSO GERAL</p>
                  <span className="text-[10px] font-black text-primary">{project.progress}%</span>
               </div>
               <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
               </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-primary relative"><span className="material-icons-round">notifications</span><span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-panel-dark"></span></button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100 dark:border-white/5">
               <div className="text-right">
                  <p className="text-xs font-bold leading-none">Olá, Ricardo</p>
               </div>
               <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden"><img src="https://picsum.photos/seed/ricardo/100/100" /></div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 space-y-8">
            {/* Responsável e Prazo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                     <span className="material-icons-round text-3xl">person</span>
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">GERENTE DO PROJETO</p>
                     <h4 className="font-bold text-lg">Beatriz Mendes</h4>
                     <button className="text-[10px] text-primary font-bold hover:underline uppercase tracking-tighter">Ver Perfil & Contato</button>
                  </div>
               </Card>
               <Card className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                     <span className="material-icons-round text-3xl">calendar_month</span>
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">PREVISÃO DE ENTREGA</p>
                     <h4 className="font-bold text-lg">14 de Novembro, 2023</h4>
                     <p className="text-[10px] text-slate-400">Cronograma atualizado em 28 Out</p>
                  </div>
               </Card>
            </div>

            {/* Linha do Tempo */}
            <Card className="p-8">
               <div className="flex items-center gap-2 mb-8">
                  <span className="material-icons-round text-primary">analytics</span>
                  <h3 className="font-bold">Linha do Tempo</h3>
               </div>
               <div className="space-y-12 ml-4">
                  {[
                    { title: 'Kick-off & Briefing', status: 'Concluído em 15 de Outubro', icon: 'check', active: true, done: true },
                    { title: 'Análise de Conceitos', status: 'Em andamento pela equipe criativa', icon: 'sync', active: true, done: false, badge: 'Fase Atual' },
                    { title: 'Entrega da Primeira V1', status: 'Previsão: 02 de Novembro', icon: 'schedule', active: false, done: false }
                  ].map((step, i) => (
                    <div key={i} className={`relative pl-10 border-l-2 last:border-l-0 ${step.done ? 'border-primary' : 'border-slate-100 dark:border-white/5'}`}>
                       <div className={`absolute top-0 left-0 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-panel-dark flex items-center justify-center shadow-lg transition-all ${
                         step.done ? 'bg-primary text-white' : step.active ? 'bg-primary/10 text-primary animate-pulse' : 'bg-slate-50 dark:bg-white/5 text-slate-300'
                       }`}>
                          <span className="material-icons-round text-sm">{step.icon}</span>
                       </div>
                       <div>
                          <p className={`font-bold ${step.active ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{step.title}</p>
                          <p className="text-xs text-slate-500 mt-1">{step.status}</p>
                          {step.badge && <Badge variant="ghost" className="mt-2">{step.badge}</Badge>}
                       </div>
                       {i < 2 && <div className="h-full"></div>}
                    </div>
                  ))}
               </div>
            </Card>

            {/* Escopo Confirmado */}
            <Card className="p-8">
               <div className="flex items-center gap-2 mb-8">
                  <span className="material-icons-round text-primary">checklist</span>
                  <h3 className="font-bold">Escopo Confirmado</h3>
               </div>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Identidade Visual</h4>
                     <ul className="space-y-3">
                        {['Logotipo Principal & Secundário', 'Paleta de Cores & Tipografia', 'Manual da Marca (PDF)'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-sm text-slate-500">
                             <span className="material-icons-round text-primary text-lg">check_circle</span>
                             {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Materiais Digitais</h4>
                     <ul className="space-y-3">
                        {['6 Templates p/ Redes Sociais', 'Assinatura de E-mail', 'Apresentação Comercial (Pitch Deck)'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-sm text-slate-500">
                             <span className="material-icons-round text-primary text-lg">check_circle</span>
                             {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </Card>
         </div>

         <div className="lg:col-span-4 space-y-8">
            {/* Financeiro */}
            <Card className="p-8">
               <div className="flex items-center gap-2 mb-6">
                  <span className="material-icons-round text-primary">payments</span>
                  <h3 className="font-bold">Financeiro</h3>
               </div>
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between items-center mb-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TOTAL DO CONTRATO</p>
                        <span className="text-xs font-bold text-emerald-500 uppercase">50% Pago</span>
                     </div>
                     <h2 className="text-3xl font-black">{project.budget}</h2>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500" style={{ width: '50%' }}></div>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                     <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-500 uppercase">Sinal de Entrada</span>
                        <span className="text-emerald-500 uppercase">Liquidado</span>
                     </div>
                     <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-500 uppercase">Parcela 2 (15 Nov)</span>
                        <button className="text-primary hover:underline uppercase">VER FATURA</button>
                     </div>
                  </div>
               </div>
            </Card>

            {/* Documentos */}
            <Card className="p-8">
               <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                     <span className="material-icons-round text-primary">folder</span>
                     <h3 className="font-bold">Documentos</h3>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">3 arquivos</span>
               </div>
               <div className="space-y-4">
                  {[
                    { name: 'Proposta_Comercial.pdf', date: '12 Out 2023', icon: 'picture_as_pdf', col: 'rose-500' },
                    { name: 'Briefing_Preenchido.docx', date: '14 Out 2023', icon: 'description', col: 'primary' },
                    { name: 'Contrato_Assinado.pdf', date: '15 Out 2023', icon: 'verified', col: 'emerald-500' }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group cursor-pointer">
                       <span className={`material-icons-round text-${doc.col}`}>{doc.icon}</span>
                       <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate">{doc.name}</p>
                          <p className="text-[10px] text-slate-500">{doc.date}</p>
                       </div>
                       <span className="material-icons-round text-slate-400 group-hover:text-primary transition-colors">download</span>
                    </div>
                  ))}
               </div>
            </Card>

            {/* Dúvidas ou Recados */}
            <Card className="p-8">
               <div className="flex items-center gap-2 mb-6">
                  <span className="material-icons-round text-primary">chat</span>
                  <h3 className="font-bold">Dúvidas ou Recados</h3>
               </div>
               <textarea className="w-full h-32 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary/50 resize-none placeholder:text-slate-400" placeholder="Envie uma mensagem rápida para a Beatriz..."></textarea>
               <Button className="w-full mt-4 py-4" icon="send">Enviar Mensagem</Button>
               <p className="text-[10px] text-center text-slate-400 mt-4 uppercase font-bold tracking-widest">Tempo médio de resposta: 4 horas úteis</p>
            </Card>
         </div>
      </div>

      <footer className="py-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
         <p className="text-[10px] font-bold uppercase tracking-widest text-center md:text-left">StudioBuilder AI © 2026 | Desenvolvido por vini amaral techlab.ltda</p>
         <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest justify-center">
            <Link to="/institutional/terms" className="hover:text-primary transition-colors">Termos de Uso</Link>
            <Link to="/institutional/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            <Link to="/client/support" className="hover:text-primary transition-colors">Suporte Central</Link>
         </div>
      </footer>
    </div>
  );
};

export default ProjectDashboard;
