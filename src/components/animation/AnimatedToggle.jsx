import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

// AnimatedToggle renders the light/dark mode button and animates between the two icons.
export default function AnimatedToggle({ theme, onToggle }) {
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const Icon = theme === 'light' ? Moon : Sun

  return (
    <button
      className="theme-toggle cursor-target"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${nextTheme} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
          transition={{ duration: 0.16 }}
          aria-hidden="true"
        >
          <Icon size={18} />
        </motion.span>
      </AnimatePresence>
    </button>
  )
}