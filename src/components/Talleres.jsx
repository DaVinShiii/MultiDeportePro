import "./Talleres.css";

const TALLERES = [
  {
    tag: "Adaptado",
    color: "red",
    title: "Tenis de mesa adaptado",
    desc: "Clases dirigidas por entrenadores especializados en deporte paralímpico, con material adaptado a cada capacidad.",
    schedule: "Lunes y miércoles · 18:30 – 19:30 hrs",
    place: "Infinity Talca, Mall Plaza",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <rect x="4" y="24" width="40" height="6" rx="2" fill="currentColor" />
        <circle cx="34" cy="14" r="6" fill="currentColor" />
        <path d="M12 40l8-10M36 40l-6-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "Infantil",
    color: "blue",
    title: "Natación para niños y niñas",
    desc: "Talleres grupales en piscina temperada que trabajan seguridad acuática, técnica y confianza en el agua.",
    schedule: "Sábados · 12:00 – 13:00 hrs",
    place: "Piscina Temperada UCM",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <path d="M6 34c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="14" r="4" fill="currentColor" />
        <path d="M10 24l10-4 6 3 8-3" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "A domicilio",
    color: "green",
    title: "Programas personalizados",
    desc: "Sesiones a la medida para personas con discapacidad y adultos mayores, con horarios flexibles y atención en tu hogar.",
    schedule: "Horarios flexibles",
    place: "Talca y alrededores",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <path d="M8 22 24 8l16 14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20v18h24V20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
        <rect x="20" y="28" width="8" height="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "Comunidad",
    color: "red",
    title: "Talleres deportivos abiertos",
    desc: "Fútbol, baloncesto y otras disciplinas para descubrir tu pasión y mejorar tu condición física con los mejores entrenadores.",
    schedule: "Inscripciones abiertas",
    place: "Talca",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M24 8v8l7 5-3 9-8-3-8 3-3-9 7-5V8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Talleres() {
  return (
    <section id="talleres" className="talleres">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Programas</p>
            <h2>Talleres y disciplinas</h2>
          </div>
          <p className="talleres__note">
            Cupos limitados por taller. Escríbenos para conocer valores e inscribirte.
          </p>
        </div>

        <div className="talleres__grid">
          {TALLERES.map((t) => (
            <article className={`taller-card taller-card--${t.color}`} key={t.title}>
              <span className="taller-card__icon">{t.icon}</span>
              <p className="taller-card__tag">{t.tag}</p>
              <h3>{t.title}</h3>
              <p className="taller-card__desc">{t.desc}</p>
              <dl className="taller-card__meta">
                <div>
                  <dt>Horario</dt>
                  <dd>{t.schedule}</dd>
                </div>
                <div>
                  <dt>Lugar</dt>
                  <dd>{t.place}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
