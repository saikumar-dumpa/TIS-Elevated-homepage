import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/homepage.js'
import AnimatedToggle from '../animation/AnimatedToggle.jsx'

// SiteHeader renders the top navigation, theme switcher, and mobile menu.
export default function SiteHeader({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef(null)

  // closeMenu closes the mobile navigation panel when a user selects a link.
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    // closeOnEscape closes the menu when the Escape key is pressed and returns focus to the toggle.
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner shell mx-auto flex w-full items-center justify-between">
        <a className="wordmark cursor-target" href="#home" onClick={closeMenu} aria-label="Tulas International School home">
          <span className="wordmark-name">TULAS</span>
          <span className="wordmark-subtitle">INTERNATIONAL SCHOOL</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(0, 3).map((item) => (
            <a className="nav-link cursor-target" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <AnimatedToggle theme={theme} onToggle={onThemeToggle} />
          <a className="header-apply cursor-target" href="https://admission.tis.edu.in" target="_blank" rel="noreferrer">
            Apply now <ArrowUpRight size={16} />
          </a>
          <button
            ref={menuToggleRef}
            className="menu-toggle cursor-target"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-panel"
            id="site-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="menu-panel-inner shell mx-auto">
              <p className="menu-eyebrow">EXPLORE TULAS</p>
              <nav className="menu-links" aria-label="Expanded navigation">
                {navigation.map((item, index) => (
                  <a className="menu-link cursor-target" href={item.href} key={item.href} onClick={closeMenu}>
                    <span className="menu-index">0{index + 1}</span>
                    <span>{item.label}</span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </nav>
              <div className="menu-note">
                <span>Dehradun, Uttarakhand</span>
                <a href="tel:+919837983791" className="cursor-target">+91 98379 83791</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}