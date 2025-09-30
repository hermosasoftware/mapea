import React from 'react';
import { IconCard } from './IconCard';

interface ValueCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
  animationClass?: string;
  index?: number;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  className = '',
  animationClass = '',
  index = 0,
}) => {
  return (
    <IconCard
      icon={icon}
      title={title}
      description={description}
      className={className}
      animationClass={animationClass}
      variant="glass"
      padding="md"
      hoverable={true}
      iconSize="md"
      textAlign="center"
      hoverEffect={true}
    />
  );
};
