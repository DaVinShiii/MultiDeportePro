import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Schedule from "./components/Schedule.jsx";
import Talleres from "./components/Talleres.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Galeria from "./components/Galeria.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Talleres />
        <Nosotros />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
