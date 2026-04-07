import { useState } from 'react'
import cliniche from '../data/cliniche.json'
import './Cliniche.css'

export default function Cliniche() {
  const [attiva, setAttiva] = useState(0)
  const c = cliniche[attiva]

  return (
    <section id="cliniche" className="cliniche section-wrapper">
      <p className="section-label">Dove visitare</p>
      <h2 className="section-title">Ambulatori</h2>
      <div className="section-divider" />
      <p className="cliniche__intro">
        Per prenotare una visita in presenza contatti direttamente la segreteria
        della struttura di preferenza. Le televisite si prenotano tramite il modulo dedicato.
      </p>

      {/* Desktop: griglia 2x2 */}
      <div className="cliniche__grid">
        {cliniche.map(c => (
          <div key={c.id} className="clinica__card">
            <div className="clinica__city">{c.citta}</div>
            <div className="clinica__name">{c.nome}</div>
            <div className="clinica__info">
              <span>{c.indirizzo}</span>
              <a href={`tel:${c.telefono.replace(/\s/g, '')}`}>{c.telefono}</a>
              {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
            </div>
            <div className="clinica__actions">
              <a href={c.schedaMedico} target="_blank" rel="noreferrer" className="btn-outline">Scheda medico</a>
              <a href={c.sitoWeb} target="_blank" rel="noreferrer" className="btn-outline">Sito web</a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: tab */}
      <div className="cliniche__tabs">
        <div className="cliniche__tab-buttons">
          {cliniche.map((c, i) => (
            <button
              key={c.id}
              className={`cliniche__tab-btn ${i === attiva ? 'active' : ''}`}
              onClick={() => setAttiva(i)}
            >
              {c.citta}
            </button>
          ))}
        </div>
        <div className="cliniche__tab-content">
          <div className="clinica__city">{c.citta}</div>
          <div className="clinica__name">{c.nome}</div>
          <div className="clinica__info">
            <span>{c.indirizzo}</span>
            <a href={`tel:${c.telefono.replace(/\s/g, '')}`}>{c.telefono}</a>
            {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
          </div>
          <div className="clinica__actions">
            <a href={c.schedaMedico} target="_blank" rel="noreferrer" className="btn-outline">Scheda medico</a>
            <a href={c.sitoWeb} target="_blank" rel="noreferrer" className="btn-outline">Sito web</a>
          </div>
        </div>
      </div>
    </section>
  )
}