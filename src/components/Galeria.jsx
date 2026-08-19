import "./Galeria.css";

const base = import.meta.env.BASE_URL;

const MOMENTOS = [
  { title: "Teno Te Incluye — deporte adaptado", tag: "19 agosto", img: `${base}gallery/teno-te-incluye.jpg` },
  { title: "Paratenismo de mesa", tag: "Deporte adaptado", img: `${base}gallery/paratenismo-mesa.jpg` },
  { title: "Natación en la piscina UCM", tag: "Piscina UCM", img: `${base}gallery/piscina-ucm-ninos.jpg` },
  { title: "Clases de natación infantil", tag: "Piscina UCM", img: `${base}gallery/piscina-ucm-clase.jpg` },
  { title: "Tenis de mesa, Infinity Talca", tag: "Semanal", img: `${base}gallery/tenis-mesa-infinity.jpg` },
  { title: "Entrenamiento de tenis de mesa", tag: "MultiDeporte Pro", img: `${base}gallery/tenis-mesa-entrenamiento.jpg` },
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
            <figure className="momento" key={m.title}>
              <img className="momento__img" src={m.img} alt={m.title} loading="lazy" />
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
