import './Hero.css'

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
    >
      <div className="hero-content">

        <h1>
          Aroa Martín de la Rubia 🌸
        </h1>

        <p>
          Desarrolladora Frontend especializada
          en accesibilidad web, experiencia de
          usuario y creación de interfaces
          modernas y escalables.
        </p>

        <div className="hero-actions">

          <a
            href="#proyectos"
            className="primary-button"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="secondary-button"
          >
            Contactar
          </a>

        </div>

      </div>

      <img
        src="/images/profile.jpg"
        alt="Fotografía profesional de Aroa Martín"
        loading="lazy"
      />

    </section>
  )
}

export default Hero