import { useState, useEffect } from 'react'
import './Televisita.css'

const flusso = [
  { num: '1', titolo: 'Compila il modulo', desc: 'Inserisci i tuoi dati e il motivo del consulto.' },
  { num: '2', titolo: 'Ricevi gli estremi di pagamento', desc: 'Ti arriva una email con IBAN, causale e importo (€200).' },
  { num: '3', titolo: 'Effettua il bonifico', desc: 'Esegui il pagamento e invia la ricevuta via email.' },
  { num: '4', titolo: 'Conferma e link Google Meet', desc: 'Il Dott. Fumero conferma e ti invia il link per il collegamento.' },
]

export default function Televisita() {
  const [slot, setSlot] = useState(null)
  const [loadingSlot, setLoadingSlot] = useState(true)
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', motivo: '' })
  const [inviato, setInviato] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errore, setErrore] = useState(null)

  // Carica la data disponibile dal backend, con fallback frontend
  useEffect(() => {
    fetch('/api/appointment/slot')
      .then(res => res.json())
      .then(data => setSlot(data))
      .catch(() => {
        // Fallback: calcola lato frontend se backend non disponibile
        const ora = new Date()
        const giorno = ora.getDay() // 0=dom, 2=mar
        let giorniAlMartedi = (2 - giorno + 7) % 7
        if (giorniAlMartedi === 0) giorniAlMartedi = 7
        const martedi = new Date(ora)
        martedi.setDate(ora.getDate() + giorniAlMartedi)
        martedi.setHours(18, 0, 0, 0)
        const domenica = new Date(martedi)
        domenica.setDate(martedi.getDate() - 2)
        domenica.setHours(23, 59, 59, 0)
        const aperta = ora < domenica
        const data = martedi.toLocaleDateString('it-IT', {
          weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        }) + ' alle 18:00'
        setSlot({ aperta, data })
      })
      .finally(() => setLoadingSlot(false))
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setErrore(null)
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, clinica: 'Televisita' }),
      })
      const data = await res.json()
      if (!res.ok || data.status === 'closed') {
        setErrore(data.message || 'Errore nella richiesta. Riprova.')
        return
      }
      setInviato(true)
    } catch {
      setErrore('Si è verificato un errore. Riprova o contattaci direttamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="televisita" className="televisita section-wrapper">
      <p className="section-label">Consulto a distanza</p>
      <h2 className="section-title">Prenota una televisita</h2>
      <div className="section-divider" />

      <div className="televisita__layout">

        {/* Info sinistra */}
        <div className="televisita__info">

          {/* Data prossima disponibilità */}
          <div className="televisita__data-box">
            <div className="televisita__data-label">Prossima disponibilità</div>
            {loadingSlot ? (
              <div className="televisita__data-value">Caricamento...</div>
            ) : (
              <>
                <div className="televisita__data-value">{slot?.data}</div>
                {!slot?.aperta && (
                  <div className="televisita__data-closed">
                    ⚠ Prenotazioni chiuse — riaprono martedì sera
                  </div>
                )}
              </>
            )}
          </div>

          {/* Costo */}
          <div className="televisita__costo">
            <span className="televisita__costo-label">Costo televisita</span>
            <span className="televisita__costo-valore">€ 200</span>
          </div>

          {/* IBAN */}
          <div className="iban-box">
            <div className="iban-label">Estremi per il pagamento</div>
            <div className="iban-row">
              <span className="iban-meta">Intestato a</span>
              <span className="iban-value">Dott. Andrea Davide Fumero</span>
              <span className="iban-meta">IBAN</span>
              <span className="iban-value">IT54D0358901600010570777717</span>
              <span className="iban-meta">Causale</span>
              <span className="iban-causale">Televisita — [Nome Cognome] — [Data]</span>
            </div>
          </div>

          {/* Flusso */}
          <div className="flusso">
            {flusso.map((f, i) => (
              <div key={i} className={`flusso__step ${i === 0 ? 'flusso__step--active' : ''}`}>
                <div className="flusso__num">{f.num}</div>
                <div>
                  <div className="flusso__title">{f.titolo}</div>
                  <div className="flusso__desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form destra */}
        <div className="televisita__form-wrap">
          {!slot?.aperta && !loadingSlot ? (
            <div className="televisita__chiusa">
              <p>Le prenotazioni per la televisita di martedì sono chiuse.</p>
              <p>Riaprono martedì sera dopo le 18:00.</p>
            </div>
          ) : inviato ? (
            <div className="televisita__successo">
              <div className="televisita__successo-icon">✓</div>
              <h3>Richiesta inviata</h3>
              <p>Riceverà a breve una email con gli estremi per il bonifico.</p>
              <p>La televisita è prevista per <strong>{slot?.data}</strong>.</p>
              <p>Il Dott. Fumero confermerà l'appuntamento a pagamento verificato.</p>
            </div>
          ) : (
            <form className="televisita__form" onSubmit={handleSubmit}>
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
                <label>Telefono *</label>
                <input name="telefono" type="tel" placeholder="+39 333 123 4567" required value={form.telefono} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Motivo del consulto *</label>
                <textarea
                  name="motivo"
                  placeholder="Descriva brevemente il motivo della televisita. Potrà inviare referti e immagini via email dopo la conferma."
                  required
                  value={form.motivo}
                  onChange={handleChange}
                />
              </div>
              {errore && <div className="televisita__errore">{errore}</div>}
              <div className="form-note">
                Dopo l'invio riceverà una email con gli estremi per il bonifico (€200).
                La televisita verrà confermata dal Dott. Fumero a pagamento verificato.
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Invio in corso...' : 'Richiedi televisita →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}