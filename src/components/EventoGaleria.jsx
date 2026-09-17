import { useEffect, useRef } from "react";
import "./EventoGaleria.css";

const base = import.meta.env.BASE_URL;
const TOTAL_FOTOS = 25;

const FOTOS = Array.from({ length: TOTAL_FOTOS }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `${base}gallery/evento-2025/foto-${n}.jpg`;
});

function Group({ innerRef, hidden }) {
  return (
    <div className="evento-galeria__group" ref={innerRef} aria-hidden={hidden || undefined}>
      {FOTOS.map((src, i) => (
        <figure className="evento-foto" key={src}>
          <img
            src={src}
            alt={hidden ? "" : `Jornada de deporte adaptado en Teno, foto ${i + 1}`}
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}

export default function EventoGaleria() {
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!pausedRef.current) {
        const groupWidth = group.getBoundingClientRect().width;
        track.scrollLeft += speed;
        if (track.scrollLeft >= groupWidth) {
          track.scrollLeft -= groupWidth;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    track.addEventListener("pointerdown", pause);
    track.addEventListener("pointerup", resume);
    track.addEventListener("pointerleave", resume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("pointerup", resume);
      track.removeEventListener("pointerleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

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

      <div className="evento-galeria__strip" ref={trackRef}>
        <Group innerRef={groupRef} />
        <Group hidden />
      </div>
    </section>
  );
}
