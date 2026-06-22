
import emailjs from "@emailjs/browser";
import Hero from "../Hero/Hero";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./MainContent.css";

function MainContent() {

  const enviarFormulario = async (e) => {

    e.preventDefault();
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

    <main
      id="main-content"
      tabIndex="-1"
    >

      <Hero />

      {/* TODO TU CONTENIDO ACTUAL */}

      <section id="contacto">

        <h2>
          Contacto
        </h2>

        <p>
          Si deseas colaborar conmigo o
          conocer más sobre mis proyectos,
          puedes enviarme un mensaje.
        </p>

        <form
          noValidate
          onSubmit={enviarFormulario}
        >

          <div>

            <label htmlFor="nombre">
              Nombre
            </label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
            />

          </div>

          <div>

            <label htmlFor="email">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />

          </div>

          <div>

            <label htmlFor="mensaje">
              Mensaje
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="6"
              required
            />

          </div>

          <button type="submit">

            Enviar mensaje

          </button>

        </form>

      </section>

    </main>
  );
}

export default MainContent;

