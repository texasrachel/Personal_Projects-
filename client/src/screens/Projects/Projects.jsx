import React from "react";
import { Link } from "react-router-dom";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects(props) {
  const { projects } = props;
  console.log(projects);

  return (
    <div className="temp-box">
      <h1> -Projects- </h1>
      <div className="project-map">
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <ProjectCard
                name={project.name}
                img_url={project.img_url}
                description={project.description}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <p>
        <Link to="/projects/new">New Project</Link>
      </p>
      <Link to="/items/new">New Item</Link>
    </div>
  );
}

export default Projects;
