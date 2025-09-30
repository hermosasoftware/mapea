import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dark' | 'glass' | 'transparent';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = true,
  padding = 'md',
  variant = 'default',
  onClick
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-mapea-light-gray shadow-lg',
    dark: 'bg-mapea-black text-white shadow-2xl',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl',
    transparent: 'bg-transparent'
  };
  
  const hoverClasses = hoverable 
    ? 'hover:shadow-xl hover:transform hover:scale-105 cursor-pointer' 
    : '';
    
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };

  const cardClasses = clsx(
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    paddingClasses[padding],
    className
  );

  return (
    <div
      className={cardClasses}
      onClick={onClick}
    >
      {children}
    </div>
  );
};