import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects && projects.map((project, index) =>
        <ProjectSummary key={index} project={project} />
      )}
    </div>
  );
}

export default ProjectList;
