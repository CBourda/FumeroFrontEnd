import './Hero2.css'
import fotoReparto from '../assets/foto-corridoio.jpg'

export default function Hero2() {
  return (
    <section className="hero2">
      <div className="hero2__image-wrap">
        <img src={fotoReparto} alt="Dott. Fumero in sala operatoria" />
        <div className="hero2__overlay" />
      </div>
      <div className="hero2__content">
        <p className="section-label">Il percorso del paziente</p>
        <h2 className="hero2__title">
          Dalla visita<br />
          <em>all'intervento</em>
        </h2>
        <p className="hero2__sub">
          Un approccio personalizzato per ogni paziente, dalla prima valutazione
          fino al follow-up postoperatorio.
        </p>
        <a href="#ricovero" className="btn-gold">Scopri il percorso →</a>
      </div>
    </section>
  )
}