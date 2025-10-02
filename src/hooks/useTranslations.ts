import { useState, useCallback } from 'react';
import type { SupportedLanguage } from '../i18n/types';

/**
 * Hook simple para manejar traducciones sin dependencias externas
 * Recibe las traducciones como props desde Astro
 */
export const useTranslations = (translations: Record<string, any>, currentLang: SupportedLanguage) => {
  const [language, setLanguage] = useState<SupportedLanguage>(currentLang);

  /**
   * Función de traducción
   */
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Devolver la clave si no se encuentra
      }
    }
    
    return typeof value === 'string' ? value : key;
  }, [translations]);

  /**
   * Cambiar idioma
   */
  const changeLanguage = useCallback((newLang: SupportedLanguage) => {
    setLanguage(newLang);
    
    // Persistir en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('mapea-language', newLang);
      
      // Navegar a la página del idioma correspondiente
      const currentPath = window.location.pathname;
      let newPath: string;
      
      if (currentPath.startsWith('/en') || currentPath.startsWith('/es')) {
        // Reemplazar el prefijo de idioma existente
        newPath = currentPath.replace(/^\/[a-z]{2}/, `/${newLang}`);
      } else {
        // Agregar prefijo de idioma
        newPath = `/${newLang}${currentPath}`;
      }
      
      // Navegar a la nueva URL
      window.location.href = newPath;
    }
  }, []);

  return {
    t,
    changeLanguage,
    currentLanguage: language,
    isEnglish: language === 'en',
    isSpanish: language === 'es',
  };
};
