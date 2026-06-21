import './Navbar.css'

function Navbar() {
  return (
    <nav aria-label="Navegación principal">
      <ul className="nav-list">

        <li><a className="nav-link" href="#inicio">Inicio</a></li>
        <li><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
        <li><a className="nav-link" href="#proyectos">Proyectos</a></li>
        <li><a className="nav-link" href="#habilidades">Habilidades</a></li>
        <li><a className="nav-link" href="#experiencia">Formación</a></li>
        <li><a className="nav-link" href="#contacto">Contacto</a></li>

      </ul>
    </nav>
  )
}

export default Navbar