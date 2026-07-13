"use client";

import type { Lang, PortfolioData, UIStrings } from "@/data/types";

import * as React from "react";

import { DEFAULT_LANG, getDATA } from "@/data";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "fr" || stored === "en") return stored;

  const browserLang = window.navigator.language?.toLowerCase() ?? "";

  return browserLang.startsWith("fr") ? "fr" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(DEFAULT_LANG);

  React.useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const toggleLang = React.useCallback(() => {
    setLangState((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  const value = React.useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return ctx;
}

export function useData(): PortfolioData {
  const { lang } = useLanguage();

  return getDATA(lang);
}

export function useUI(): UIStrings {
  return useData().ui;
}
