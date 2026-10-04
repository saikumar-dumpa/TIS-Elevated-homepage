import { motion, useReducedMotion } from 'framer-motion'

// ScrollReveal fades and lifts content into view as the user scrolls the page.
export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.48, delay }}
    >
      {children}
    </motion.div>
  )
}