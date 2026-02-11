
import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const BillingPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pagamentos e Cobrança</h1>
        <p className="text-slate-500 mt-1">Gerencie suas faturas, métodos de pagamento e histórico financeiro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-primary text-white border-none">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">Próximo Vencimento</p>
           <h3 className="text-3xl font-black">R$ 2.450,00</h3>
           <p className="text-xs mt-2 opacity-80 italic">Referente a: Desenvolvimento Sprint 3</p>
           <Button variant="secondary" className="w-full mt-6 bg-white text-primary hover:bg-slate-50 shadow-none">Pagar Fatura</Button>
        </Card>

        <Card className="p-6">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-slate-500">Método Padrão</p>
           <div className="flex items-center gap-4 mt-2">
              <span className="material-icons-round text-3xl text-slate-400">credit_card</span>
              <div>
                 <p className="font-bold text-sm">•••• •••• •••• 4242</p>
                 <p className="text-xs text-slate-500 uppercase font-bold">Visa Card</p>
              </div>
           </div>
           <button className="text-primary text-xs font-bold hover:underline mt-6">Alterar Cartão</button>
        </Card>

        <Card className="p-6">
           <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-slate-500">Créditos em Conta</p>
           <h3 className="text-3xl font-black text-emerald-500">R$ 0,00</h3>
           <p className="text-xs mt-2 text-slate-500 font-medium">Nenhum crédito disponível no momento.</p>
        </Card>
      </div>

      <Card className="overflow-hidden">
         <div className="p-6 border-b border-slate-100 dark:border-white/5 font-bold">Histórico de Faturas</div>
         <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-900 text-[10px] font-bold uppercase text-slate-400 border-b border-slate-100 dark:border-white/5">
               <tr>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Descrição</th>
                  <th className="px-6 py-4">Valor</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ação</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
               {[
                 { date: '12 Jun 2024', id: '#8821', desc: 'Mensalidade Hospedagem Pro', val: 'R$ 150,00', status: 'Pago' },
                 { date: '05 Jun 2024', id: '#8794', desc: 'Consultoria Técnica Adicional', val: 'R$ 450,00', status: 'Pago' }
               ].map((inv, i) => (
                 <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-slate-500">{inv.date}</td>
                    <td className="px-6 py-4 font-mono font-bold">{inv.id}</td>
                    <td className="px-6 py-4 font-medium">{inv.desc}</td>
                    <td className="px-6 py-4 font-bold">{inv.val}</td>
                    <td className="px-6 py-4">
                       <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase">Pago</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <button className="material-icons-round text-slate-400 hover:text-primary">download</button>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </Card>
    </div>
  );
};

export default BillingPage;
