import { useState } from 'react'
import cliniche from '../data/cliniche.json'
import fotoMilano from '../assets/foto-ambulatorio-milano.jpg'
import fotoRozzano from '../assets/foto-ambulatorio-rozzano.jpg'
import fotoVigevano from '../assets/foto-ambulatorio-vigevano.jpg'
import './Cliniche.css'

const fotoMap = {
  'foto-ambulatorio-milano.jpg': fotoMilano,
  'foto-ambulatorio-rozzano.jpg': fotoRozzano,
  'foto-ambulatorio-vigevano.jpg': fotoVigevano,
}

export default function Cliniche() {
  const [attiva, setAttiva] = useState(0)
  const c = cliniche[attiva]
  const foto = c.foto ? fotoMap[c.foto] : null

  return (
    <section id="cliniche" className="cliniche section-wrapper">
      <p className="section-label">Dove visitare</p>
      <h2 className="section-title">Ambulatori</h2>
      <div className="section-divider" />

      <div className="cliniche__visita">
        <p>
          Può prenotare una prima visita preoperatoria, second opinion o visita di controllo
          presso una delle strutture dove il dott. Fumero svolge attività ambulatoriale.
        </p>
        <p>
          Durante la visita il dott. Fumero prenderà visione della documentazione inerente
          la Sua situazione clinica, valutando eventuali esami diagnostici già eseguiti ed
          effettuerà una visita medica specialistica completa. Le spiegherà le Sue problematiche
          e La informerà di tutte le opzioni terapeutiche disponibili.
        </p>
        <p>
          Una volta confermata la volontà al ricovero, il dott. Fumero provvederà personalmente
          al Suo inserimento in lista di attesa presso Humanitas Rozzano.
        </p>
      </div>

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

        {/* Sinistra — info + mini mappa */}
        <div className="cliniche__tab-info">
          <div className="clinica__city">{c.citta}</div>
          <div className="clinica__name">{c.nome}</div>
          <div className="clinica__info">
            <span>{c.indirizzo}</span>
            <a href={`tel:${c.telefono.replace(/\s/g, '')}`}>{c.telefono}</a>
            {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
          </div>

          {/* Mini mappa */}
          <div className="cliniche__mini-map">
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

          <div className="clinica__actions">
            <a href={c.schedaMedico} target="_blank" rel="noreferrer" className="btn-outline">
              Scheda medico
            </a>
            <a href={c.sitoWeb} target="_blank" rel="noreferrer" className="btn-outline">
              Sito web
            </a>
          </div>
        </div>

        {/* Destra — foto grande */}
        <div className="cliniche__foto-grande">
          {foto ? (
            <img src={foto} alt={c.nome} />
          ) : (
            <div className="cliniche__foto-placeholder">
              <span>Foto in arrivo</span>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}