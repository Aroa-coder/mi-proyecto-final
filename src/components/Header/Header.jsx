import Navbar from './Navbar'
import './Header.module.css'

function Header() {
  return (
    <header className="site-header">

      <div className="header-container">

        {/* Logo / identidad */}
        <a href="#inicio" className="logo">
          Aroa Martín 🌸
        </a>

        {/* Navegación */}
        <Navbar />

      </div>

    </header>
  )
}

export default Header