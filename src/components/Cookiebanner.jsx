import { useState } from 'react'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie-consent'))

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const close = () => {
    localStorage.setItem('cookie-consent', 'closed')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p>
          Questo sito utilizza cookie tecnici necessari al funzionamento.
          Per maggiori informazioni consulta la nostra{' '}
          <a href="/privacy" className="cookie-banner__link">Privacy Policy</a>.
        </p>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__close" onClick={close}>✕</button>
          <button className="cookie-banner__accept" onClick={accept}>Accetto</button>
        </div>
      </div>
    </div>
  )
}