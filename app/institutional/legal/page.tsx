
import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-5xl font-extrabold mb-12">Aspectos Jurídicos</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Governança Corporativa</h2>
          <p className="text-slate-400 leading-relaxed">O StudioBuilder AI opera sob as mais rigorosas normas de conformidade tecnológica. Nossa infraestrutura é auditada regularmente para garantir a segurança jurídica dos nossos clientes.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Propriedade Intelectual</h2>
          <p className="text-slate-400 leading-relaxed">Todo código gerado especificamente para um projeto de cliente através do nosso wizard de captação é de propriedade exclusiva do contratante após a liquidação dos marcos financeiros correspondentes.</p>
        </section>
        <section className="p-8 bg-white/5 border border-white/10 rounded-3xl">
          <h3 className="font-bold mb-2">Conformidade Global</h3>
          <p className="text-xs text-slate-500">Estamos alinhados com LGPD (Brasil), GDPR (Europa) e CCPA (Califórnia) para garantir que seus dados e os dados de seus usuários estejam protegidos por lei em qualquer território.</p>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
