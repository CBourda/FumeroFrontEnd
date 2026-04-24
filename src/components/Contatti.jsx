import './Contatti.css'

export default function Contatti() {
  return (
    <section id="contatti" className="contatti section-wrapper">
      <p className="section-label">Informazioni</p>
      <h2 className="section-title">Contatti</h2>
      <div className="section-divider" />
      <div className="contatti__info">
        <p>
          Per prenotare una visita in presenza contatti direttamente la segreteria
          della struttura di preferenza tramite i recapiti indicati nella sezione Ambulatori.
        </p>
        <p>
          Per prenotare una televisita utilizzi il modulo nella sezione dedicata.
        </p>
        <p>
          Per altre comunicazioni:
        </p>
        <a href="mailto:andrea.fumero@humanitas.it" className="contatti__email">
          andrea.fumero@humanitas.it
        </a>
      </div>
    </section>
  )
}