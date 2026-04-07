import { useState } from 'react'
import './Contatti.css'

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' })
  const [inviato, setInviato] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errore, setErrore] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setErrore(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, clinica: 'Generale' }),
      })
      if (!res.ok) throw new Error()
      setInviato(true)
    } catch {
      setErrore('Si è verificato un errore. Riprova o contattaci direttamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contatti" className="contatti section-wrapper">
      <p className="section-label">Informazioni</p>
      <h2 className="section-title">Contatti</h2>
      <div className="section-divider" />

      <div className="contatti__layout">
        <div className="contatti__info">
          <p>
            Per richieste di stampa, informazioni istituzionali o altre
            comunicazioni generali, compili il modulo. Il Dott. Fumero o
            il suo staff risponderanno entro 48 ore lavorative.
          </p>
          <p>
            Per prenotare una <strong>televisita</strong> utilizzi la sezione
            dedicata con il relativo modulo di prenotazione.
          </p>
          <p>
            Per prenotare una <strong>visita in presenza</strong> contatti
            direttamente la segreteria della struttura di preferenza.
          </p>
        </div>

        <div className="contatti__form-wrap">
          {inviato ? (
            <div className="contatti__successo">
              <div className="contatti__successo-icon">✓</div>
              <h3>Messaggio inviato</h3>
              <p>La risponderemo entro 48 ore lavorative.</p>
            </div>
          ) : (
            <form className="contatti__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome e cognome *</label>
                  <input name="nome" type="text" placeholder="Mario Rossi" required value={form.nome} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input name="email" type="email" placeholder="mario@email.it" required value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Telefono</label>
                <input name="telefono" type="tel" placeholder="+39 333 123 4567" value={form.telefono} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Messaggio *</label>
                <textarea name="messaggio" placeholder="Come possiamo aiutarla?" required value={form.messaggio} onChange={handleChange} />
              </div>
              {errore && <div className="contatti__errore">{errore}</div>}
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Invio in corso...' : 'Invia messaggio →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
