import { useEffect, useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#talleres", label: "Talleres" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__row">
        <a href="#inicio" className="brand">
          <span className="brand__mark">
            <svg viewBox="0 0 40 40" width="34" height="34" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="var(--red)" />
              <path d="M11 12h18v7a9 9 0 0 1-18 0v-7z" fill="#fff" />
              <path d="M11 13.5H7a4.5 4.5 0 0 0 4.5 7" fill="none" stroke="#fff" strokeWidth="2" />
              <path d="M29 13.5h4a4.5 4.5 0 0 1-4.5 7" fill="none" stroke="#fff" strokeWidth="2" />
              <rect x="18" y="27" width="4" height="5" fill="#fff" />
            </svg>
          </span>
          <span className="brand__word">
            MultiDeporte<strong>Pro</strong>
          </span>
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary main-nav__cta"
            href="https://wa.me/56953423772"
            target="_blank"
            rel="noreferrer"
          >
            Inscríbete
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
