import "./Hero.css";

const base = import.meta.env.BASE_URL;

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

        <div className="hero__visual">
          <figure className="hero__photo hero__photo--main">
            <img
              src={`${base}gallery/tenis-mesa-entrenamiento.jpg`}
              alt="Entrenamiento de tenis de mesa MultiDeporte Pro"
            />
          </figure>
          <figure className="hero__photo hero__photo--accent">
            <img
              src={`${base}gallery/teno-te-incluye.jpg`}
              alt="Jornada Teno Te Incluye, deporte adaptado"
            />
          </figure>
          <span className="hero__badge">PRO</span>
        </div>
      </div>
    </section>
  );
}
