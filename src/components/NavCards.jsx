import './NavCards.css'

const cards = [
  {
    href: '#specializzazioni',
    icon: '♥',
    titolo: 'Specializzazioni',
    desc: 'Chirurgia mininvasiva, valvole, TAVI, Mitraclip e molto altro.',
  },
  {
    href: '#carriera',
    icon: '◎',
    titolo: 'Curriculum',
    desc: 'Formazione, esperienza internazionale e pubblicazioni scientifiche.',
  },
  {
    href: '#cliniche',
    icon: '⊕',
    titolo: 'Ambulatori',
    desc: 'Milano, Rozzano, Vigevano e Cagliari. Prenota una visita.',
  },
  {
    href: '#televisita',
    icon: '◈',
    titolo: 'Televisita',
    desc: 'Consulto online via Google Meet. Prenota il tuo appuntamento.',
  },
  {
    href: '#ricovero',
    icon: '✦',
    titolo: 'Ricovero',
    desc: 'Tutto quello che devi sapere su visita, SSN e solvenza.',
  },
]

export default function NavCards() {
  return (
    <section className="navcards section-wrapper">
      <div className="navcards__grid">
        {cards.map(c => (
          <a key={c.href} href={c.href} className="navcards__card">
            <div className="navcards__icon">{c.icon}</div>
            <div className="navcards__titolo">{c.titolo}</div>
            <div className="navcards__desc">{c.desc}</div>
            <span className="navcards__arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
