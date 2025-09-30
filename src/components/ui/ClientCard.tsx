import React from 'react';
import { Card } from './Card';

interface ClientStats {
  projects: string;
  area: string;
  precision: string;
}

interface ClientCardProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  sector: string;
  description: string;
  stats: ClientStats;
  statsLabels: {
    projects: string;
    areaMapped: string;
    precision: string;
  };
  className?: string;
  animationClass?: string;
  index?: number;
}

export const ClientCard: React.FC<ClientCardProps> = ({
  icon: Icon,
  name,
  sector,
  description,
  stats,
  statsLabels,
  className = '',
  animationClass = '',
  index = 0,
}) => {
  return (
    <div className={`group ${animationClass} ${className}`}>
      <Card
        variant="default"
        padding="md"
        className="h-full text-center group-hover:bg-mapea-olive/80 transition-all duration-500 border border-mapea-light-gray/20"
        hoverable={true}
      >
        {/* Client Icon */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-mapea-dark-gray/20 group-hover:bg-mapea-white/30 rounded-full mb-3 sm:mb-4 transition-colors duration-500">
            <Icon className="text-2xl sm:text-3xl text-mapea-white transition-colors duration-500" />
          </div>
        </div>
        
        {/* Client Info */}
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-mapea-white transition-colors duration-500">
          {name}
        </h3>
        
        <p className="text-mapea-olive font-semibold mb-3 sm:mb-4 transition-colors duration-500 group-hover:text-mapea-black">
          {sector}
        </p>
        
        <p className="text-sm sm:text-base text-mapea-dark-gray group-hover:text-mapea-light-gray leading-relaxed mb-4 sm:mb-6 transition-colors duration-500 px-2">
          {description}
        </p>

        {/* Client Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-mapea-light-gray/20">
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-mapea-olive group-hover:text-mapea-black transition-colors duration-500">
              {stats.projects}
            </div>
            <div className="text-xs text-mapea-dark-gray group-hover:text-mapea-white transition-colors duration-500">
              {statsLabels.projects}
            </div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-mapea-olive group-hover:text-mapea-black transition-colors duration-500">
              {stats.area}
            </div>
            <div className="text-xs text-mapea-dark-gray group-hover:text-mapea-white transition-colors duration-500">
              {statsLabels.areaMapped}
            </div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-mapea-olive group-hover:text-mapea-black transition-colors duration-500">
              {stats.precision}
            </div>
            <div className="text-xs text-mapea-dark-gray group-hover:text-mapea-white transition-colors duration-500">
              {statsLabels.precision}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
