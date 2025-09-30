import type { SupportedLanguage, TranslationNamespace } from '../i18n/types';

/**
 * Obtiene las traducciones para un idioma y namespace específico
 * @param lang - Idioma ('en' | 'es')
 * @param namespace - Namespace de traducción
 * @returns Objeto con las traducciones
 */
export async function getTranslations(
  lang: SupportedLanguage, 
  namespace: TranslationNamespace
): Promise<Record<string, any>> {
  try {
    // Importar dinámicamente las traducciones
    const translations = await import(`../i18n/locales/${lang}/${namespace}.json`);
    return translations.default;
  } catch (error) {
    console.warn(`Translation not found: ${lang}/${namespace}`);
    
    // Fallback a inglés si no se encuentra la traducción
    if (lang !== 'en') {
      try {
        const fallback = await import(`../i18n/locales/en/${namespace}.json`);
        return fallback.default;
      } catch (fallbackError) {
        console.error(`Fallback translation not found: en/${namespace}`);
        return {};
      }
    }
    
    return {};
  }
}

/**
 * Obtiene el idioma actual basado en la URL
 * @param url - URL de Astro
 * @returns Idioma actual
 */
export function getCurrentLanguage(url: URL): SupportedLanguage {
  const pathname = url.pathname;
  
  // Verificar si la URL contiene el prefijo de idioma
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/en')) return 'en';
  
  // Verificar parámetros de consulta
  const langParam = url.searchParams.get('lang');
  if (langParam === 'es' || langParam === 'en') {
    return langParam as SupportedLanguage;
  }
  
  // En server-side, usar inglés por defecto
  // No acceder a window, localStorage o navigator en server-side
  return 'en';
}

/**
 * Obtiene todas las traducciones para un idioma específico
 * @param lang - Idioma
 * @returns Objeto con todas las traducciones del idioma
 */
export async function getAllTranslations(lang: SupportedLanguage): Promise<Record<string, any>> {
  const namespaces: TranslationNamespace[] = [
    'common', 'home', 'mission', 'services', 'clients', 'contact', 'footer', 'seo'
  ];
  
  const translations: Record<string, any> = {};
  
  for (const namespace of namespaces) {
    try {
      const nsTranslations = await getTranslations(lang, namespace);
      translations[namespace] = nsTranslations;
    } catch (error) {
      console.warn(`Failed to load ${namespace} translations for ${lang}`);
      translations[namespace] = {};
    }
  }
  
  return translations;
}

/**
 * Genera la URL para un idioma específico
 * @param lang - Idioma
 * @param pathname - Ruta actual
 * @returns URL con el prefijo de idioma
 */
export function getLocalizedUrl(lang: SupportedLanguage, pathname: string): string {
  // Si ya tiene prefijo de idioma, reemplazarlo
  const cleanPath = pathname.replace(/^\/[a-z]{2}/, '');
  
  // Agregar prefijo de idioma
  return `/${lang}${cleanPath}`;
}

/**
 * Obtiene las traducciones de SEO para un idioma específico
 * @param lang - Idioma
 * @param section - Sección (home, mission, services, etc.)
 * @returns Objeto con las traducciones de SEO
 */
export async function getSeoTranslations(
  lang: SupportedLanguage, 
  section: string
): Promise<{
  title: string;
  description: string;
  keywords: string;
}> {
  try {
    const seoTranslations = await getTranslations(lang, 'seo');
    const sectionSeo = seoTranslations[section];
    
    if (sectionSeo) {
      return {
        title: sectionSeo.title || '',
        description: sectionSeo.description || '',
        keywords: sectionSeo.keywords || '',
      };
    }
    
    // Fallback a home si no se encuentra la sección
    const homeSeo = seoTranslations.home;
    return {
      title: homeSeo?.title || '',
      description: homeSeo?.description || '',
      keywords: homeSeo?.keywords || '',
    };
  } catch (error) {
    console.error(`Error loading SEO translations for ${lang}/${section}:`, error);
    return {
      title: '',
      description: '',
      keywords: '',
    };
  }
}

/**
 * Verifica si un idioma está soportado
 * @param lang - Idioma a verificar
 * @returns true si está soportado
 */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return lang === 'en' || lang === 'es';
}

/**
 * Obtiene el idioma por defecto
 * @returns Idioma por defecto
 */
export function getDefaultLanguage(): SupportedLanguage {
  return 'en';
}
