import { useState } from 'react'
import './Ricovero.css'

const sezioni = [
  {
    id: 'visita',
    titolo: 'Visita ambulatoriale',
    icon: '◎',
    intro: 'Prima visita, second opinion o visita di controllo presso una delle strutture convenzionate.',
    testo: `Può prenotare una prima visita preoperatoria, second opinion o visita di controllo presso una delle strutture dove il dott. Fumero svolge attività ambulatoriale (Centro Medico Visconti di Modrone - Milano, Humanitas - Rozzano, Centro Medico Genneruxi - Cagliari, Poliambulatorio EMMEBI - Vigevano).

Una volta prenotata la visita, il dott. Fumero La riceverà presso l'ambulatorio di Sua scelta. Durante la visita il dott. Fumero prenderà visione della documentazione inerente la Sua situazione clinica, valutando eventuali esami diagnostici già eseguiti ed effettuerà una visita medica specialistica completa. Le spiegherà quindi le Sue problematiche e La informerà di tutte le opzioni terapeutiche (mediche, chirurgiche, mininvasive e transcatetere) alle quali potrà essere sottoposto.

Il dott. Fumero La informerà anche sulle possibili complicanze, rischi e benefici attesi dei vari trattamenti e si confronterà con Lei sulle diverse possibilità terapeutiche. In questa sede Le verrà quindi proposto il miglior trattamento possibile con il minor rischio possibile per trattare la Sua patologia e restituirLe il pieno benessere.

Il dott. Fumero La informerà sulle diverse possibilità di ricovero, tempi di attesa e tempi di recupero correlate al trattamento prescelto per la sua guarigione.

Una volta confermata da parte Sua la volontà al ricovero ed al trattamento proposto, il dott. Fumero provvederà personalmente al Suo inserimento in lista di attesa per il ricovero presso Humanitas Rozzano.`,
  },
  {
    id: 'ssn',
    titolo: 'Ricovero SSN',
    icon: '⊕',
    intro: 'Ricovero in regime di Servizio Sanitario Nazionale presso Humanitas Rozzano.',
    testo: `Una volta confermata l'indicazione chirurgica Lei sarà messo/a in nota per intervento. La segreteria Le comunicherà la data di ricovero con una decina di giorni d'anticipo. Le segretarie La informeranno via telefono e/o email sulla tipologia di impegnativa mutualistica che dovrà farsi emettere dal Suo/a medico di base.

Le segretarie La informeranno anche dell'eventuale necessità di sospensione o sostituzione di farmaci in previsione del ricovero.

Il ricovero avverrà uno o due giorni prima dell'intervento a seconda delle necessità cliniche, in stanza doppia con bagno. L'orario visite in reparto si svolge dalle 12 alle 13 e dalle 17 alle 19.

Il mattino del giorno del ricovero (o eventualmente qualche giorno prima del ricovero per i residenti in Lombardia) verranno eseguiti gli esami diagnostici di completamento in previsione dell'intervento (es. Rx torace, esami ematochimici, ECG, Ecocardiogramma, TAC torace cmdc o smdc, ecc.). La coronarografia verrà eseguita per tutti i pazienti il giorno prima dell'intervento.

Una volta terminati tutti gli accertamenti il dott. Fumero La informerà sul risultato degli stessi e Le confermerà l'indicazione chirurgica. Il dott. Fumero Le spiegherà quindi in cosa consiste l'intervento a cui dovrà sottoporsi, quali sono i rischi e i benefici attesi.

Il giorno dell'intervento sarà accompagnato/a in sala operatoria dal personale del reparto alle 7.30 se operato al mattino, oppure verso le 13 se sarà operato il pomeriggio.

Finito l'intervento Lei verrà trasferito in Terapia Intensiva Cardiochirurgica per monitorizzazione. Il dott. Fumero darà quindi notizie ai Suoi parenti sull'esito dell'intervento. La sua permanenza in Terapia Intensiva sarà di 1 o 2 giorni a seconda delle necessità.

Verrà quindi trasferito/a in reparto di Cardiochirurgia dove resterà circa 6 giorni prima di essere trasferito/a in riabilitazione cardiologica. Il suo periodo complessivo di degenza tra pre-operatorio, post-operatorio e riabilitazione sarà di circa 20 giorni.

In caso di procedura transcatetere (TAVI, Mitraclip, Tendyne, Evoque) la degenza sarà più breve: circa 4 giorni in reparto con dimissione diretta a domicilio senza necessità di riabilitazione cardiologica.

Il dott. Fumero La rivedrà per una prima visita di controllo postoperatoria a 3 mesi dall'intervento nel medesimo ambulatorio dove Lei avrà eseguito la prima visita preoperatoria.`,
  },
  {
    id: 'solvenza',
    titolo: 'Ricovero in Solvenza',
    icon: '✦',
    intro: 'Ricovero in regime privato o assicurativo con servizi dedicati e tempi concordati.',
    testo: `Una volta confermata l'indicazione chirurgica Lei sarà messo/a in nota per intervento. Le segretarie La contatteranno per avere i dati della Sua assicurazione, contatteranno la Sua compagnia assicuratrice, verificheranno le Sue coperture e Le invieranno un preventivo.

Se Lei accetterà il preventivo verrà concordata con Lei la data del ricovero. Le segretarie La informeranno anche dell'eventuale necessità di sospensione o sostituzione di farmaci in previsione del ricovero.

Il ricovero avverrà uno o due giorni prima dell'intervento a seconda delle necessità cliniche, in stanza doppia con bagno. Avrà la possibilità di fare restare in stanza con Lei h24 e 7/7 giorni un Suo parente durante tutto il periodo del ricovero. Sono inclusi in questa tipologia di ricovero anche altri benefit di accoglienza, ospitalità e cucina.

Il mattino del giorno del ricovero (o eventualmente qualche giorno prima del ricovero per i residenti in Lombardia) verranno eseguiti gli esami diagnostici di completamento in previsione dell'intervento (es. Rx torace, esami ematochimici, ECG, Ecocardiogramma, TAC torace cmdc o smdc, ecc.). La coronarografia verrà eseguita per tutti i pazienti il giorno prima dell'intervento.

Una volta terminati tutti gli accertamenti il dott. Fumero La informerà sul risultato degli stessi e Le confermerà l'indicazione chirurgica. Il dott. Fumero Le spiegherà quindi in cosa consiste l'intervento a cui dovrà sottoporsi, quali sono i rischi e i benefici attesi.

Il giorno dell'intervento sarà accompagnato/a in sala operatoria dal personale del reparto alle 7.30.

Finito l'intervento Lei verrà trasferito in Terapia Intensiva Cardiochirurgica per monitorizzazione. Il dott. Fumero darà quindi notizie ai Suoi parenti sull'esito dell'intervento. La sua permanenza in Terapia Intensiva sarà di 1 o 2 giorni a seconda delle necessità.

Verrà quindi trasferito/a in reparto di Cardiochirurgia dove resterà circa 6 giorni prima di essere trasferito/a in riabilitazione cardiologica. Il suo periodo complessivo di degenza tra pre-operatorio, post-operatorio e riabilitazione sarà di circa 20 giorni.

In caso di procedura transcatetere (TAVI, Mitraclip, Tendyne, Evoque) la degenza sarà più breve: circa 4 giorni in reparto con dimissione diretta a domicilio senza necessità di riabilitazione cardiologica.

Il dott. Fumero La rivedrà per una prima visita di controllo postoperatoria a 3 mesi dall'intervento nel medesimo ambulatorio dove Lei avrà eseguito la prima visita preoperatoria.`,
  },
]

export default function Ricovero() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="ricovero" className="ricovero section-wrapper">
      <p className="section-label">Informazioni pratiche</p>
      <h2 className="section-title">Ricovero e visite</h2>
      <div className="section-divider" />

      <div className="ricovero__grid">
        {sezioni.map(s => (
          <div
            key={s.id}
            className="ricovero__card"
            onClick={() => setSelected(s)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setSelected(s)}
          >
            <div className="ricovero__card-icon">{s.icon}</div>
            <div className="ricovero__card-title">{s.titolo}</div>
            <div className="ricovero__card-intro">{s.intro}</div>
            <span className="ricovero__card-more">Leggi di più →</span>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="modal-overlay"
          onClick={e => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="modal ricovero__modal">
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <div className="modal-label">Informazioni pratiche</div>
            <h3 className="modal-title">{selected.titolo}</h3>
            <div className="modal-divider" />
            <div className="modal-body ricovero__modal-body">
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