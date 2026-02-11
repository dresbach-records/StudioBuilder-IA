
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({ label, error, icon, className = '', ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{label}</label>}
    <div className="relative">
      {icon && <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">{icon}</span>}
      <input 
        className={`w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-border-dark rounded-xl py-3 px-4 transition-all focus:ring-2 focus:ring-primary/50 outline-none text-sm placeholder:text-slate-500 ${icon ? 'pl-10' : ''} ${error ? 'border-rose-500' : ''} ${className}`}
        {...props}
      />
    </div>
    {error && <p className="text-[10px] text-rose-500 font-medium">{error}</p>}
  </div>
);

export default Input;
