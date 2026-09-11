import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Container from '../ui/Container'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiential Learning', href: '#experiential-learning' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
      style={{
        background: scrolled ? 'rgba(9, 22, 36, 0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : '1px solid transparent',
      }}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-[var(--font-heading)] text-[var(--gold)] text-lg">
          Kavya Sivakumar
        </a>
        <nav className="hidden lg:flex gap-5 text-sm text-[var(--muted)] whitespace-nowrap">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--gold-light)] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </motion.header>
  )
}

export default Navbar
