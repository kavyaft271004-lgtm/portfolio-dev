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

      {project.images && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {project.images.map((src) => (
            <div
              key={src}
              className="aspect-video rounded-[var(--radius)] overflow-hidden border border-[var(--gold)]/20"
            >
              <img
                src={`${import.meta.env.BASE_URL}${src}`}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

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
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {karmaYogaProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
