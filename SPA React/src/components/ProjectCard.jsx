 function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        className="project-image"
        src={project.image}
        alt={project.name}
      />

      <div className="project-info">
        <h2>{project.title}</h2>

        <p>
          <strong>Name:</strong> {project.name}
        </p>

        <p>
          <strong>Description:</strong> {project.description}
        </p>

        <p>
          <strong>Category:</strong> {project.category}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;