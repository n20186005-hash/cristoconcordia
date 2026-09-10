"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  es: "ES",
  zh: "中文",
  en: "EN",
  qu: "QU",
};

/** 默认语言为西班牙语，其余语言可随时切换 */
const LANG_ORDER: Locale[] = ["es", "zh", "en", "qu"];

export function LanguageSwitcher() {
  const { locale } = useLang();
  return (
    <div className="lang-switcher">
      {LANG_ORDER.map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              window.location.href = `/${l}${window.location.hash}`;
            }
          }}
          aria-label={`Switch to ${l}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
