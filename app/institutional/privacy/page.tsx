
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-5xl font-extrabold mb-8">Política de Privacidade</h1>
      <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
        <p>A sua privacidade é importante para nós. É política do StudioBuilder AI respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site StudioBuilder AI, e outros sites que possuímos e operamos.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">Coleta de Dados</h3>
        <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">Segurança da Informação</h3>
        <p>Apenas retemos informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">Seus Direitos</h3>
        <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
