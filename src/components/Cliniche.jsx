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

      {/* Tab buttons */}
      <div className="cliniche__tab-buttons">
        {cliniche.map((cl, i) => (
          <button
            key={cl.id}
            className={`cliniche__tab-btn ${i === attiva ? 'active' : ''}`}
            onClick={() => setAttiva(i)}
          >
            {cl.citta}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="cliniche__tab-content">
        <div className="cliniche__tab-info">
          <div className="clinica__city">{c.citta}</div>
          <div className="clinica__name">{c.nome}</div>
          <div className="clinica__info">
            <span>{c.indirizzo}</span>
            <a href={`tel:${c.telefono.replace(/\s/g, '')}`}>{c.telefono}</a>
            {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
          </div>
          <div className="clinica__actions">
            <a href={c.schedaMedico} target="_blank" rel="noreferrer" className="btn-outline">
              Scheda medico
            </a>
            <a href={c.sitoWeb} target="_blank" rel="noreferrer" className="btn-outline">
              Sito web
            </a>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="cliniche__map">
          <iframe
            title={c.nome}
            src={c.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}