'use client'

import { useThemeStore } from '@/stores/themeStore'
import { type ReactNode, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const { theme } = useThemeStore()

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return <>{children}</>
}
