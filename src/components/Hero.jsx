import fotoDottore from '../assets/foto-dottore.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <p className="hero__eyebrow">Cardiochirurgo — Humanitas Research Hospital</p>
        <h1 className="hero__title">
          Dott. Andrea<br /><em>Fumero</em>
        </h1>
        <p className="hero__subtitle">
          Specialista in chirurgia cardiaca mininvasiva,<br />
          chirurgia valvolare e procedure transcatetere
        </p>
        <div className="hero__stats">
          <div className="stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Operazioni</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40+</span>
            <span className="stat-label">Pubblicazioni</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Anni di esperienza</span>
          </div>
        </div>
        <div className="hero__ctas">
          <a href="#cliniche" className="btn-gold">Prenota visita →</a>
          <a href="#televisita" className="btn-ghost">Prenota televisita</a>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__image-wrap">
          <img src={fotoDottore} alt="Dott. Andrea Fumero" />
        </div>
      </div>
    </section>
  )
}