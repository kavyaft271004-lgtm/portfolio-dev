import { motion } from 'motion/react'
import { experience } from '../../data/experience'
import { education, certifications, achievements } from '../../data/education'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--background)]">
      <Container>
        <SectionHeading eyebrow="Her Journey" title="Experience" />

        <div className="mt-12 relative border-l border-[var(--gold)]/25 pl-8 space-y-10">
          {experience.map((role, i) => (
            <motion.div
              key={role.role + role.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)]" />
              <h3 className="text-xl">{role.role}</h3>
              <p className="text-sm text-[var(--gold)] tracking-wide mt-1">{role.period}</p>
              <p className="text-[var(--muted)] text-sm">{role.company} · {role.location}</p>
              <ul className="mt-4 space-y-2">
                {role.points.map((point) => (
                  <li key={point} className="text-sm text-[var(--muted)] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-[7px]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-[var(--gold-light)] font-medium mb-4">Education</h3>
            <ul className="space-y-3">
              {education.map((edu) => (
                <li key={edu.degree} className="text-sm text-[var(--muted)]">
                  <span className="text-[var(--text)]">{edu.degree}</span> — {edu.institution}
                  <br />
                  {edu.period}{edu.gpa ? ` · ${edu.gpa}` : ''}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard delay={0.1}>
            <h3 className="text-[var(--gold-light)] font-medium mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-[var(--muted)] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-[7px]" />
                  {cert}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard delay={0.2}>
            <h3 className="text-[var(--gold-light)] font-medium mb-4">Awards &amp; Achievements</h3>
            <ul className="space-y-2">
              {achievements.map((item) => (
                <li key={item} className="text-sm text-[var(--muted)] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-[7px]" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}

export default Experience
