import './Hero2.css'
// Quando Andrea manda la foto:
// import fotoScrivania from '../assets/foto-scrivania.jpg'

export default function Hero2() {
  return (
    <section className="hero2">
      <div className="hero2__image-wrap">
        {/* Sostituire con:
            <img src={fotoScrivania} alt="Dott. Fumero in ambulatorio" />
            Una volta ricevuta la foto da Andrea */}
        <div className="hero2__placeholder">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span>Foto alla scrivania — in arrivo</span>
        </div>
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