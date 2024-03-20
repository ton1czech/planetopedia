'use client'

import { create } from 'zustand'

interface LanguageStore {
  language: string
  setLanguage: (value: string) => void
}

export const useLanguage = create<LanguageStore>(set => ({
  language: 'en',
  setLanguage: value => {
    set({ language: value })
  },
}))
