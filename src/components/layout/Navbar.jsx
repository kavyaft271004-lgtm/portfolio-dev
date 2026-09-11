import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
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
  const [menuOpen, setMenuOpen] = useState(false)

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
        background: scrolled || menuOpen ? 'rgba(9, 22, 36, 0.9)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(212,175,55,0.15)' : '1px solid transparent',
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
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden text-[var(--text)] text-2xl leading-none p-1"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden"
            style={{ background: 'rgba(9, 22, 36, 0.97)', borderTop: '1px solid rgba(212,175,55,0.15)' }}
          >
            <Container className="flex flex-col py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base text-[var(--muted)] hover:text-[var(--gold-light)] transition-colors border-b border-white/5 last:border-none"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
