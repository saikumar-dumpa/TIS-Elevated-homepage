import { motion, useScroll, useSpring } from 'framer-motion'

// ReadingProgress shows a thin bar that fills as the page scrolls down.
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  return <motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true" />
}