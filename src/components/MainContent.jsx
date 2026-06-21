function MainContent() {
  return (
  <main id="main-content" tabIndex="-1">

      <section id="inicio">
        <h1>
          Aroa Martín de la rubia 🌸
        </h1>

        <p>
          Desarrollador Frontend especializado en
          experiencias accesibles y diseño centrado
          en el usuario.
        </p>

<div className="hero-actions">

  <a
    href="#proyectos"
    className="primary-button"
  >
    Ver proyectos
  </a>


  <a
    href="#contacto"
    className="secondary-button"
  >
    Contactar
  </a>

</div>
<img
  src="/images/profile.jpg"
  alt="Fotografía profesional del desarrollador web"
  width="300"
  loading="lazy"
/>
      </section>

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
      y práctica de diseño responsive,
      organización visual y estructura semántica.
          </p>

          <img
            src="/images/project.png"
            alt="Captura de un portfolio web desarrollado con HTML y CSS mostrando diseño responsive"
          loading="lazy"
          />
        </article>

        <article>

    <h3>
      Proyecto en Java
    </h3>

    <p>
    Aplicación desarrollada con HTML, CSS y JavaScript
  orientada al cálculo automático del importe total
  aplicando el IVA mediante interacción con botones
  y actualización dinámica del resultado.
    </p>

    <img
      src="/images/project2.png"
      alt="Captura de una aplicación web para calcular el importe total con IVA mediante interacción del usuario"
      width="500"
      loading="lazy"
    />

  </article>

<article>

  <h3>
    Landing Page con Asistente Virtual
  </h3>

  <p>
Desarrollo de una landing page orientada
    a mejorar la experiencia del usuario mediante
    un asistente conversacional integrado,
    diseñado para resolver dudas y recomendar
    cursos certificados adaptados a las necesidades
    del visitante.

  </p>

  <img
    src="/images/project3.png"
    alt="Captura de una landing page con asistente virtual para recomendar cursos certificados"
    width="500"
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
      Formación orientada al desarrollo de
      aplicaciones web, programación,
      bases de datos y creación de
      interfaces accesibles.
    </p>

  </article>


  <article>

    <h3>
      Desarrollo Frontend
    </h3>

    <p>
      Aprendizaje práctico en HTML, CSS,
      JavaScript y React aplicando diseño
      responsive y buenas prácticas de
      accesibilidad web.
    </p>

  </article>


  <article>

    <h3>
      Proyectos personales
    </h3>

    <p>
      Desarrollo progresivo de proyectos
      orientados a mejorar experiencia de
      usuario, organización del código y
      construcción de portfolios web.
    </p>

  </article>

</section>
     
     
   <section id="contacto">

  <h2>
    Contacto
  </h2>

  <p>
    Si deseas contactar conmigo para colaborar
    o conocer más sobre mis proyectos,
    puedes enviarme un mensaje.
  </p>


  <form>

    <div>

      <label htmlFor="nombre">
        Nombre
      </label>

      <input
        type="text"
        id="nombre"
        name="nombre"
        required
      />

    </div>


    <div>

      <label htmlFor="email">
        Correo electrónico
      </label>

      <input
        type="email"
        id="email"
        name="email"
        required
      />

    </div>


    <div>

      <label htmlFor="mensaje">
        Mensaje
      </label>

      <textarea
        id="mensaje"
        name="mensaje"
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