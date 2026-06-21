import Hero from '../Hero/Hero'
import './MainContent.css'

function MainContent() {
  return (
    <main id="main-content" tabIndex="-1">

      <Hero />

      <section id="sobre-mi">

        <h2>
          Sobre mí
        </h2>

        <p>
          Profesional orientado a construir
          interfaces accesibles, escalables y
          mantenibles siguiendo estándares
          modernos de desarrollo web.
        </p>

      </section>


      <section id="proyectos">

        <h2>
          Proyectos destacados
        </h2>

        <article>

          <h3>
            Portfolio Web Profesional
          </h3>

          <p>
            Sitio web desarrollado con HTML y CSS
            orientado a presentar información personal
            y práctica de diseño responsive.
          </p>

          <img
            src="/images/project.png"
            alt="Captura de portfolio web responsive"
            loading="lazy"
          />

        </article>


        <article>

          <h3>
            Proyecto en Java
          </h3>

          <p>
            Aplicación orientada al cálculo
            automático del importe total.
          </p>

          <img
            src="/images/project2.png"
            alt="Aplicación de cálculo automático"
            loading="lazy"
          />

        </article>


        <article>

          <h3>
            Landing Page con Asistente Virtual
          </h3>

          <p>
            Landing page con experiencia
            conversacional integrada.
          </p>

          <img
            src="/images/project3.png"
            alt="Landing con asistente virtual"
            loading="lazy"
          />

        </article>

      </section>


      <section id="habilidades">

        <h2>
          Habilidades
        </h2>

        <article>

          <h3>
            Frontend
          </h3>

          <ul>

            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>

          </ul>

        </article>

      </section>


      <section id="experiencia">

        <h2>
          Formación y experiencia
        </h2>

      </section>


      <section id="contacto">

        <h2>
          Contacto
        </h2>

        <form>

          <div>

            <label htmlFor="nombre">
              Nombre
            </label>

            <input
              id="nombre"
              type="text"
              required
            />

          </div>


          <div>

            <label htmlFor="email">
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              required
            />

          </div>


          <div>

            <label htmlFor="mensaje">
              Mensaje
            </label>

            <textarea
              id="mensaje"
              rows="5"
              required
            />

          </div>


          <button type="submit">

            Enviar mensaje

          </button>

        </form>

      </section>

    </main>
  )
}

export default MainContent