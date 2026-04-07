import './Carriera.css'

const tappe = [
  { anno: '2016 — oggi', ruolo: 'Cardiac Surgery Consultant & Adjunct Clinical Professor', luogo: 'Humanitas Research Hospital — Humanitas University, Rozzano (MI)' },
  { anno: '2004 — 2015', ruolo: 'Cardiac Surgery Consultant', luogo: 'Ospedale San Raffaele, Milano' },
  { anno: '2001 — 2003', ruolo: 'Chef de Clinique des Universités', luogo: 'University Hospital Gabriel Montpied, Clermont-Ferrand, Francia' },
  { anno: '1998', ruolo: 'Fellowship in Chirurgia Cardiaca Pediatrica', luogo: 'Great Ormond Street Hospital, Londra' },
  { anno: '1996 — 2001', ruolo: 'Specializzazione in Cardiochirurgia', luogo: 'Centro Cardiologico Monzino — Università degli Studi di Milano' },
  { anno: '1990 — 1996', ruolo: 'Laurea in Medicina e Chirurgia', luogo: 'Università degli Studi di Milano' },
]

export default function Carriera() {
  return (
    <section id="carriera" className="carriera section-wrapper">
      <p className="section-label">Formazione & Esperienza</p>
      <h2 className="section-title">Carriera</h2>
      <div className="section-divider" />
      <div className="timeline">
        {tappe.map((t, i) => (
          <div key={i} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__anno">{t.anno}</div>
            <div className="timeline__ruolo">{t.ruolo}</div>
            <div className="timeline__luogo">{t.luogo}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
