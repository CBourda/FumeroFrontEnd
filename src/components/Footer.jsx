import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">Dott. Andrea Fumero</div>
      <div className="footer__center">
        <span>Cardiochirurgo · Humanitas Research Hospital</span>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} — P.IVA da inserire —{' '}
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  )
}
