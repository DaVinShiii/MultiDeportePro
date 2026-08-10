import "./Schedule.css";

const ITEMS = [
  { time: "LUN · MIÉ 18:30", title: "Tenis de mesa adaptado", place: "Infinity Talca" },
  { time: "SÁB 12:00", title: "Natación niños y niñas", place: "Piscina Temperada UCM" },
  { time: "19 AGO 09:30", title: "Teno Te Incluye", place: "Polideportivo Teno" },
  { time: "A DOMICILIO", title: "Programas personalizados", place: "Talca y alrededores" },
];

export default function Schedule() {
  return (
    <section className="ticker" aria-label="Próximos talleres">
      <div className="ticker__label">
        <span className="ticker__dot" />
        Próximos talleres
      </div>
      <div className="ticker__track">
        {ITEMS.map((it, i) => (
          <div className="ticker__item" key={i}>
            <span className="ticker__time">{it.time}</span>
            <span className="ticker__title">{it.title}</span>
            <span className="ticker__place">{it.place}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
