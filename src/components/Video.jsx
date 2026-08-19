import "./Video.css";

const base = import.meta.env.BASE_URL;

export default function Video() {
  return (
    <section className="video-section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Territorial</p>
            <h2>Míranos en acción</h2>
          </div>
          <p className="video-section__note">
            Un recorrido por nuestros talleres y equipos en la región del Maule.
          </p>
        </div>

        <video
          className="video-section__player"
          controls
          preload="none"
          poster={`${base}gallery/tenis-mesa-entrenamiento.jpg`}
        >
          <source src={`${base}video/multideporte-pro-territorial.mp4`} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
