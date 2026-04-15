import fotoOp1 from '../assets/valvola-mitrale-corde-tendinee.jpg'
import fotoOp2 from '../assets/valvola-con-anello-protesico.jpg'
import './Galleria.css'

const foto = [
  { src: fotoOp1, alt: 'Intervento mininvasivo: Plastica valvolare mitralica in minitoracotomia' },
  { src: fotoOp2, alt: 'Intervento mininvasivo: Plastica valvolare mitralica in minitoracotomia' },
]

export default function Galleria() {
  return (
    <section id="galleria" className="galleria section-wrapper">
      <p className="section-label">In sala operatoria</p>
      <h2 className="section-title">L'eccellenza chirurgica</h2>
      <div className="section-divider" />
      <div className="galleria__grid">
        {foto.map((f, i) => (
          <div key={i} className="galleria__item">
            <img src={f.src} alt={f.alt} />
          </div>
        ))}
      </div>
      <p className="galleria__nota">
        Intervento mininvasivo: Plastica valvolare mitralica in minitoracotomia
      </p>
    </section>
  )
}