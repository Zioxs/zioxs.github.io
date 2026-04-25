'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { dictionaries, Language } from './dictionaries'

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof dictionaries.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Initial fetch from localStorage
    setIsClient(true);
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'id')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  // Selama render server/awal, gunakan bahasa default (id) untuk memastikan konsistensi rehidrasi.
  const t = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {/* Retain structure even during SSR hydration to avoid layout shift */}
      <div style={{ opacity: isClient ? 1 : 0.99 }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
