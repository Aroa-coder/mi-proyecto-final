import Hero from '../Hero/Hero'
import ProjectCard from '../ProjectCard/ProjectCard'
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

        <ProjectCard
          title="Portfolio Web Profesional"
          description="Sitio web desarrollado con HTML y CSS orientado a diseño responsive."
          image="/images/project.png"
          alt="Captura del portfolio web"
        />


        <ProjectCard
          title="Proyecto en Java"
          description="Aplicación orientada al cálculo automático del importe total."
          image="/images/project2.png"
          alt="Aplicación de cálculo"
        />


        <ProjectCard
          title="Landing con Asistente Virtual"
          description="Landing orientada a mejorar experiencia del usuario."
          image="/images/project3.png"
          alt="Landing con asistente"
        />

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


        <article>

          <h3>
            Diseño
          </h3>

          <ul>

            <li>UX/UI</li>

            <li>Responsive Design</li>

            <li>Accesibilidad Web</li>

          </ul>

        </article>


        <article>

          <h3>
            Herramientas
          </h3>

          <ul>

            <li>Git</li>

            <li>VS Code</li>

          </ul>

        </article>

      </section>


      <section id="experiencia">

        <h2>
          Formación y experiencia
        </h2>


        <article>

          <h3>
            Desarrollo de Aplicaciones Web (DAW)
          </h3>

          <p>
            Formación orientada al desarrollo
            de aplicaciones web, programación,
            bases de datos y construcción
            de interfaces accesibles.
          </p>

        </article>


        <article>

          <h3>
            Desarrollo Frontend
          </h3>

          <p>
            Aprendizaje práctico aplicando
            HTML, CSS, JavaScript y React
            siguiendo buenas prácticas de
            accesibilidad web.
          </p>

        </article>


        <article>

          <h3>
            Proyectos personales
          </h3>

          <p>
            Desarrollo progresivo de proyectos
            orientados a experiencia de usuario,
            organización del código y
            construcción de interfaces modernas.
          </p>

        </article>

      </section>


      <section id="contacto">

  <h2>
    Contacto
  </h2>

  <p>
    Si deseas colaborar conmigo o conocer más
    sobre mis proyectos, envíame un mensaje.
  </p>


  <form noValidate>

    <div>

      <label htmlFor="nombre">

        Nombre

      </label>

      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Tu nombre"
        autoComplete="name"
        required
        aria-describedby="nombre-help"
      />

      <small id="nombre-help">

        Introduce tu nombre completo.

      </small>

    </div>



    <div>

      <label htmlFor="email">

        Correo electrónico

      </label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="correo@ejemplo.com"
        autoComplete="email"
        required
        aria-describedby="email-help"
      />

      <small id="email-help">

        Te responderé por este correo.

      </small>

    </div>



    <div>

      <label htmlFor="mensaje">

        Mensaje

      </label>

      <textarea
        id="mensaje"
        name="mensaje"
        rows="6"
        placeholder="Cuéntame sobre tu proyecto..."
        required
        aria-describedby="mensaje-help"
      />

      <small id="mensaje-help">

        Describe brevemente tu consulta.

      </small>

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