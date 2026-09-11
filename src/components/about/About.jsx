import { useState } from 'react'
import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

function InterestCard({ interest, index }) {
  const [flipped, setFlipped] = useState(false)
  const hasImages = Boolean(interest.images?.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className={`h-64 ${hasImages ? 'cursor-pointer select-none' : ''}`}
      style={{ perspective: 800 }}
      onClick={hasImages ? () => setFlipped((f) => !f) : undefined}
      whileHover={hasImages ? { scale: 1.02 } : undefined}
      whileTap={hasImages ? { scale: 0.98 } : undefined}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
          <h3 className="text-[var(--gold-light)] font-medium flex items-center gap-1.5">
            {interest.title}
            {hasImages && (
              <motion.span
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-[10px] font-semibold text-[var(--background)] bg-[var(--gold)] normal-case tracking-normal px-2 py-0.5 rounded-full"
              >
                Click to view
              </motion.span>
            )}
          </h3>
          <p className="text-sm text-[var(--muted)] mt-1">{interest.detail}</p>
        </div>

        {hasImages && (
          <div
            className={`absolute inset-0 grid gap-1.5 ${
              interest.imageLayout === 'stack' ? 'grid-rows-2' : 'grid-cols-2'
            }`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {interest.images.map((src) => (
              <div
                key={src}
                className="rounded-[var(--radius)] overflow-hidden border border-[var(--gold)]/20"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${src}`}
                  alt={interest.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-[var(--background)]">
      <Container>
        <SectionHeading eyebrow="Who She Is" title="About" />

        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-44 h-44 sm:w-56 sm:h-56 rounded-full mx-auto md:mx-0 overflow-hidden border border-[var(--gold)]/30"
            style={{ background: 'rgba(212,175,55,0.08)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/kavya-portrait.png`}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <div>
            <p className="text-[var(--muted)] text-lg leading-relaxed">{profile.bio}</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {profile.interests.map((interest, i) => (
                <InterestCard key={interest.title} interest={interest} index={i} />
              ))}
            </div>
          </div>
        </div>

        <GlassCard className="mt-12" delay={0.15}>
          <SectionHeading eyebrow="Say Hello" title="Her Journey" />
          <div className="mt-6 max-w-lg mx-auto rounded-[var(--radius)] overflow-hidden border border-[var(--gold)]/20">
            <video
              controls
              preload="metadata"
              poster={`${import.meta.env.BASE_URL}images/intro-video-poster.png`}
              className="w-full aspect-video bg-black"
            >
              <source src={`${import.meta.env.BASE_URL}video/intro.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </GlassCard>
      </Container>
    </section>
  )
}

export default About
