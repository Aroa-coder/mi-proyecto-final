import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav
        className={styles.footerNav}
        aria-label="Redes profesionales"
      >
        <a
          href="https://github.com/aroa-coder"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aroa-mart%C3%ADn-de-la-rubia-a1025b280"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          LinkedIn
        </a>
      </nav>

      <p className={styles.footerText}>
        © 2026 Aroa Martín de la Rubia. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;