import React from 'react';
import { CallToAction } from './CallToAction';

interface MissionCTAProps {
  title: string;
  description: string;
  knowServicesText: string;
  requestQuoteText: string;
  className?: string;
  animationClass?: string;
}

export const MissionCTA: React.FC<MissionCTAProps> = ({
  title,
  description,
  knowServicesText,
  requestQuoteText,
  className = '',
  animationClass = '',
}) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CallToAction
      title={title}
      description={description}
      primaryButton={{
        text: knowServicesText,
        onClick: scrollToServices,
        variant: "default",
        size: "lg",
      }}
      secondaryButton={{
        text: requestQuoteText,
        onClick: scrollToContact,
        variant: "outline",
        size: "lg",
      }}
      className={className}
      animationClass={animationClass}
      variant="glass"
      padding="xl"
      layout="horizontal"
    />
  );
};

