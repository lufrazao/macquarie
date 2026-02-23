"use client";

import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 backdrop-blur-md shadow-lg">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2 py-0.5 text-xs font-medium rounded-full transition-colors ${
          language === "pt"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 text-xs font-medium rounded-full transition-colors ${
          language === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
