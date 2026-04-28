import React, { useState } from 'react'
import fotoMininvasiva from '../assets/foto-mininvasiva.jpg'
import fotoMitrale from '../assets/valvola-mitrale-corde-tendinee.jpg'
import fotoAortica from '../assets/valvola-con-anello-protesico.jpg'
import fotoBypassBW from '../assets/foto-bypass-coronarico-rx.jpeg'
import fotoBypass from '../assets/foto-bypass-coronarico.jpeg'
import fotoTavi from '../assets/foto-emodinamica.jpg'
import fotoAortica2 from '../assets/foto-valvola-aortica.jpg'
import fotoAorta from '../assets/foto-aneurisma-aorta.jpg'
import fotoAortaPost from '../assets/foto-sostituzione-aorta.jpg'
import fotoAortaFinal from '../assets/merged-aorta.jpg'
import fotoBypassFinal from '../assets/merged-bypass.jpg'
import './Specializzazioni.css'

const specializzazioni = [
  {
    id: 'mininvasiva',
    icon: '♥',
    nome: 'Chirurgia mininvasiva',
    desc: 'Accessi chirurgici di piccole dimensioni per ridurre il trauma e accelerare il recupero.',
    label: 'Minitoracotomia e ministernotomia',
    foto: fotoMininvasiva,
    testo: `Gli accessi normalmente utilizzati nella chirurgia mininvasiva sono la "ministernotomia" e la "minitoracotomia destra". Questi accessi chirurgici di piccole dimensioni (circa 8-10 cm) determinano un minor trauma sulla parete toracica (cute, sottocute, sterno e muscoli), consentendo la possibilità di eseguire il medesimo intervento che verrebbe eseguito in sternotomia mediana.

La ministernotomia viene utilizzata per gli interventi sulla valvola aortica, mentre la minitoracotomia viene utilizzata per gli interventi sulla valvola mitrale, tricuspide, per il trattamento della FA, chiusura dei difetti interatriali e asportazione di mixomi. Gli interventi di chirurgia mininvasiva vengono comunque eseguiti con l'ausilio della circolazione extracorporea e fermando il cuore. Sono quindi dei veri e propri interventi chirurgici condotti in anestesia generale e che necessitano della terapia intensiva nel postoperatorio.

Il minor traumatismo consente minor dolore nel postoperatorio e tempi di recupero più rapidi. L'approccio chirurgico mininvasivo non è però sempre percorribile, dipendendo la sua fattibilità da diversi fattori quali l'anatomia del torace, l'anatomia del cuore, la funzione cardiaca, l'età, la complessità dell'intervento e la presenza o meno di vasculopatie.

Per questo motivo Le verrà proposto l'intervento e l'accesso chirurgico più adatto ad ogni singolo caso, in modo tale da garantire il miglior trattamento per ogni paziente.`,
  },
  {
    id: 'mitrale',
    icon: '◈',
    nome: 'Valvola mitrale',
    desc: 'Plastica e sostituzione valvolare mitralica con tecniche riparative avanzate.',
    label: 'Chirurgia riparativa e sostitutiva',
    foto: fotoMitrale,
    testo: `La valvola mitrale è una valvola unidirezionale che consente il passaggio del sangue dall'atrio sx al ventricolo sx. In caso di stenosi della valvola il sangue trova un ostacolo nel passare da una cavità all'altra. Questa situazione porta ad un aumento delle pressioni atriali sx con progressiva dilatazione dell'atrio e aumento delle pressioni polmonari, con la possibile comparsa di aritmie.

In questi casi a seconda del grado di stenosi, della presenza di calcificazioni e di insufficienza associata può essere più o meno possibile un intervento di riparazione (plastica). Più comunemente in caso di stenosi mitralica, soprattutto quando di origine reumatica o nel paziente anziano con diffuse calcificazioni, è maggiormente probabile un intervento di sostituzione valvolare con una protesi.

In caso di insufficienza della valvola mitrale, ogni volta che il ventricolo si contrae per espellere il sangue in circolo attraverso la valvola aortica, una parte di sangue torna nell'atrio, generando un sovraccarico di volume. Questa situazione porta ad una progressiva dilatazione ed affaticamento del cuore che nel tempo perde di capacità contrattile. In questi casi a seconda del tipo di insufficienza è possibile un intervento di tipo riparativo della valvola mitralica (plastica).

In entrambi i casi l'intervento può essere eseguito in sternotomia o con un accesso mininvasivo (minitoracotomia). L'intervento, eseguito in anestesia generale, dura circa 4 ore. A fine intervento si viene trasferiti in terapia intensiva per 1 o 2 giorni, quindi in reparto di cardiochirurgia per 5-6 giorni, e poi in riabilitazione per circa 14 giorni.`,
  },
  {
    id: 'aortica',
    icon: '◈',
    nome: 'Valvola aortica',
    desc: 'Chirurgia riparativa e sostitutiva della valvola aortica, inclusa la valvola bicuspide.',
    label: 'Chirurgia riparativa e sostitutiva',
    foto: fotoAortica2,
    testo: `La valvola aortica è una valvola unidirezionale che consente il passaggio del sangue dal ventricolo sx all'aorta ascendente (cioè verso tutto il corpo). In caso di stenosi della valvola il sangue trova un ostacolo nel passare dal ventricolo in circolo. Questa situazione porta ad un aumento degli spessori e del volume del ventricolo sx con progressiva perdita della capacità contrattile e della funzione del cuore.

In questi casi a seconda del grado di stenosi, della presenza di calcificazioni e di insufficienza associata è quasi sempre necessario un intervento di sostituzione della valvola con una protesi (biologica o meccanica). In alcuni casi è possibile posizionare una nuova protesi aortica all'interno della valvola aortica nativa stenotica attraverso l'uso di cateteri senza intervento chirurgico (vedi TAVI).

In caso di insufficienza della valvola aortica, una parte di sangue espulso in circolo torna nel ventricolo sx, generando un sovraccarico di volume. Anche questa situazione porta ad una progressiva dilatazione ed affaticamento del cuore. In questi casi a volte può essere possibile un intervento di tipo riparativo (plastica), in alternativa si procederà con la sostituzione con una protesi biologica o meccanica.

L'intervento può essere eseguito in sternotomia o con accesso mininvasivo (ministernotomia). Dura circa 4 ore in anestesia generale. A fine intervento: 1-2 giorni in terapia intensiva, 5-6 giorni in reparto, circa 14 giorni in riabilitazione.`,
  },
  {
    id: 'tavi',
    icon: '⊕',
    nome: 'TAVI & Mitraclip',
    desc: 'Procedure transcatetere per pazienti ad alto rischio chirurgico. Senza sternotomia.',
    label: 'Procedure transcatetere',
    foto: fotoTavi,
    testo: `La TAVI e la Mitraclip sono due procedure percutanee/transcatetere per il trattamento rispettivamente della stenosi aortica e dell'insufficienza mitralica. A differenza dell'intervento chirurgico, queste procedure vengono condotte attraverso dei cateteri (con accesso a livello dei vasi femorali — inguine), senza la necessità di accessi chirurgici, senza l'utilizzo della circolazione extracorporea e senza la necessità di fermare o "aprire" il cuore.

Sono procedure che hanno un impatto molto inferiore sul paziente rispetto alla chirurgia in termini di traumatismo, garantendo tempi di recupero immediati. Sono riservate a pazienti anziani, pazienti con molte comorbidità, pazienti ad alto rischio chirurgico e pazienti inoperabili con tecniche classiche o mininvasive.

Per poter eseguire queste procedure deve essere presente un'anatomia valvolare, cardiaca e vascolare favorevole. Queste caratteristiche sono valutate attraverso l'esame ecocardiografico transesofageo e la TAC cuore con mezzo di contrasto.

La TAVI viene eseguita in anestesia locale e sedazione e nella maggior parte dei casi non necessita di terapia intensiva postoperatoria. Normalmente in assenza di complicanze si potrà essere dimessi direttamente a domicilio dopo 3 giorni. La Mitraclip viene eseguita in anestesia generale, con 1 giorno di terapia intensiva e dimissione dopo 4-5 giorni in assenza di complicanze.`,
  },
  {
    id: 'aorta',
    icon: '≋',
    nome: 'Chirurgia aortica',
    desc: "Trattamento degli aneurismi dell'aorta toracica e delle dissezioni aortiche.",
    label: 'Aneurismi e dissezioni',
    foto: fotoAortaFinal,//[fotoAorta, fotoAortaPost],
    fotoLabel: ['Pre-operatorio: aneurisma aorta ascendente', 'Post-operatorio: sostituzione con protesi vascolare'],
    testo: `Per aneurisma aortico si intende una dilatazione dell'aorta (il vaso arterioso che dal cuore porta il sangue in tutto il corpo). Sono di interesse del cardiochirurgo tutti gli aneurismi dell'aorta ascendente (sia del bulbo aortico sia del tratto tubulare sovracoronarico) e dell'arco aortico fino a livello dell'arteria succlavia.

La progressiva dilatazione dell'aorta ascendente può nel tempo portare ad una rottura dell'aorta stessa (dissezione), evento che comporta la necessità dell'esecuzione di un intervento chirurgico urgente. Per questo motivo è opportuno intervenire con un intervento di sostituzione della parte aneurismatica con una protesi vascolare anche in assenza di sintomi, in modo particolare sopra i 50-55 mm di diametro.

L'intervento eseguito in anestesia generale, in sternotomia, fermando il cuore e utilizzando la circolazione extracorporea, dura 4-5 ore a seconda dei casi. In caso di interessamento del bulbo aortico può essere necessario il reimpianto delle coronarie e il reimpianto della valvola aortica (intervento di David) o la sostituzione con una protesi (intervento di Bentall).

A fine intervento: 1-2 giorni in terapia intensiva, 5-6 giorni in reparto, circa 14 giorni in riabilitazione.`,
  },
  {
    id: 'fibrillazione',
    icon: '∿',
    nome: 'Fibrillazione atriale',
    desc: 'Trattamento chirurgico della fibrillazione atriale con ablazione con radiofrequenza bipolare.',
    label: 'Ablazione chirurgica',
    foto: null,
    testo: `La fibrillazione atriale è una alterazione del ritmo del cuore che può insorgere per diversi motivi. Questa alterazione del ritmo cardiaco può determinare una progressiva dilatazione del cuore che contribuisce al peggioramento della stessa in termini di durata dell'aritmia ed in termini di frequenza cardiaca. La fibrillazione atriale può essere parossistica, persistente e cronica.

Questa aritmia può determinare una sensazione di mancanza di fiato (dispnea), affaticamento (astenia) e l'incapacità a compiere sforzi fisici. Una delle complicanze più temibili è la formazione di trombi nell'atrio sinistro che può determinare in caso di embolia una ischemia cerebrale con conseguenze neurologiche anche gravi quali l'ictus.

Per questo motivo se persiste un problema di fibrillazione atriale dopo tentativi inefficaci di recuperare un ritmo sinusale mediante terapia medica, cardioversione elettrica o ablazione transcatetere, è possibile eseguire una ablazione chirurgica della FA. Questo intervento può essere eseguito con due differenti modalità, ma sempre in anestesia generale: con un accesso minitoracotomico destro con la circolazione extracorporea a cuore fermo e cuore aperto, oppure con un accesso subxifoideo senza circolazione extracorporea a cuore battente.

In entrambi i casi potrà essere eseguita anche la chiusura/esclusione dell'auricola sinistra mediante l'utilizzo di una Clip. L'intervento dura circa 3-4 ore. A fine intervento: 1-2 giorni in terapia intensiva, 5-6 giorni in reparto, circa 7 giorni in riabilitazione.`,
  },
  {
    id: 'coronarica',
    icon: '⊗',
    nome: 'Malattia coronarica',
    desc: 'Bypass aortocoronarico per il trattamento delle stenosi coronariche.',
    label: 'Bypass aortocoronarico',
    foto: fotoBypassFinal,//[fotoBypass, fotoBypassBW],
    testo: `In caso di stenosi (restringimenti) delle coronarie, malattia che può determinare l'angina (dolore toracico) o che può portare ad un infarto, se non fosse possibile intervenire con una dilatazione percutanea dei restringimenti (angioplastica) e contemporaneo posizionamento di uno stent, si dovrà eseguire un intervento di Bypass aortocoronarico.

Questo intervento condotto in anestesia generale, in sternotomia e con l'utilizzo della circolazione extracorporea, prevede la creazione di vie alternative (by-pass) per portare il sangue nelle coronarie a valle dei restringimenti. In questi casi vengono utilizzate quali vie alternative le arterie mammarie interne (vasi che si trovano all'interno del torace), le arterie radiali (prelevate dagli arti superiori) e le vene safene (prelevate dalle gambe) a seconda dei casi.

L'intervento, eseguito in anestesia generale, dura circa 4 ore. A fine intervento si viene trasferiti in terapia intensiva dove si resta per 1 o 2 giorni per monitorizzazione. Si viene quindi trasferiti in reparto di cardiochirurgia dove si resterà sotto osservazione medica per 5-6 giorni in caso di decorso postoperatorio regolare. Si verrà quindi dimessi per una struttura di riabilitazione di Vostra scelta, dove resterete ricoverati per circa 14 giorni.`,
  },
]


