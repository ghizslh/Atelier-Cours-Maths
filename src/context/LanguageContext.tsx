import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang, type LangContent } from "../data/content";

interface LanguageContextValue {
  lang: Lang;
  t: LangContent;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "ar" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
