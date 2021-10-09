import React from "react";
import { Link } from "react-router-dom";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import Layout from "../../components/Layout/Layout";

function Projects(props) {
  const { projects } = props;
  console.log(projects)
  
  return (
    <div>
      <div className="tempbox">
        <h1> -Projects - </h1>
        {projects.map((project) => (
          <p key={project.id}>{project.name}</p>
          // <>
          //   <Link to={`/projects/%{project.id}`}>
          //     <ProjectCard
          //       title={project.name}
          //       image={project.img_url}
          //       description={project.description}
          //     />
          //   </Link>
          //   </>
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
