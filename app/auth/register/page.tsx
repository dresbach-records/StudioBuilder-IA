
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await register(name, email);
      navigate('/client/portal');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background-dark text-white font-sans selection:bg-primary/30">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-12 max-w-2xl">
        <div className="mb-12">
          <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
            <span className="material-icons-round text-3xl">rocket_launch</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Create Account</h1>
          <p className="text-slate-400">Join thousands of engineers building with AI.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary/50 outline-none transition-all placeholder:text-slate-600" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary/50 outline-none transition-all placeholder:text-slate-600" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</label>
            <input 
              required
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary/50 outline-none transition-all placeholder:text-slate-600" 
            />
          </div>

          <button 
            disabled={isSubmitting}
            className="w-full py-4 bg-secondary hover:bg-purple-600 disabled:opacity-50 text-white font-bold rounded-xl shadow-xl shadow-secondary/20 transition-all flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>Get Started <span className="material-icons-round">arrow_forward</span></>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-slate-400 text-sm">
          Already have an account? <Link to="/login" className="text-secondary font-bold hover:underline">Sign in</Link>
        </p>
      </div>

      <div className="hidden lg:block flex-1 bg-gradient-to-bl from-secondary/20 via-background-dark to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
