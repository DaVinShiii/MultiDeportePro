import "./EventoGaleria.css";

const base = import.meta.env.BASE_URL;
const TOTAL_FOTOS = 25;

const FOTOS = Array.from({ length: TOTAL_FOTOS }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `${base}gallery/evento-2025/foto-${n}.jpg`;
});

export default function EventoGaleria() {
  return (
    <section className="evento-galeria">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Jornada de inclusión</p>
            <h2>Deporte adaptado en Teno</h2>
          </div>
          <p className="evento-galeria__note">
            Goalball, reconocimientos y comunidad en nuestra última jornada junto a la
            Corporación de Deportes de Teno.
          </p>
        </div>
      </div>

      <div className="evento-galeria__strip">
        {FOTOS.map((src, i) => (
          <figure className="evento-foto" key={src}>
            <img src={src} alt={`Jornada de deporte adaptado en Teno, foto ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
