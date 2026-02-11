
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
// Added missing import for Badge component
import Badge from '../../../../components/ui/Badge';

const ApplicationSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0c0a1d] min-h-screen flex flex-col text-white font-sans selection:bg-primary/30 overflow-hidden">
      {/* Mini Header conforme imagem 2 */}
      <header className="h-20 px-8 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0c0a1d]/80 backdrop-blur-md z-50">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-icons-round text-white">architecture</span>
          </div>
          <span className="text-xl font-bold tracking-tight">StudioBuilder<span className="text-primary">AI</span></span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] border-r border-white/10 pr-6 mr-6 hidden sm:block">Engineering Portal</span>
          <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
            <span className="material-icons-round text-sm">verified_user</span>
            SECURE APPLICATION
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center space-y-12">
        {/* Imagem Central Abstrata/3D */}
        <div className="relative group">
          <div className="absolute -inset-24 bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-slate-800 to-black rounded-[48px] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80" 
               className="w-full h-full object-cover opacity-80" 
               alt="Success"
             />
             <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/40">
                <span className="material-icons-round text-lg">check</span>
             </div>
          </div>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Badge was missing import on line 45 */}
          <Badge variant="ghost" className="bg-primary/5 border-primary/20 text-primary px-4 py-1.5 font-mono">
            APPLICATION ID: SB-77249
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Candidatura Enviada com <br/> <span className="text-primary">Sucesso!</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
            Nosso time de engenharia irá revisar seu perfil e entraremos em contato via e-mail em até <span className="text-white font-bold">5 dias úteis</span>.
          </p>
        </div>

        {/* Stepper Status conforme imagem 2 */}
        <div className="flex items-center gap-4 max-w-md w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-icons-round text-sm">check</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Enviado</span>
          </div>
          <div className="flex-1 h-[2px] bg-white/10 mb-6"></div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-8 h-8 rounded-full border-2 border-white/10 flex items-center justify-center text-slate-500">
              <span className="material-icons-round text-sm">search</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Revisão</span>
          </div>
          <div className="flex-1 h-[2px] bg-white/10 mb-6"></div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-8 h-8 rounded-full border-2 border-white/10 flex items-center justify-center text-slate-500">
              <span className="material-icons-round text-sm">alternate_email</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Contato</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <Button 
            onClick={() => navigate('/institutional/careers')}
            className="flex-1 py-5 bg-primary shadow-xl shadow-primary/20"
            icon="arrow_back"
          >
            Voltar para Vagas
          </Button>
          <Button 
            onClick={() => navigate('/institutional/stack')}
            variant="outline"
            className="flex-1 py-5 border-white/10 hover:border-white/30 text-white"
          >
            Conhecer Nossa Stack <span className="material-icons-round ml-2 text-primary">chevron_right</span>
          </Button>
        </div>
      </main>

      <footer className="py-8 px-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600">
        <p className="text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
          © 2024 StudioBuilder AI — Engineering Recruitment. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest justify-center">
          <Link to="/institutional/privacy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
          <Link to="/institutional/terms" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <Link to="/client/support" className="hover:text-primary transition-colors">Suporte</Link>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationSuccessPage;
