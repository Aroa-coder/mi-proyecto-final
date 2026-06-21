import './ProjectCard.css'

function ProjectCard({
  title,
  description,
  image,
  alt
}) {
  return (

    <article className="project-card">

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <img
        src={image}
        alt={alt}
        loading="lazy"
      />

      <a
        href="/"
        className="project-button"
      >
        Ver más
      </a>

    </article>

  )
}

export default ProjectCard