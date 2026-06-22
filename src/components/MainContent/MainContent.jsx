import emailjs from "@emailjs/browser";
import Hero from "../Hero/Hero";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./MainContent.module.css";

function MainContent() {
  const enviarFormulario = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_pib4zxs",
        "template_ky3566r",
        e.target,
        "uA83WYmKq9aLIBZT1"
      );

      alert("✅ Mensaje enviado correctamente");
      e.target.reset();
    } catch (error) {
      console.error("Error EmailJS:", error);
      alert("❌ Error al enviar el mensaje");
    }
  };

  return (
    <main id="main-content" className={styles.main} tabIndex="-1">
      <Hero />

      <section id="sobre-mi" className={styles.sobreMi}>
        <h2>Sobre mí</h2>

        <article>
          <p>
            Actualmente me estoy formando en desarrollo de aplicaciones web y
            construyendo proyectos orientados a accesibilidad, experiencia de
            usuario y buenas prácticas de desarrollo Frontend.
          </p>

          <p>
            Me interesa especialmente crear interfaces claras, responsivas y
            fáciles de utilizar, aplicando una organización del código que
            facilite el mantenimiento y el crecimiento futuro de cada proyecto.
          </p>

          <p>
            Disfruto aprendiendo nuevas tecnologías y transformando ideas en
            experiencias digitales funcionales, cuidando tanto la parte visual
            como la calidad técnica de cada desarrollo.
          </p>
        </article>

        <aside>
          <h3>Valores profesionales</h3>

          <ul>
            <li>Accesibilidad</li>
            <li>Diseño responsive</li>
            <li>Código mantenible</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </aside>
      </section>

      <section id="proyectos" className={styles.proyectos}>
        <h2>Proyectos destacados</h2>

        <ProjectCard
          title="Landing Page Multimedia"
          description="Sitio web desarrollado con HTML y CSS orientado a presentar información personal, diseño responsive y organización visual mediante estructura semántica."
          technologies="HTML · CSS · Multimedia"
          buttonText="Ver proyecto"
          buttonLink="https://web-audio-video.netlify.app"
          image="/images/project.png"
          alt="Captura de una landing page con vídeo y sonido"
        />

        <ProjectCard
          title="Calculadora de IVA"
          description="Aplicación desarrollada como práctica académica orientada al cálculo automático del importe total mediante interacción del usuario y actualización dinámica."
          technologies="HTML · CSS · JavaScript"
          buttonText="Ver proyecto"
          buttonLink="https://calculadora-ivajavascript.netlify.app"
          image="/images/project2.png"
          alt="Aplicación para calcular importe total aplicando IVA"
        />

        <ProjectCard
          title="Landing con Asistente Virtual"
          description="Landing page diseñada para mejorar la experiencia del usuario mediante un asistente virtual orientado a resolver dudas y recomendar cursos."
          technologies="HTML · CSS · JavaScript"
          buttonText="Ver proyecto"
          buttonLink="https://landing-page-cursos.netlify.app"
          image="/images/project3.png"
          alt="Landing Page con asistente virtual integrado"
        />
      </section>

      <section id="habilidades" className={styles.habilidades}>
        <h2>Habilidades</h2>

        <article>
          <h3>Frontend</h3>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </article>

        <article>
          <h3>Diseño</h3>

          <ul>
            <li>UX/UI</li>
            <li>Responsive Design</li>
            <li>Accesibilidad Web</li>
          </ul>
        </article>

        <article>
          <h3>Herramientas</h3>

          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>Node.js</li>
          </ul>
        </article>
      </section>

      <section id="experiencia" className={styles.experiencia}>
        <h2>Formación y experiencia</h2>

        <article>
          <h3>Desarrollo de Aplicaciones Web DAW</h3>

          <p>
            Formación orientada al desarrollo de aplicaciones web, programación,
            bases de datos e interfaces accesibles.
          </p>
        </article>

        <article>
          <h3>Desarrollo Frontend</h3>

          <p>
            Aprendizaje práctico aplicando HTML, CSS, JavaScript y React
            siguiendo estándares modernos.
          </p>
        </article>

        <article>
          <h3>Proyectos personales</h3>

          <p>
            Desarrollo progresivo de proyectos orientados a mejorar experiencia
            de usuario y organización del código.
          </p>
        </article>
      </section>

      <section id="contacto" className={styles.contacto}>
        <h2>Contacto</h2>

        <p>
          Si deseas colaborar conmigo o conocer más sobre mis proyectos, puedes
          enviarme un mensaje.
        </p>

        <form noValidate onSubmit={enviarFormulario}>
          <div>
            <label htmlFor="nombre">Nombre</label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email">Correo electrónico</label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="6"
              required
              placeholder="Escribe tu mensaje..."
            />
          </div>

          <button type="submit">Enviar mensaje</button>
        </form>
      </section>
    </main>
  );
}

export default MainContent;