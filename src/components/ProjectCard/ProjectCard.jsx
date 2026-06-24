import styles from "./ProjectCard.module.css";

function ProjectCard({
  title,
  description,
  technologies,
  buttonText,
  buttonLink,
  image,
  alt,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
  src={image}
  alt={alt}
  width="500"
  height="300"
  loading="lazy"
  decoding="async"
/>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <p className={styles.technologies}>
          <strong>Tecnologías:</strong> {technologies}
        </p>

        <a
          href={buttonLink}
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;