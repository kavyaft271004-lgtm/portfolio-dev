import { motion } from 'motion/react'
import { projects, empiricalProjects, karmaYogaProjects, competitionsProjects } from '../../data/projects'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'

function ProjectCard({ project, delay }) {
  return (
    <GlassCard delay={delay} className="flex flex-col">
      <span className="text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
        {project.category}
      </span>
      <h3 className="text-xl mt-2">{project.title}</h3>
      <p className="text-sm text-[var(--muted)] mt-1">{project.type}</p>
      <p className="text-sm text-[var(--muted)] mt-4">{project.summary}</p>

      <ul className="mt-4 space-y-2 flex-1">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-[var(--muted)] flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-[7px]" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-3 py-1 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)]/70 hover:bg-[var(--accent)]/10"
          >
            {tool}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}

const POLAROID_LAYOUTS = [
  [{ rotate: -8, x: 0, y: 0 }],
  [
    { rotate: -10, x: -8, y: 6 },
    { rotate: 9, x: 20, y: -4 },
  ],
]

function Polaroid({ src, alt, rotate, x, y, delay }) {
  return (
    <motion.div
      className="absolute w-24 sm:w-32 bg-white p-1.5 pb-4 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing"
      style={{ top: y, right: x }}
      initial={{ opacity: 0, rotate: rotate * 2.5, scale: 0.7 }}
      whileInView={{ opacity: 1, rotate, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
      whileTap={{ scale: 1.05 }}
      drag
      dragElastic={0.5}
      dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
      dragSnapToOrigin
    >
      <img src={src} alt={alt} className="w-full aspect-square object-cover" loading="lazy" />
    </motion.div>
  )
}

function PolaroidProjectCard({ project, delay }) {
  const images = project.sideImages ?? []
  const layout = POLAROID_LAYOUTS[images.length - 1] ?? POLAROID_LAYOUTS[0]

  return (
    <div className="relative">
      <ProjectCard project={project} delay={delay} />
      <div className="absolute -top-5 -right-3 sm:-top-7 sm:-right-6" style={{ zIndex: 10 }}>
        {images.map((src, i) => (
          <Polaroid
            key={src}
            src={`${import.meta.env.BASE_URL}${src}`}
            alt={`${project.title} — photo`}
            rotate={layout[i]?.rotate ?? 0}
            x={layout[i]?.x ?? 0}
            y={layout[i]?.y ?? 0}
            delay={delay + i * 0.12}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectRow({ project, delay }) {
  const images = project.sideImages ?? []

  const linkButton = project.link && (
    <Button
      as="a"
      href={project.link}
      target="_blank"
      rel="noreferrer"
      variant="primary"
      className="px-6 py-3 w-full sm:w-auto"
    >
      View Prototype →
    </Button>
  )

  if (project.flipReveal && images.length > 0) {
    return (
      <div className="space-y-4">
        <PolaroidProjectCard project={project} delay={delay} />
        {linkButton && <div className="flex justify-center">{linkButton}</div>}
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="space-y-4">
        <ProjectCard project={project} delay={delay} />
        {linkButton}
      </div>
    )
  }

  const isCover = project.sideFit === 'cover'
  const fitClass = isCover ? 'object-cover' : 'object-contain bg-white'
  const heightClass = isCover ? 'md:h-[260px]' : 'md:h-[420px]'

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <ProjectCard project={project} delay={delay} />
      <div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: delay + 0.1 }}
          className={`rounded-[var(--radius)] overflow-hidden border border-[var(--gold)]/20 mx-auto w-full max-w-sm ${heightClass} ${
            images.length > 1 ? 'grid grid-cols-2 gap-1.5' : ''
          }`}
        >
          {images.map((src) => (
            <img
              key={src}
              src={`${import.meta.env.BASE_URL}${src}`}
              alt={`${project.title} — photo`}
              className={`w-full h-full ${fitClass}`}
              loading="lazy"
            />
          ))}
        </motion.div>
        {linkButton && <div className="mt-4 flex justify-center md:justify-start">{linkButton}</div>}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--background)]">
      <Container>
        <SectionHeading eyebrow="Academic Work" title="Projects" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.06} />
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Independent Research" title="Empirical Study" />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {empiricalProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.06} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Leadership Experiential Action Program" title="Karma Yoga Project" />
          <div className="mt-12 space-y-6">
            {karmaYogaProjects.map((project, i) => (
              <ProjectRow key={project.title} project={project} delay={i * 0.06} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Beyond the Classroom" title="Competitions at GLIM" />
          <div className="mt-12 space-y-6">
            {competitionsProjects.map((project, i) => (
              <ProjectRow key={project.title} project={project} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
