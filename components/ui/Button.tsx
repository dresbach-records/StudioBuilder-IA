
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-600",
    secondary: "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-purple-600",
    outline: "border-2 border-slate-200 dark:border-border-dark hover:border-primary text-slate-600 dark:text-slate-300",
    ghost: "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500",
    danger: "bg-rose-500 text-white hover:bg-rose-600"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          {icon && <span className="material-icons-round text-lg">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
