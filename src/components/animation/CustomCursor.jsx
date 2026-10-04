import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// CustomCursor creates a custom pointer effect for devices that support a fine pointer.
export default function CustomCursor() {
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  )
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const pointerX = useMotionValue(-40)
  const pointerY = useMotionValue(-40)
  const x = useSpring(pointerX, { stiffness: 420, damping: 34, mass: 0.5 })
  const y = useSpring(pointerY, { stiffness: 420, damping: 34, mass: 0.5 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return undefined

    document.body.classList.add('has-custom-cursor')

    // moveCursor follows the actual mouse position and keeps the cursor visible.
    const moveCursor = (event) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
      setVisible(true)
    }
    // updateHover detects whether the pointer is over interactive elements like links or buttons.
    const updateHover = (event) => {
      const target = event.target instanceof Element ? event.target : null
      setHovering(Boolean(target?.closest('a, button, input, select, textarea')))
    }
    // hideCursor hides the custom cursor when the window loses focus.
    const hideCursor = () => setVisible(false)

    window.addEventListener('pointermove', moveCursor)
    window.addEventListener('pointerover', updateHover)
    window.addEventListener('pointerout', updateHover)
    window.addEventListener('blur', hideCursor)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('pointerover', updateHover)
      window.removeEventListener('pointerout', updateHover)
      window.removeEventListener('blur', hideCursor)
    }
  }, [pointerX, pointerY])

  if (!enabled) return null

  return (
    <motion.div
      className={`cursor-follower${hovering ? ' is-hovering' : ''}`}
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.45 : 1 }}
      transition={{ duration: 0.16 }}
      aria-hidden="true"
    >
      <span />
    </motion.div>
  )
}