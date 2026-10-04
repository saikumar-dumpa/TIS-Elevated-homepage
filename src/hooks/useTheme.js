import { useEffect, useState } from 'react'

// useTheme manages the website theme and stores the selected value in the browser.
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('tis-theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem('tis-theme', theme)
    } catch {
      // The selected theme still works for this visit when storage is unavailable.
    }
  }, [theme])

  // toggleTheme switches between light and dark mode and updates the current state.
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}