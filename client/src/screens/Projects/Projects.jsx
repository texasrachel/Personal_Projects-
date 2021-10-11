import React from "react";
import { Link } from "react-router-dom";

// import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects(props) {
  const { projects } = props;
  console.log(projects);

  return (
    <div className="project-page">
      <div className='page-title'> Projects </div>
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
      <div className='projects-new'>
      <div className='projects-text'>
        <Link to="/projects/new">New Project</Link>
      {/* </div>
      <div className='text'> */}
        <Link to="/items/new">New Item</Link>
        </div>
        </div>
    </div>
  );
}

export default Projects;
