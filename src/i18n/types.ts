// Tipos para las traducciones
export interface TranslationKeys {
  common: typeof import('./locales/en/common.json');
  navigation: typeof import('./locales/en/navigation.json');
  home: typeof import('./locales/en/home.json');
  mission: typeof import('./locales/en/mission.json');
  services: typeof import('./locales/en/services.json');
  clients: typeof import('./locales/en/clients.json');
  contact: typeof import('./locales/en/contact.json');
  footer: typeof import('./locales/en/footer.json');
  seo: typeof import('./locales/en/seo.json');
}

// Tipos para los idiomas soportados
export type SupportedLanguage = 'en' | 'es';

// Tipos para los namespaces
export type TranslationNamespace = keyof TranslationKeys;

// Tipos para las claves de traducción
export type TranslationKey<T extends TranslationNamespace> = 
  T extends 'common' ? keyof TranslationKeys['common'] :
  T extends 'home' ? keyof TranslationKeys['home'] :
  T extends 'mission' ? keyof TranslationKeys['mission'] :
  T extends 'services' ? keyof TranslationKeys['services'] :
  T extends 'clients' ? keyof TranslationKeys['clients'] :
  T extends 'contact' ? keyof TranslationKeys['contact'] :
  T extends 'footer' ? keyof TranslationKeys['footer'] :
  T extends 'seo' ? keyof TranslationKeys['seo'] :
  never;

// Tipos para las opciones de traducción
export interface TranslationOptions {
  lng?: SupportedLanguage;
  ns?: TranslationNamespace;
  keyPrefix?: string;
  interpolation?: {
    [key: string]: string | number;
  };
}

// Tipos para el hook de traducción personalizado
export interface UseTranslationReturn {
  t: (key: string, options?: TranslationOptions) => string;
  changeLanguage: (lng: SupportedLanguage) => Promise<void>;
  currentLanguage: SupportedLanguage;
  isEnglish: boolean;
  isSpanish: boolean;
  isLoading: boolean;
}

// Tipos para el contexto de idioma
export interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lng: SupportedLanguage) => void;
  t: (key: string, options?: TranslationOptions) => string;
}

// Tipos para los recursos de traducción
export interface TranslationResources {
  [language: string]: {
    [namespace: string]: Record<string, any>;
  };
}

// Tipos para la configuración de i18n
export interface I18nConfig {
  fallbackLng: SupportedLanguage;
  debug: boolean;
  detection: {
    order: string[];
    caches: string[];
    lookupLocalStorage: string;
  };
  interpolation: {
    escapeValue: boolean;
  };
  defaultNS: TranslationNamespace;
  ns: TranslationNamespace[];
  load: string;
  fallbackNS: TranslationNamespace;
  react: {
    useSuspense: boolean;
  };
}
