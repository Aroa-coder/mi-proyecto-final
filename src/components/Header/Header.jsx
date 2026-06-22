import Navbar from "./Navbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo}>
        Aroa Martín <span>🌸</span>
      </a>

      <Navbar />
    </header>
  );
}

export default Header;