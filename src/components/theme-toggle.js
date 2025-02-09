import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useDarkMode } from '../hooks/use-dark-mode'

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode()
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