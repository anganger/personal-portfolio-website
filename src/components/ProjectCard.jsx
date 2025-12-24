import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="tech-list">
        {project.technologies?.split(",").map((t, i) => (
          <span key={i} className="tech-pill">{t.trim()}</span>
        ))}
      </div>
      {project.link && (
        <a className="proj-link" href={project.link} target="_blank" rel="noreferrer">
          View Repo
        </a>
      )}
    </article>
  );
}
