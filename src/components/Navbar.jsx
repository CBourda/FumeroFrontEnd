import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#specializzazioni', label: 'Specializzazioni' },
  { href: '#carriera',         label: 'Carriera' },
  { href: '#pubblicazioni',    label: 'Pubblicazioni' },
  { href: '#cliniche',         label: 'Ambulatori' },
  { href: '#ricovero',         label: 'Ricovero' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">Dott. Andrea Fumero</a>

      <ul className="navbar__links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__mobile" onClick={closeMenu}>
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}