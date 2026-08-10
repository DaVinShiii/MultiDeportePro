import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <span className="site-footer__brand">
          MultiDeporte<strong>Pro</strong>
        </span>
        <p className="site-footer__tag">Deporte para todos. Muévete sin límites.</p>
        <p className="site-footer__copy">© {new Date().getFullYear()} MultiDeporte Pro · Talca, Chile</p>
      </div>
    </footer>
  );
}
