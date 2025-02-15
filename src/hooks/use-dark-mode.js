import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== "undefined"

  const [theme, setTheme] = useState(
    isBrowser ? window.localStorage.getItem('theme') || 'dark' : 'dark'
  )

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    if (!isBrowser) return

    const root = window.document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, isBrowser])

  return [theme, toggleTheme]
}