import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import UnderwaterBackground from '../background/UnderwaterBackground'
import GoldfishSVG from '../ui/GoldfishSVG'
import Button from '../ui/Button'

function Goldfish({ className, flip, entranceDelay, bobDelay, bobDuration = 6 }) {
  return (
    <motion.div
      className={`absolute cursor-grab active:cursor-grabbing touch-none ${className}`}
      initial={{ opacity: 0, x: flip ? -60 : 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: entranceDelay }}
      drag
      dragElastic={0.5}
      dragConstraints={{ left: -70, right: 70, top: -50, bottom: 50 }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 14 }}
      dragSnapToOrigin
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92, rotate: flip ? -10 : 10 }}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: flip ? [0, 3, 0] : [0, -3, 0] }}
        transition={{ duration: bobDuration, repeat: Infinity, ease: 'easeInOut', delay: bobDelay }}
      >
        <GoldfishSVG
          className={`w-full drop-shadow-[0_0_30px_rgba(212,175,55,0.35)] ${flip ? '-scale-x-100' : ''}`}
        />
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-[var(--background)] text-center px-4"
    >
      <UnderwaterBackground />

      <Goldfish
        className="w-40 sm:w-56 top-[14%] right-[6%] sm:right-[12%]"
        entranceDelay={0.4}
        bobDelay={0}
      />

      <Goldfish
        className="w-24 sm:w-36 bottom-[16%] left-[6%] sm:left-[10%]"
        flip
        entranceDelay={0.6}
        bobDelay={1.2}
        bobDuration={5}
      />

      <div className="relative z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-[var(--gold)] text-sm tracking-[0.2em] uppercase mb-4"
        >
          {profile.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          className="text-5xl sm:text-7xl font-[var(--font-heading)] text-[var(--text)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="text-lg text-[var(--muted)] mt-6"
        >
          {profile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.65 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button as="a" href="#contact">
            Let's Connect
          </Button>
          <Button as="a" href={profile.resume} variant="outline" target="_blank" rel="noreferrer">
            View Resume
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 text-[var(--muted)] text-xs uppercase tracking-[0.2em]"
      >
        Scroll
      </motion.a>
    </section>
  )
}

export default Hero
