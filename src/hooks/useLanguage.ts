import { useState, useEffect } from 'react'
import { translations, type Language, type Translations } from '../i18n/translations'

const STORAGE_KEY = 'pixelcraft-lang'

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return (saved as Language) || 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const t: Translations = translations[lang]

  return { lang, setLang, t }
}
