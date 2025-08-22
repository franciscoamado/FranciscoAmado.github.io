import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '../contexts/theme-context'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={24}
      sunColor="#36454f"
      moonColor="#ffffff"
    />
  )
}

export default ThemeToggle