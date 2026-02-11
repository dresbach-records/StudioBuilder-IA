
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen flex bg-background-dark text-white items-center justify-center px-8">
      <div className="max-w-md w-full">
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary shadow-xl shadow-primary/10">
            <span className="material-icons-round text-3xl">key</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
          <p className="text-slate-400">Enter your email and we'll send you recovery instructions.</p>
        </div>

        {sent ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center space-y-6">
            <span className="material-icons-round text-4xl text-emerald-500">mark_email_read</span>
            <p className="text-sm">If an account exists for {email}, you will receive a reset link shortly.</p>
            <Link to="/login" className="block text-primary font-bold hover:underline">Return to login</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Email Address"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              icon="alternate_email"
            />
            <Button type="submit" className="w-full" size="lg">Send Link</Button>
            <Link to="/login" className="block text-center text-slate-500 font-bold text-xs hover:text-white transition-colors">Back to Login</Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
