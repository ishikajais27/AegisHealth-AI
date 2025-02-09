// FloatingIcons.jsx
import { motion } from 'framer-motion'

const floatingVariants = {
  animate: {
    y: [0, -15, 0], // Floating effect
    rotate: [0, 10, -10, 0], // Gentle rotation
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Stethoscope Icon */}
      <motion.img
        src="https://img.icons8.com/color/100/stethoscope.png"
        alt="Stethoscope"
        className="absolute top-10 left-20 w-16 h-16 drop-shadow-lg" // Glow effect
        variants={floatingVariants}
        animate="animate"
      />

      {/* Pill Icon */}
      <motion.img
        src="https://img.icons8.com/color/100/pill.png"
        alt="Pill"
        className="absolute top-40 right-10 w-16 h-16 drop-shadow-lg"
        variants={floatingVariants}
        animate="animate"
      />

      {/* Heart Monitor Icon */}
      <motion.img
        src="https://img.icons8.com/color/100/heart-with-pulse.png"
        alt="Heart Pulse"
        className="absolute bottom-20 left-10 w-16 h-16 drop-shadow-lg"
        variants={floatingVariants}
        animate="animate"
      />

      {/* DNA Icon */}
      <motion.img
        src="https://img.icons8.com/color/100/dna-helix.png"
        alt="DNA Helix"
        className="absolute bottom-40 right-20 w-16 h-16 drop-shadow-lg"
        variants={floatingVariants}
        animate="animate"
      />
    </div>
  )
}

export default FloatingIcons
