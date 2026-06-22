import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Aroa Martín de la Rubia 🌸</h1>

        <p>
          Desarrolladora Frontend especializada en accesibilidad web,
          experiencia de usuario y creación de interfaces modernas y escalables.
        </p>

        <div className={styles.heroActions}>
          <a href="#proyectos" className={styles.primaryButton}>
            Ver proyectos
          </a>

          <a href="#contacto" className={styles.secondaryButton}>
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