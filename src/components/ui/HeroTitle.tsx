import React from 'react';

interface HeroTitleProps {
  lines: string[];
  highlightText?: string;
  highlightColor?: string;
  className?: string;
  animationClass?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textAlign?: 'left' | 'center' | 'right';
  spacing?: 'tight' | 'normal' | 'loose';
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  lines,
  highlightText,
  highlightColor = 'text-mapea-olive',
  className = '',
  animationClass = '',
  size = 'lg',
  textAlign = 'center',
  spacing = 'normal',
}) => {
  const sizeClasses = {
    sm: 'text-3xl sm:text-4xl lg:text-5xl',
    md: 'text-4xl sm:text-5xl lg:text-6xl',
    lg: 'text-5xl sm:text-6xl', // Mobile size
    xl: 'text-6xl xl:text-7xl 2xl:text-8xl' // Desktop size
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const spacingClasses = {
    tight: 'space-y-1',
    normal: 'space-y-2 lg:space-y-4',
    loose: 'space-y-4 lg:space-y-6'
  };

  const renderLine = (line: string, index: number) => {
    // Crear clases de animación individuales para cada línea
    const lineAnimationClass = animationClass.replace('staggered3', `staggered${index + 3}`);
    
    if (highlightText && line.includes(highlightText)) {
      const parts = line.split(highlightText);
      return (
        <h1 
          key={index}
          className={`${sizeClasses[size]} font-bold leading-none ${lineAnimationClass} ${className}`}
        >
          {parts[0]}
          <span className={highlightColor}>{highlightText}</span>
          {parts[1]}
        </h1>
      );
    }
    
    return (
      <h1 
        key={index}
        className={`${sizeClasses[size]} font-bold leading-none ${lineAnimationClass} ${className}`}
      >
        {line}
      </h1>
    );
  };

  return (
    <div className={`${textAlignClasses[textAlign]} ${spacingClasses[spacing]}`}>
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
};
