import './ProjectCard.module.css'

function ProjectCard({

  title,

  description,

  technologies,

  buttonText,

  buttonLink,

  image,

  alt

}) {

  return (

    <article
      className="project-card"
    >

      <img
        src={image}
        alt={alt}
      />


      <div
        className="project-content"
      >

        <h3>

          {title}

        </h3>


        <p
          className="project-description"
        >

          {description}

        </p>



        <p
          className="technologies"
        >

          <strong>

            Tecnologías:

          </strong>

          {' '}

          {technologies}

        </p>



        <a
          href={buttonLink}
          className="project-button"

          target="_blank"

          rel="noopener noreferrer"
        >

          {buttonText}

        </a>

      </div>

    </article>

  )

}

export default ProjectCard