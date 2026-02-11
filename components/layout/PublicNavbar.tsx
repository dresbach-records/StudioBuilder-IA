
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const PublicNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Portfólio', to: '/institutional/portfolio' },
    { label: 'Tecnologia', to: '/institutional/stack' },
    { label: 'Carreiras', to: '/institutional/careers' },
    { label: 'Contato', to: '/institutional/inquiry' },
  ];

  const handleLinkClick = (to: string) => {
    navigate(to);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group z-[200]">
            <div className={`w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform ${isMenuOpen ? 'text-white' : ''}`}>
              <span className="material-icons-round text-2xl font-black">architecture</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter leading-none uppercase ${isMenuOpen ? 'text-white' : 'text-white'}`}>StudioBuilder</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Autonomous AI</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl p-1 px-2">
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
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                Login
              </Link>
              <Button 
                onClick={() => navigate('/register')}
                className="bg-primary hover:bg-blue-600 text-white shadow-xl shadow-primary/20 group text-xs"
                size="sm"
              >
                Começar Agora
                <span className="material-icons-round text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden z-[200]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <span className="material-icons-round text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background-dark/95 backdrop-blur-lg z-[90] flex flex-col items-center justify-center pt-24">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                onClick={() => handleLinkClick(link.to)}
                className={`text-2xl font-bold transition-all ${
                  location.pathname === link.to 
                  ? 'text-primary' 
                  : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-center gap-6 w-full px-8">
             <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-300 hover:text-white transition-colors"
             >
                Login
              </Link>
             <Button 
                onClick={() => handleLinkClick('/register')}
                size="lg"
                className="w-full bg-primary text-white shadow-2xl shadow-primary/30 text-lg group"
             >
                Começar Agora
                <span className="material-icons-round ml-2">arrow_forward</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicNavbar;
