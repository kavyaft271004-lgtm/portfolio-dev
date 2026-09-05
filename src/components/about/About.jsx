import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

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
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                >
                  <h3 className="text-[var(--gold-light)] font-medium">{interest.title}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{interest.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <GlassCard className="mt-12" delay={0.15}>
          <SectionHeading eyebrow="Say Hello" title="Introduction Video" />
          <div className="mt-6 rounded-[var(--radius)] overflow-hidden border border-[var(--gold)]/20">
            <video
              controls
              preload="metadata"
              poster={`${import.meta.env.BASE_URL}images/kavya-portrait.png`}
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
