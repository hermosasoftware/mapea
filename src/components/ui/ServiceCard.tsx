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
        className="h-full group-hover:bg-mapea-olive/80 transition-all duration-500 border border-mapea-light-gray/20"
        hoverable={true}
      >
        {/* Service Image Placeholder */}
        <div className="h-48 bg-mapea-dark-gray/50 relative overflow-hidden rounded-lg mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-mapea-olive/20 to-mapea-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Service Content */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-mapea-white group-hover:text-mapea-black transition-colors duration-300">
            {title}
          </h4>
          <p className="text-mapea-light-gray group-hover:text-mapea-black/80 leading-relaxed text-sm transition-colors duration-300">
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
};
