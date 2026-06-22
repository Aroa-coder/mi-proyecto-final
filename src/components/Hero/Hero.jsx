
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      id="inicio"
      className={styles.hero}
    >

      <div className={styles["hero-content"]}>

        <h1>
          Aroa Martín de la Rubia 🌸
        </h1>

        <p>
          Desarrolladora Frontend especializada
          en accesibilidad web, experiencia de
          usuario y creación de interfaces
          modernas y escalables.
        </p>

        <div className={styles["hero-actions"]}>

          <a
            href="#proyectos"
            className={styles["primary-button"]}
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className={styles["secondary-button"]}
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
  );
}

export default Hero;

