'use client'

import { create } from 'zustand'

interface LanguageStore {
  language: string
  imgSrc: (lang: string) => string
  setLanguage: (value: string) => void
}

export const useLanguage = create<LanguageStore>(set => ({
  language: 'en',
  imgSrc: lang => `/flags/${lang}.webp`,
  setLanguage: value => {
    set({ language: value })
  },
}))
