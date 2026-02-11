
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const PublicNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Portfólio', to: '/institutional/portfolio' },
    { label: 'Tecnologia', to: '/institutional/stack' },
    { label: 'Carreiras', to: '/institutional/careers' },
    { label: 'Contato', to: '/institutional/inquiry' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-2xl font-black">architecture</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">StudioBuilder</span>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Autonomous AI</span>
          </div>
        </Link>

        {/* Links Centrais */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl p-1 px-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all rounded-xl ${
                location.pathname === link.to 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Ações Direitas */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors mr-4">
            Login
          </Link>
          <Button 
            onClick={() => navigate('/register')}
            className="bg-primary hover:bg-blue-600 text-white shadow-xl shadow-primary/20 group"
          >
            Começar Agora
            <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
