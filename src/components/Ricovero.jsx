import './Ricovero.css'

const steps = [
  {
    num: '01',
    titolo: 'Pre-ricovero',
    desc: '[TESTO DA FORNIRE — Esami pre-operatori, valutazione anestesiologica, preparazione e indicazioni pratiche per il paziente.]',
  },
  {
    num: '02',
    titolo: "Il giorno dell'intervento",
    desc: "[TESTO DA FORNIRE — Accoglienza in struttura, preparazione in sala operatoria, durata media dell'intervento.]",
  },
  {
    num: '03',
    titolo: 'Terapia intensiva e degenza',
    desc: '[TESTO DA FORNIRE — Post-operatorio, monitoraggio in terapia intensiva, tempi di degenza SSN vs Solvenza.]',
  },
  {
    num: '04',
    titolo: 'Dimissione e follow-up',
    desc: '[TESTO DA FORNIRE — Istruzioni per il rientro a casa, farmaci, controlli successivi e tempistiche di recupero.]',
  },
]

export default function Ricovero() {
  return (
    <section id="ricovero" className="ricovero section-wrapper">
      <p className="section-label">Informazioni pratiche</p>
      <h2 className="section-title">Come si svolge il ricovero</h2>
      <div className="section-divider" />

      <div className="ricovero__layout">
        {/* Testo introduttivo + SSN vs Solvenza */}
        <div className="ricovero__testo">
          <p>
            [TESTO DA FORNIRE — Introduzione al percorso di ricovero per un intervento
            cardiochirurgico. Cosa aspettarsi, come prepararsi, a chi rivolgersi.]
          </p>

          <div className="ricovero__box">
            <div className="ricovero__box-title">Ricovero SSN</div>
            <p className="ricovero__box-desc">
              [TESTO DA FORNIRE — Come funziona il ricovero in regime SSN:
              tempi di attesa, modalità di accesso, durata media della degenza.]
            </p>
          </div>

          <div className="ricovero__box ricovero__box--gold">
            <div className="ricovero__box-title">Ricovero in Solvenza</div>
            <p className="ricovero__box-desc">
              [TESTO DA FORNIRE — Come funziona il ricovero in solvenza:
              tempi, vantaggi, modalità di accesso e costi indicativi.]
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="ricovero__steps">
          {steps.map(s => (
            <div key={s.num} className="ricovero__step">
              <div className="ricovero__step-num">{s.num}</div>
              <div>
                <div className="ricovero__step-title">{s.titolo}</div>
                <div className="ricovero__step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
