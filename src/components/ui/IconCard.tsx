import React from 'react';
import { Card } from './Card';

interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
  animationClass?: string;
  variant?: 'default' | 'glass' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hoverable?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
  textAlign?: 'left' | 'center' | 'right';
  hoverEffect?: boolean;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
  animationClass = '',
  variant = 'default',
  padding = 'md',
  hoverable = true,
  iconSize = 'md',
  textAlign = 'center',
  hoverEffect = true,
}) => {
  const iconSizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl'
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const hoverClasses = hoverEffect 
    ? 'group-hover:bg-mapea-olive/80 transition-all duration-500 border border-mapea-light-gray/20'
    : '';

  return (
    <div className={`group ${animationClass} ${className}`}>
      <Card
        variant={variant}
        padding={padding}
        className={`h-full ${textAlignClasses[textAlign]} ${hoverClasses}`}
        hoverable={hoverable}
      >
        <div className="mb-4 sm:mb-6">
          <div className={`inline-flex items-center justify-center ${iconSizeClasses[iconSize]} bg-mapea-dark-gray/20 group-hover:bg-mapea-white/30 rounded-full mb-3 sm:mb-4 transition-colors duration-500`}>
            <Icon className="text-mapea-white transition-colors duration-500" />
          </div>
        </div>
        
        <h4 className="text-lg sm:text-xl font-bold mb-3 text-mapea-white transition-colors duration-500">
          {title}
        </h4>
        
        <p className="text-mapea-light-gray group-hover:text-mapea-white leading-relaxed text-sm sm:text-base transition-colors duration-500">
          {description}
        </p>
      </Card>
    </div>
  );
};
