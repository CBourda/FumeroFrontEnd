import { useState } from 'react'
import './Specializzazioni.css'

const specializzazioni = [
    {
        id: 'mininvasiva',
        icon: '♥',
        nome: 'Chirurgia mininvasiva',
        desc: 'Minitoracotomia e ministernotomia per ridurre i tempi di recupero e il trauma chirurgico.',
        label: 'Minitoracotomia e ministernotomia',
        testo: '[TESTO DA FORNIRE — Descrizione chirurgia mininvasiva: come avviene, vantaggi rispetto alla chirurgia tradizionale, tempi di recupero, a chi è indicata.]',
    },
    {
        id: 'mitrale',
        icon: '◈',
        nome: 'Valvola mitrale',
        desc: 'Plastica e sostituzione valvolare mitralica. Tecniche riparative avanzate per preservare la valvola nativa.',
        label: 'Chirurgia riparativa e sostitutiva',
        testo: '[TESTO DA FORNIRE — Descrizione chirurgia valvola mitrale: plastica, sostituzione, tecniche riparative, indicazioni cliniche.]',
    },
    {
        id: 'aortica',
        icon: '◈',
        nome: 'Valvola aortica',
        desc: 'Chirurgia riparativa e sostitutiva della valvola aortica, inclusa la valvola bicuspide.',
        label: 'Chirurgia riparativa e sostitutiva',
        testo: '[TESTO DA FORNIRE — Descrizione chirurgia valvola aortica: riparazione, sostituzione, valvola bicuspide, protesi disponibili.]',
    },
    {
        id: 'tavi',
        icon: '⊕',
        nome: 'TAVI & Mitraclip',
        desc: 'Procedure transcatetere per pazienti ad alto rischio chirurgico.',
        label: 'Procedure transcatetere',
        testo: '[TESTO DA FORNIRE — Descrizione TAVI e Mitraclip/Tendyne: come avviene la procedura, indicazioni, vantaggi per pazienti ad alto rischio.]',
    },
    {
        id: 'aorta',
        icon: '≋',
        nome: 'Chirurgia aortica',
        desc: "Trattamento degli aneurismi dell'aorta toracica e delle dissezioni aortiche.",
        label: 'Aneurismi e dissezioni',
        testo: "[TESTO DA FORNIRE — Descrizione chirurgia aortica: aneurismi dell'aorta toracica, dissezioni aortiche, tecniche chirurgiche.]",
    },
    {
        id: 'fibrillazione',
        icon: '∿',
        nome: 'Fibrillazione atriale',
        desc: 'Trattamento chirurgico della fibrillazione atriale con ablazione con radiofrequenza bipolare.',
        label: 'Trattamento chirurgico',
        testo: '[TESTO DA FORNIRE — Descrizione trattamento chirurgico fibrillazione atriale: ablazione con radiofrequenza bipolare, indicazioni, risultati.]',
    },
]

export default function Specializzazioni() {
    const [selected, setSelected] = useState(null)

    return (
        <section id="specializzazioni" className="specializzazioni section-wrapper">
            <p className="section-label">Aree di intervento</p>
            <h2 className="section-title">Specializzazioni</h2>
            <div className="section-divider" />

            <div className="spec-grid">
                {specializzazioni.map(s => (
                    <div
                        key={s.id}
                        className="spec-card"
                        onClick={() => setSelected(s)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && setSelected(s)}
                    >
                        <div className="spec-icon">{s.icon}</div>
                        <div className="spec-name">{s.nome}</div>
                        <div className="spec-desc">{s.desc}</div>
                        <span className="spec-more">Scopri di più →</span>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="modal-overlay"
                    onClick={e => e.target === e.currentTarget && setSelected(null)}
                >
                    <div className="modal">
                        <button className="modal-close" onClick={() => setSelected(null)}>×</button>
                        <div className="modal-label">{selected.label}</div>
                        <h3 className="modal-title">{selected.nome}</h3>
                        <div className="modal-divider" />
                        <div className="modal-body">
                            <p>{selected.testo}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}