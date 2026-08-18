import { useEffect, useRef } from "react";
import "./Schedule.css";

const ITEMS = [
  { time: "POR HORA", title: "Natación piscina UCM", place: "Piscina Temperada UCM" },
  { time: "19 AGO 09:30", title: "Teno Te Incluye", place: "Polideportivo Teno" },
  { time: "SEGÚN CONVOCATORIA", title: "Eventos con instituciones", place: "Talca y la región" },
  { time: "CONVENIOS ANUALES", title: "Alianzas con empresas", place: "A medida de cada empresa" },
  { time: "A DOMICILIO", title: "Programas personalizados", place: "Talca y alrededores" },
];

function Group({ innerRef, hidden }) {
  return (
    <div className="ticker__group" ref={innerRef} aria-hidden={hidden || undefined}>
      {ITEMS.map((it, i) => (
        <div className="ticker__item" key={i}>
          <span className="ticker__time">{it.time}</span>
          <span className="ticker__title">{it.title}</span>
          <span className="ticker__place">{it.place}</span>
        </div>
      ))}
    </div>
  );
}

export default function Schedule() {
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
    const speed = 0.4; // px per frame, ~24px/s

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
    <section className="ticker" aria-label="Próximos talleres">
      <div className="ticker__label">
        <span className="ticker__dot" />
        Próximos talleres
      </div>
      <div className="ticker__track" ref={trackRef}>
        <Group innerRef={groupRef} />
        <Group hidden />
      </div>
    </section>
  );
}
