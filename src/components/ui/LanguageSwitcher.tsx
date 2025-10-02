import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import type { SupportedLanguage } from '../../i18n/types';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'buttons';
  showLabels?: boolean;
  currentLang: SupportedLanguage;
  onChangeLanguage: (lang: SupportedLanguage) => void;
  isScrolled?: boolean; // Para manejar el cambio de color del navbar
}

/**
 * Componente para cambiar el idioma de la aplicación
 * Soporta diferentes variantes de diseño
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'default',
  showLabels = false,
  currentLang,
  onChangeLanguage,
  isScrolled = false,
}) => {
  const handleLanguageChange = (lng: SupportedLanguage) => {
    if (lng !== currentLang) {
      onChangeLanguage(lng);
    }
  };

  const isEnglish = currentLang === 'en';
  const isSpanish = currentLang === 'es';

  // Variante minimal - icono simple que cambia de idioma al hacer click
  if (variant === 'minimal') {
    // Determinar si es mobile basado en la clase className
    const isMobile = className.includes('text-black');
    
    return (
      <button
        onClick={() => handleLanguageChange(currentLang === 'en' ? 'es' : 'en')}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mapea-olive focus:ring-offset-2 focus:ring-offset-transparent ${
          isMobile
            ? 'bg-white/90 hover:bg-white text-black hover:text-mapea-olive border border-gray-300 hover:border-mapea-olive'
            : isScrolled
            ? 'bg-white/90 hover:bg-white text-mapea-dark-gray hover:text-mapea-olive border border-mapea-dark-gray/20 hover:border-mapea-olive'
            : 'bg-white/10 hover:bg-white/20 text-white hover:text-mapea-olive border border-white/30 hover:border-mapea-olive'
        } ${className}`}
        aria-label={`Switch to ${currentLang === 'en' ? 'Spanish' : 'English'}`}
        title={`Switch to ${currentLang === 'en' ? 'Español' : 'English'}`}
      >
        {/* Icono global de React Icons */}
        <FaGlobe className="w-5 h-5" />
      </button>
    );
  }

  // Variante buttons - botones más grandes
  if (variant === 'buttons') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg border ${
            isEnglish
              ? 'bg-mapea-olive text-mapea-black border-mapea-olive'
              : 'text-mapea-light-gray border-mapea-light-gray hover:border-mapea-white hover:text-mapea-white'
          }`}
        >
          {showLabels ? 'English' : 'EN'}
        </button>
        <button
          onClick={() => handleLanguageChange('es')}
          className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg border ${
            isSpanish
              ? 'bg-mapea-olive text-mapea-black border-mapea-olive'
              : 'text-mapea-light-gray border-mapea-light-gray hover:border-mapea-white hover:text-mapea-white'
          }`}
        >
          {showLabels ? 'Español' : 'ES'}
        </button>
      </div>
    );
  }

  // Variante default - diseño estándar
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
          isEnglish
            ? 'bg-mapea-olive text-mapea-black'
            : 'text-mapea-light-gray hover:text-mapea-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-mapea-light-gray text-sm">|</span>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
          isSpanish
            ? 'bg-mapea-olive text-mapea-black'
            : 'text-mapea-light-gray hover:text-mapea-white'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

