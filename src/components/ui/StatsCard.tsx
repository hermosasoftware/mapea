import React from 'react';
import { Card } from './Card';

interface StatsCardProps {
  number: string;
  label: string;
  className?: string;
  animationClass?: string;
  variant?: 'default' | 'glass' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label,
  className = '',
  animationClass = '',
  variant = 'default',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl lg:text-2xl',
    md: 'text-2xl sm:text-3xl lg:text-4xl',
    lg: 'text-3xl sm:text-4xl lg:text-5xl'
  };

  const labelSizeClasses = {
    sm: 'text-xs sm:text-sm',
    md: 'text-xs sm:text-sm lg:text-base',
    lg: 'text-sm sm:text-base lg:text-lg'
  };

  return (
    <div className={`${animationClass} ${className}`}>
      <Card 
        variant={variant} 
        padding="sm"
        className="text-center h-full"
      >
        <div className={`${sizeClasses[size]} font-bold text-mapea-olive mb-1 sm:mb-2`}>
          {number}
        </div>
        <div className={`text-mapea-dark-gray px-1 ${labelSizeClasses[size]}`}>
          {label}
        </div>
      </Card>
    </div>
  );
};
