import "./Video.css";

const base = import.meta.env.BASE_URL;

const VIDEOS = [
  {
    src: `${base}video/multideporte-pro-territorial.mp4`,
    poster: `${base}gallery/tenis-mesa-entrenamiento.jpg`,
    label: "Recorrido territorial de MultiDeporte Pro",
  },
  {
    src: `${base}video/multideporte-pro-jornada.mp4#t=0.1`,
    label: "Jornada deportiva de MultiDeporte Pro",
  },
];

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

        <div className="video-section__grid">
          {VIDEOS.map((v) => (
            <video
              key={v.src}
              className="video-section__player"
              controls
              preload={v.poster ? "none" : "metadata"}
              poster={v.poster}
              aria-label={v.label}
            >
              <source src={v.src} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>
    </section>
  );
}
