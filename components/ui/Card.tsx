
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  // Fix: Added optional onClick prop
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white dark:bg-panel-dark border border-slate-200 dark:border-border-dark rounded-2xl shadow-sm transition-all ${hoverable || onClick ? 'hover:shadow-xl hover:-translate-y-1' : ''} ${className} ${onClick ? 'cursor-pointer' : ''}`}
  >
    {children}
  </div>
);

export default Card;
