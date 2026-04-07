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
                    <a href="#televisita" className="btn-gold">Prenota televisita →</a>
                    <a href="#contatti" className="btn-ghost">Contattaci</a>
                </div>
            </div>

            <div className="hero__right">
                <div className="hero__image-wrap">
                    {/* Sostituire con: <img src="/foto-dottore.jpg" alt="Dott. Andrea Fumero" /> */}
                    <div className="hero__photo-placeholder">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                        <span>Foto Dott. Fumero</span>
                    </div>
                </div>
            </div>
        </section>
    )
}