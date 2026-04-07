import pubblicazioni from '../data/pubblicazioni.json'
import './Pubblicazioni.css'

// Mostra le prime 4, link a PubMed per tutte
const TOP = 4

export default function Pubblicazioni() {
  return (
    <section id="pubblicazioni" className="pubblicazioni section-wrapper">
      <p className="section-label">Ricerca scientifica</p>
      <h2 className="section-title">Pubblicazioni selezionate</h2>
      <div className="section-divider" />

      <div className="pub__list">
        {pubblicazioni.slice(0, TOP).map(p => (
          <div key={p.id} className="pub__item">
            <div className="pub__journal">{p.rivista} · {p.anno}</div>
            <div className="pub__title">{p.titolo}</div>
            <a href={p.pubmed} target="_blank" rel="noreferrer" className="pub__link">
              PubMed →
            </a>
          </div>
        ))}
      </div>

      <a
        href="http://www.ncbi.nlm.nih.gov/pubmed/?term=fumero+andrea"
        target="_blank"
        rel="noreferrer"
        className="pub__all"
      >
        Vedi tutte le {pubblicazioni.length} pubblicazioni su PubMed →
      </a>
    </section>
  )
}
