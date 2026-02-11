
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  variant: 'public' | 'client' | 'admin';
}

const Footer: React.FC<FooterProps> = ({ variant }) => {
  // Conforme solicitado: "no rodape em sistema portal do cliente nao prescisa"
  if (variant === 'client' || variant === 'admin') {
    return null;
  }

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Tech-Lab-ai', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://twitter.com', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/techlab1', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com', 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.79.306-1.46.717-2.127 1.384-.666.667-1.078 1.336-1.383 2.127-.297.763-.497 1.634-.555 2.91-.058 1.28-.071 1.688-.071 4.948s.013 3.668.071 4.948c.058 1.276.258 2.147.555 2.911.305.791.717 1.459 1.383 2.127.667.667 1.337 1.079 2.127 1.384.763.296 1.634.497 2.91.555 1.28.058 1.688.071 4.948.071s3.668-.013 4.948-.071c1.276-.058 2.147-.259 2.911-.555.791-.305 1.459-.717 2.127-1.384.667-.667 1.079-1.337 1.384-2.127.296-.763.497-1.634.555-2.911.058-1.28.071-1.688.071-4.948s-.013-3.668-.071-4.948c-.058-1.276-.259-2.147-.555-2.911-.305-.791-.717-1.459-1.384-2.127-.667-.667-1.337-1.079-2.127-1.384-.763-.296-1.634-.497-2.911-.555-1.28-.058-1.688-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-12 border-t border-white/5 bg-background-dark/50 text-center">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
          <span className="material-icons-round text-white">architecture</span>
          <span className="font-bold tracking-tight text-white">StudioBuilder AI</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto mb-16">
          <div>
            <h5 className="text-[10px] font-bold uppercase text-slate-500 mb-4 tracking-widest">Sistemas</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/admin/dashboard" className="hover:text-primary transition-colors">Portal Admin</Link></li>
              <li><Link to="/editor/visual" className="hover:text-primary transition-colors">Editor de Engenharia</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase text-slate-500 mb-4 tracking-widest">Empresa</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/institutional/portfolio" className="hover:text-primary transition-colors">Portfólio</Link></li>
              <li><Link to="/institutional/careers" className="hover:text-primary transition-colors">Carreiras</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase text-slate-500 mb-4 tracking-widest">Produto</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/institutional/product" className="hover:text-primary transition-colors">Produto</Link></li>
              <li><Link to="/institutional/stack" className="hover:text-primary transition-colors">Stack Técnica</Link></li>
              <li><Link to="/institutional/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase text-slate-500 mb-4 tracking-widest">Legal</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/institutional/legal" className="hover:text-primary transition-colors">Legal</Link></li>
              <li><Link to="/institutional/privacy" className="hover:text-primary transition-colors">Privacidade</Link></li>
              <li><Link to="/institutional/terms" className="hover:text-primary transition-colors">Termos</Link></li>
            </ul>
          </div>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-white transition-all transform hover:scale-110 active:scale-95"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-[10px] uppercase tracking-widest">
          © 2026 StudioBuilder AI. Desenvolvido por vini amaral techlab.ltda
        </p>
      </div>
    </footer>
  );
};

export default Footer;
