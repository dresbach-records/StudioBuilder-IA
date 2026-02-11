
import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const HostingPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Infraestrutura e Hospedagem</h1>
        <p className="text-slate-500 mt-1">Gerencie seus nós de hospedagem e servidores ativos.</p>
      </div>

      <Card className="p-8 border-none bg-slate-900 text-white shadow-2xl relative overflow-hidden">
         <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-icons-round">dns</span>
               </div>
               <div>
                  <h3 className="text-xl font-bold">Node-SB-0442</h3>
                  <p className="text-xs text-slate-400">AWS Enterprise Cluster • Sao Paulo (sa-east-1)</p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
               <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Status</p>
                  <p className="text-emerald-500 font-bold flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                     ONLINE
                  </p>
               </div>
               <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Uptime</p>
                  <p className="font-bold">99.98%</p>
               </div>
               <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">IP do Servidor</p>
                  <p className="font-mono text-sm">18.231.42.102</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Button size="sm">Reiniciar Nó</Button>
               <Button size="sm" variant="outline" className="border-white/10 text-white">Ver Logs de Acesso</Button>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <Card className="p-6">
            <h4 className="font-bold mb-4">Certificados SSL</h4>
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
               <div className="flex items-center gap-3">
                  <span className="material-icons-round text-emerald-500">verified_user</span>
                  <span className="text-sm font-medium">Auto-SSL Let's Encrypt</span>
               </div>
               <Badge variant="success">Ativo</Badge>
            </div>
         </Card>
         <Card className="p-6">
            <h4 className="font-bold mb-4">Backups Automatizados</h4>
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
               <div className="flex items-center gap-3">
                  <span className="material-icons-round text-primary">backup</span>
                  <span className="text-sm font-medium">Último snapshot: Hoje, 04:12</span>
               </div>
               <Badge variant="primary">OK</Badge>
            </div>
         </Card>
      </div>
    </div>
  );
};

export default HostingPage;
