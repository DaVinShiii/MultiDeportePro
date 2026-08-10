import "./Contacto.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="container contacto__grid">
        <div>
          <p className="eyebrow contacto__eyebrow">Hablemos</p>
          <h2 className="contacto__title">
            Escríbenos y arma <span>tu programa</span>
          </h2>
          <p className="contacto__lead">
            Cuéntanos qué taller te interesa o qué necesitas para tu programa personalizado.
            Respondemos por WhatsApp o Instagram.
          </p>

          <a
            className="btn btn-primary contacto__whatsapp"
            href="https://wa.me/56953423772"
            target="_blank"
            rel="noreferrer"
          >
            +56 9 5342 3772 · WhatsApp
          </a>
        </div>

        <ul className="contacto__list">
          <li>
            <span className="contacto__label">Ubicación</span>
            <span className="contacto__value">Talca, Región del Maule</span>
          </li>
          <li>
            <span className="contacto__label">Instagram</span>
            <a
              className="contacto__value contacto__link"
              href="https://www.instagram.com/multideportepro/"
              target="_blank"
              rel="noreferrer"
            >
              @multideportepro
            </a>
          </li>
          <li>
            <span className="contacto__label">Atención</span>
            <span className="contacto__value">Presencial y a domicilio</span>
          </li>
          <li>
            <span className="contacto__label">Horarios</span>
            <span className="contacto__value">Coordinación flexible según taller</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
