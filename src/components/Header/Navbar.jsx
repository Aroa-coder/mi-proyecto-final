import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Navegación principal">
      <ul className={styles.navList}>
        <li>
          <a href="#inicio" className={styles.navLink}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#sobre-mi" className={styles.navLink}>
            Sobre mí
          </a>
        </li>

        <li>
          <a href="#proyectos" className={styles.navLink}>
            Proyectos
          </a>
        </li>

        <li>
          <a href="#habilidades" className={styles.navLink}>
            Habilidades
          </a>
        </li>

        <li>
          <a href="#experiencia" className={styles.navLink}>
            Formación
          </a>
        </li>

        <li>
          <a href="#contacto" className={styles.navLink}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;