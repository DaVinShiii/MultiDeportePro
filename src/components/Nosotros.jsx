import "./Nosotros.css";

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="container nosotros__grid">
        <div className="nosotros__quote-block">
          <p className="eyebrow nosotros__eyebrow">Nuestra misión</p>
          <blockquote className="nosotros__quote">
            Deporte para todos. Productos de calidad. Programas que inspiran.
            <span>¡Muévete sin límites!</span>
          </blockquote>
        </div>

        <div className="nosotros__body">
          <p>
            MultiDeporte Pro nace en Talca con una convicción simple: el deporte no debería
            tener barreras. Diseñamos talleres y programas para niños, adultos mayores y
            personas con discapacidad, con entrenadores certificados y material adaptado a
            cada necesidad.
          </p>
          <p>
            Trabajamos junto a municipios y recintos deportivos para llevar actividades como el
            deporte paralímpico, la natación infantil y el acompañamiento a domicilio a cada
            rincón de la región.
          </p>

          <div className="nosotros__lead">
            <div className="nosotros__avatar" aria-hidden="true">JM</div>
            <div>
              <p className="nosotros__name">Jhonatan Mendoza</p>
              <p className="nosotros__role">Gerente General, MultiDeporte Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
