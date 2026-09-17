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
            tener barreras. Bajo los principios de deporte para todos y todas, promovemos el
            deporte adaptado e inclusivo a través de programas diseñados a la medida de cada
            necesidad.
          </p>
          <p>
            Trabajamos junto a municipios, instituciones y recintos deportivos para llevar la
            actividad física a cada rincón de la región mediante una oferta integral que
            incluye:
          </p>
          <ul className="nosotros__list">
            <li>
              <strong>Deporte adaptado e inclusivo:</strong> talleres de disciplinas
              paralímpicas y recreativas con entrenadores certificados y material
              especializado.
            </li>
            <li>
              <strong>Jornadas y eventos deportivos:</strong> organización y ejecución de
              encuentros masivos, ferias y festivales activos para toda la comunidad.
            </li>
            <li>
              <strong>Deporte y actividad física para adultos mayores:</strong> programas de
              acondicionamiento físico orientados a mejorar la autonomía, la salud y la
              calidad de vida en la tercera edad.
            </li>
            <li>
              <strong>Natación infantil y formativa:</strong> espacios seguros y estimulantes
              para el desarrollo acuático temprano.
            </li>
            <li>
              <strong>Acompañamiento a domicilio:</strong> planes de entrenamiento
              personalizados llevados directamente al hogar de quienes lo requieran.
            </li>
          </ul>

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
