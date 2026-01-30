import React from 'react';
import { Card } from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  animationClass?: string;
  index?: number;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  className = '',
  animationClass = '',
  image,
  index = 0,
}) => {
  return (
    <div className={`group ${animationClass} ${className}`}>
      <Card
        variant="glass"
        padding="sm"
        className="h-full group-hover:bg-mapea-dark-gray transition-all duration-500 border border-mapea-light-gray/20"
        hoverable={true}
      >
        <div className="h-48 relative overflow-hiddenmb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image} alt={title} className="sm:h-10/12 h-40 object-cover"/>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-mapea-light-gray group-hover:text-mapea-white transition-colors duration-300">
            {title}
          </h4>
          <p className="text-mapea-light-gray group-hover:text-mapea-white leading-relaxed text-sm transition-colors duration-300">
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
};