function SpecCardImg({ foto, fotoLabel, nome }) {
  const [idx, setIdx] = React.useState(0)
  const isArray = Array.isArray(foto)
  const src = isArray ? foto[idx] : foto
  const label = isArray && fotoLabel ? fotoLabel[idx] : null
  const total = isArray ? foto.length : 1

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % total) }

  return (
    <div className="spec-card__img">
      <img src={src} alt={nome} />
      {isArray && (
        <>
          <button className="spec-card__img-arrow left" onClick={prev}>‹</button>
          <button className="spec-card__img-arrow right" onClick={next}>›</button>
          <div className="spec-card__img-nav">
            {foto.map((_, i) => (
              <button
                key={i}
                className={`spec-card__img-dot ${i === idx ? 'active' : ''}`}
                onClick={e => { e.stopPropagation(); setIdx(i) }}
              />
            ))}
          </div>
        </>
      )}
      {label && <div className="spec-card__img-label">{label}</div>}
    </div>
  )
}

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
            {s.foto && (
              <SpecCardImg foto={s.foto} fotoLabel={s.fotoLabel} nome={s.nome} />
            )}
            <div className="spec-card__body">
              <div className="spec-icon">{s.icon}</div>
              <div className="spec-name">{s.nome}</div>
              <div className="spec-desc">{s.desc}</div>
              <span className="spec-more">Scopri di più →</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="modal-overlay"
          onClick={e => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="modal spec-modal">
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <div className="modal-label">{selected.label}</div>
            <h3 className="modal-title">{selected.nome}</h3>
            <div className="modal-divider" />
            <div className="modal-body spec-modal-body">
              {selected.testo.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}