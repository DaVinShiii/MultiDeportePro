import "./Talleres.css";

const TALLERES = [
  {
    tag: "Piscina UCM",
    color: "blue",
    title: "Natación por hora",
    desc: "Bloques horarios en la piscina temperada de la UCM, para grupos e individuales, con agenda flexible según disponibilidad.",
    schedule: "Reserva por hora",
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
    tag: "Institucional",
    color: "red",
    title: "Eventos deportivos con instituciones",
    desc: "Diseño y ejecución de eventos, torneos y jornadas junto a instituciones públicas y privadas: municipios, corporaciones de deporte, colegios y clubes.",
    schedule: "Según convocatoria",
    place: "Talca y la región",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <path d="M10 6v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 8h24l-6 8 6 8H10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "Consultoría",
    color: "green",
    title: "Asesorías en gestión de proyectos deportivos",
    desc: "Acompañamos a municipios, clubes y corporaciones en la planificación, postulación y ejecución de proyectos deportivos.",
    schedule: "Bajo consulta",
    place: "Presencial y remoto",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <rect x="10" y="8" width="28" height="34" rx="3" stroke="currentColor" strokeWidth="3" />
        <path d="M18 6h12v6H18z" fill="currentColor" />
        <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "Alianzas",
    color: "blue",
    title: "Convenios con empresas",
    desc: "Programas deportivos para colaboradores y comunidad, con convenios anuales adaptados a cada empresa.",
    schedule: "Convenios anuales",
    place: "A medida de cada empresa",
    icon: (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <path d="M6 24l10-10 8 4 8-4 10 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 24l6 6 6-6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
