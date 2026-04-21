import { useState } from 'react'
import fotoOp1 from '../assets/valvola-mitrale-corde-tendinee.jpg'
import fotoOp2 from '../assets/valvola-con-anello-protesico.jpg'
import fotoOp3 from '../assets/foto-emodinamica.jpg'
import fotoOp4 from '../assets/foto-sala-procedure.jpg'
import './Galleria.css'

const foto = [
  { src: fotoOp1, alt: 'Valvola mitrale corde tendinee' },
  { src: fotoOp2, alt: 'Valvola con anello protesico' },
  { src: fotoOp3, alt: 'Dott. Fumero in sala emodinamica' },
  { src: fotoOp4, alt: 'Équipe in sala procedure' },
]

export default function Galleria() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="galleria" className="galleria section-wrapper">
      <p className="section-label">In sala operatoria</p>
      <h2 className="section-title">L'eccellenza chirurgica</h2>
      <div className="section-divider" />

      <div className="galleria__grid">
        {foto.map((f, i) => (
          <div key={i} className="galleria__item" onClick={() => setLightbox(f)}>
            <img src={f.src} alt={f.alt} />
            <div className="galleria__caption">{f.alt}</div>
            <div className="galleria__zoom-hint">🔍</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="galleria__lightbox" onClick={() => setLightbox(null)}>
          <div className="galleria__lightbox-wrap" onClick={e => e.stopPropagation()}>
            <button className="galleria__lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="galleria__lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}