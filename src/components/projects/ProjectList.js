import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects && projects.map((project, index) =>
        <Link to={`/project/${project.id}`} key={index}>
          <ProjectSummary project={project} />
        </Link>
      )}
    </div>
  );
}

export default ProjectList;
