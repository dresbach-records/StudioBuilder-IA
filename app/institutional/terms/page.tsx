
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-5xl font-extrabold mb-8">Termos de Uso</h1>
      <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
        <h3 className="text-xl font-bold text-white mt-8">1. Termos</h3>
        <p>Ao acessar o site StudioBuilder AI, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">2. Licença de Uso</h3>
        <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site StudioBuilder AI , apenas para visualização transitória pessoal e não comercial.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">3. Isenção de Responsabilidade</h3>
        <p>Os materiais no site da StudioBuilder AI são fornecidos 'como estão'. StudioBuilder AI não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">4. Limitações</h3>
        <p>Em nenhum caso o StudioBuilder AI ou seus fornecedores serão responsáveis ​​por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em StudioBuilder AI.</p>
      </div>
    </div>
  );
};

export default TermsPage;
