import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "PT" | "EN" | "FR";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// LOCK MODE - Detecção automática de idioma do navegador
function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'PT';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'PT';
  if (browserLang.startsWith('fr')) return 'FR';
  if (browserLang.startsWith('en')) return 'EN';
  
  // Fallback para inglês se idioma não suportado
  return 'EN';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    if (saved) {
      return saved as Language;
    }
    // Se não há preferência salva, detectar idioma do navegador
    return getBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
