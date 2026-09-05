import { motion } from 'motion/react'
import { projects, empiricalProjects, karmaYogaProjects } from '../../data/projects'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

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
              <div key={project.title} className="grid md:grid-cols-2 gap-6 items-stretch">
                <ProjectCard project={project} delay={i * 0.06} />
                {project.sidePage && (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.06 + 0.1 }}
                    className="rounded-[var(--radius)] overflow-hidden border border-[var(--gold)]/20 h-full min-h-[320px]"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${project.sidePage}`}
                      alt={`${project.title} — newsletter feature`}
                      className="w-full h-full object-contain object-top bg-white"
                      loading="lazy"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
