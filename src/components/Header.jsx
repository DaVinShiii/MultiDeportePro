import { useEffect, useState } from "react";
import "./Header.css";

const base = import.meta.env.BASE_URL;

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
            <img src={`${base}brand/logo.png`} alt="MultiDeporte Pro" width="40" height="40" />
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
