
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/client/portal";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || 'Falha no login. Verifique suas credenciais.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background-dark text-white font-sans selection:bg-primary/30">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12 max-w-2xl relative">
        {/* Botão Voltar ao Site */}
        <div className="absolute top-8 left-8 md:left-24">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <span className="material-icons-round text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Voltar ao site
          </Link>
        </div>

        <div className="mb-12">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
            <span className="material-icons-round text-3xl">architecture</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Acesso Restrito</h1>
          <p className="text-slate-400">Insira suas credenciais corporativas para acessar o painel de engenharia.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm rounded-xl flex items-center gap-3">
            <span className="material-icons-round text-lg">error_outline</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Endereço de E-mail</label>
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="id@studiobuilder.ai" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-600" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Senha</label>
              <a href="#" className="text-xs text-primary font-bold hover:underline">Esqueceu?</a>
            </div>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-slate-600" 
            />
          </div>

          <button 
            disabled={isSubmitting}
            className="w-full py-4 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-bold rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>Autenticar no Sistema <span className="material-icons-round">security</span></>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-slate-600 text-[10px] uppercase font-black tracking-widest">
          SISTEMA DE USO EXCLUSIVO PARA STAFF E ENGENHARIA
        </p>
      </div>

      <div className="hidden lg:block flex-1 bg-gradient-to-br from-primary/20 via-background-dark to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Governança & <br/><span className="italic text-primary">Engenharia Autônoma.</span></h2>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">Painel de controle central para orquestração de infraestrutura e gestão de ciclos de desenvolvimento IA.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
