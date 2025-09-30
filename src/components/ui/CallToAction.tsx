import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'lg' | 'xl';
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'lg' | 'xl';
  };
  className?: string;
  animationClass?: string;
  variant?: 'default' | 'glass' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'vertical' | 'horizontal';
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
  animationClass = '',
  variant = 'glass',
  padding = 'xl',
  layout = 'vertical',
}) => {
  const buttonLayoutClasses = layout === 'horizontal' 
    ? 'flex flex-col sm:flex-row gap-4 justify-center'
    : 'flex flex-col gap-4 justify-center';

  return (
    <div className={`text-center ${animationClass} ${className}`}>
      <Card 
        variant={variant} 
        padding={padding} 
        className="max-w-3xl mx-auto shadow-2xl"
      >
        <h4 className="text-3xl lg:text-4xl font-bold text-mapea-white mb-6">
          {title}
        </h4>
        <p className="text-lg text-mapea-light-gray mb-8 leading-relaxed">
          {description}
        </p>
        <div className={buttonLayoutClasses}>
          <Button
            variant={primaryButton.variant || 'default'}
            size={primaryButton.size || 'lg'}
            onClick={primaryButton.onClick}
            className="text-lg px-8 py-4"
          >
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button
              variant={secondaryButton.variant || 'outline'}
              size={secondaryButton.size || 'lg'}
              onClick={secondaryButton.onClick}
              className="text-lg px-8 py-4 border-mapea-white text-mapea-white hover:bg-mapea-white hover:text-black"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
