import "./Galeria.css";

const MOMENTOS = [
  { title: "Medalla en paratenismo de mesa", tag: "Logro", variant: "a" },
  { title: "Selección chilena de rugby en silla de ruedas", tag: "Evento", variant: "b" },
  { title: "Teno Te Incluye — deporte adaptado", tag: "19 agosto", variant: "c" },
  { title: "Talleres de natación infantil", tag: "Piscina UCM", variant: "d" },
  { title: "Tenis de mesa, Infinity Talca", tag: "Semanal", variant: "e" },
  { title: "Entrenamiento funcional a domicilio", tag: "Personalizado", variant: "f" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Momentos</p>
            <h2>Galería</h2>
          </div>
          <a
            className="btn btn-ghost galeria__ig"
            href="https://www.instagram.com/multideportepro/"
            target="_blank"
            rel="noreferrer"
          >
            Ver más en Instagram
          </a>
        </div>

        <div className="galeria__grid">
          {MOMENTOS.map((m) => (
            <figure className={`momento momento--${m.variant}`} key={m.title}>
              <figcaption>
                <span className="momento__tag">{m.tag}</span>
                <span className="momento__title">{m.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
