import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
    { href: '#specializzazioni', label: 'Specializzazioni' },
    { href: '#ricovero',         label: 'Ricovero' },
    { href: '#carriera',         label: 'Carriera' },
    { href: '#pubblicazioni',    label: 'Pubblicazioni' },
    { href: '#cliniche',         label: 'Cliniche' },
    { href: '#contatti',         label: 'Contatti' },
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

            {/* Desktop links */}
            <ul className="navbar__links">
                {links.map(l => (
                    <li key={l.href}>
                        <a href={l.href}>{l.label}</a>
                    </li>
                ))}
                <li>
                    <a href="#televisita" className="navbar__cta">
                        Prenota televisita
                    </a>
                </li>
            </ul>

            {/* Mobile hamburger */}
            <button
                className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Menu"
            >
                <span /><span /><span />
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="navbar__mobile" onClick={closeMenu}>
                    {links.map(l => (
                        <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                    <a href="#televisita" className="navbar__cta">
                        Prenota televisita
                    </a>
                </div>
            )}
        </nav>
    )
}