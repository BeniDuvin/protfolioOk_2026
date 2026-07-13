import { fr, defaultLang } from "./fr";
import { en } from "./en";
import type { Lang, PortfolioData } from "./types";

export const DATASETS: Record<Lang, PortfolioData> = { fr, en };

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export const DEFAULT_LANG: Lang = defaultLang;

export const DATA: PortfolioData = DATASETS[DEFAULT_LANG];

export function getDATA(lang: Lang): PortfolioData {
  return DATASETS[lang] ?? DATASETS[DEFAULT_LANG];
}

export function detectLang(acceptLanguage?: string | null): Lang {
  if (!acceptLanguage) return DEFAULT_LANG;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase());

  if (preferred.some((lang) => lang.startsWith("fr"))) return "fr";

  return "en";
}

export type { Lang, PortfolioData } from "./types";
