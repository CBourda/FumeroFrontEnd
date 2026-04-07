import { useState } from 'react'
import './Televisita.css'

// Calcola il prossimo martedì alle 18:00
function getProssimoMartedi() {
  const oggi = new Date()
  const giorno = oggi.getDay() // 0=dom, 1=lun, ..., 2=mar
  const domenica = new Date(oggi)

  // Trova il prossimo martedì
  let giorniAlMartedi = (2 - giorno + 7) % 7
  if (giorniAlMartedi === 0) giorniAlMartedi = 7 // se oggi è martedì, prossimo martedì

  const martedi = new Date(oggi)
  martedi.setDate(oggi.getDate() + giorniAlMartedi)
  martedi.setHours(18, 0, 0, 0)

  // Stop prenotazioni domenica a mezzanotte (2 giorni prima del martedì)
  domenica.setDate(martedi.getDate() - 2)
  domenica.setHours(23, 59, 59, 0)

  const prenotazioneChiusa = oggi > domenica

  return { martedi, domenica, prenotazioneChiusa }
}

function formatData(date) {
  return date.toLocaleDateString('it-IT', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })
}

const flusso = [
  { num: '1', titolo: 'Compila il modulo', desc: 'Inserisci i tuoi dati e il motivo del consulto.' },
  { num: '2', titolo: 'Ricevi gli estremi di pagamento', desc: 'Ti arriva una email con IBAN, causale e importo (€200).' },
  { num: '3', titolo: 'Effettua il bonifico', desc: 'Esegui il pagamento e invia la ricevuta via email.' },
  { num: '4', titolo: 'Conferma e link Google Meet', desc: 'Il Dott. Fumero conferma e ti invia il link per il collegamento.' },
]

export default function Televisita() {
  const { martedi, domenica, prenotazioneChiusa } = getProssimoMartedi()
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', motivo: '' })
  const [inviato, setInviato] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errore, setErrore] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setErrore(null)
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          clinica: 'Televisita',
          messaggio: form.motivo,
          dataTelevista: martedi.toISOString(),
        }),
      })
      if (!res.ok) throw new Error('Errore nella richiesta')
      setInviato(true)
    } catch (err) {
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
          <div className="televisita__data-box">
            <div className="televisita__data-label">Prossima disponibilità</div>
            <div className="televisita__data-value">{formatData(martedi)} · ore 18:00</div>
            <div className="televisita__data-note">
              Le prenotazioni chiudono domenica {formatData(domenica).split(' ').slice(1).join(' ')} a mezzanotte
            </div>
          </div>

          <div className="televisita__costo">
            <span className="televisita__costo-label">Costo televisita</span>
            <span className="televisita__costo-valore">€ 200</span>
          </div>

          <div className="iban-box">
            <div className="iban-label">Estremi per il pagamento</div>
            <div className="iban-row">
              <span className="iban-meta">Intestato a</span>
              <span className="iban-value">Dott. Andrea Davide Fumero</span>
              <span className="iban-meta">IBAN</span>
              {/* IBAN reale da inserire */}
              <span className="iban-value">IT00 X000 0000 0000 0000 0000 000</span>
              <span className="iban-meta">Causale</span>
              <span className="iban-causale">Televisita — [Nome Cognome] — [Data]</span>
            </div>
          </div>

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
          {prenotazioneChiusa ? (
            <div className="televisita__chiusa">
              <p>Le prenotazioni per la televisita di martedì sono chiuse.</p>
              <p>Le prenotazioni per il prossimo martedì apriranno martedì sera.</p>
            </div>
          ) : inviato ? (
            <div className="televisita__successo">
              <div className="televisita__successo-icon">✓</div>
              <h3>Richiesta inviata</h3>
              <p>Riceverà a breve una email con gli estremi per il bonifico.</p>
              <p>La televisita è prevista per <strong>{formatData(martedi)} alle 18:00</strong>.</p>
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
