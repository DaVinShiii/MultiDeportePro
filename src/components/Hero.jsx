import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__lanes" aria-hidden="true">
        <span className="lane lane--red" />
        <span className="lane lane--blue" />
        <span className="lane lane--green" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Talca · Deporte inclusivo</p>
          <h1 className="hero__title">
            Muévete <span>sin límites</span>
          </h1>
          <p className="hero__lead">
            Natación por hora en la piscina temperada UCM, eventos deportivos con instituciones
            públicas y privadas, asesorías en gestión de proyectos deportivos y convenios con
            empresas. Deporte para todos, con entrenadores que inspiran.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#talleres">
              Ver talleres
            </a>
            <a
              className="btn btn-ghost hero__whatsapp"
              href="https://wa.me/56953423772"
              target="_blank"
              rel="noreferrer"
            >
              Escríbenos por WhatsApp
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>Disciplinas</dt>
              <dd>4+</dd>
            </div>
            <div>
              <dt>Modalidad</dt>
              <dd>A domicilio</dd>
            </div>
            <div>
              <dt>Horarios</dt>
              <dd>Flexibles</dd>
            </div>
          </dl>
        </div>

        <div className="hero__emblem" aria-hidden="true">
          <svg viewBox="0 0 320 320" width="100%" height="100%">
            <circle cx="160" cy="160" r="154" fill="none" stroke="var(--red)" strokeWidth="3" strokeDasharray="2 10" />
            <circle cx="160" cy="160" r="120" fill="var(--navy-2)" />
            <path
              d="M96 128h128v40a64 64 0 0 1-128 0v-40z"
              fill="var(--bone)"
            />
            <path d="M96 132H60a36 36 0 0 0 36 36" fill="none" stroke="var(--bone)" strokeWidth="8" />
            <path d="M224 132h36a36 36 0 0 1-36 36" fill="none" stroke="var(--bone)" strokeWidth="8" />
            <rect x="146" y="228" width="28" height="34" fill="var(--bone)" />
            <rect x="116" y="262" width="88" height="18" rx="4" fill="var(--red)" />
            <text
              x="160"
              y="80"
              textAnchor="middle"
              fontFamily="Anton, sans-serif"
              fontSize="34"
              fill="var(--bone)"
              letterSpacing="2"
            >
              PRO
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
