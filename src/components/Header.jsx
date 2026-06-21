import React from 'react'

function Header() {
  return (
    <header className="site-header">
      
      <div className="header-container">

        {/* Logo / identidad */}
        <a href="#inicio" className="logo">
          Aroa Martín 🌸
        </a>

        {/* Navegación principal */}
        <nav aria-label="Navegación principal">
          <ul className="nav-list">

            <li>
              <a href="#inicio">
                Inicio
              </a>
            </li>

            <li>
              <a href="#sobre-mi">
                Sobre mí
              </a>
            </li>

            <li>
              <a href="#proyectos">
                Proyectos
              </a>
            </li>

            <li>
              <a href="#habilidades">
                Habilidades
              </a>
            </li>

            <li>
              <a href="#contacto">
                Contacto
              </a>
            </li>

          </ul>
        </nav>

      </div>

    </header>
  )
}

export default Header