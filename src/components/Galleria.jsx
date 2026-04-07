import fotoOp1 from '../assets/valvola-con-anello-protesico.jpg'
import fotoOp2 from '../assets/valvola-mitrale-corde-tendinee.jpg'
import fotoOp3 from '../assets/valvola-mitrale-corde-tendinee.jpg'
import './Galleria.css'

const foto = [
    { src: fotoOp1, alt: 'Chirurgia valvolare mininvasiva' },
    { src: fotoOp2, alt: 'Procedura cardiochirurgica' },
    { src: fotoOp3, alt: 'Intervento chirurgico cardiaco' },
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
                Immagini intraoperatorie di chirurgia valvolare mininvasiva eseguite
                presso centri di eccellenza cardiochirurgica.
            </p>
        </section>
    )
}