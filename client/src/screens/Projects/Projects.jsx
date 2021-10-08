import React from "react";
import { Link } from "react-router-dom";

import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Layout from "../../components/Layout/Layout";

function Projects(props) {
  const { projects } = props;
  console.log(projects)
  
  return (
    <Layout>
      <div className="tempbox">
        <h1> -Projects - </h1>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <p>{project.name}</p>
            <Link to={`/projects/%{project.id}`}>
              <ProjectCard
                title={project.name}
                // image={project.img_url}
                // description={project.description}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/projects/new">New Project</Link>
      <Link to="/items/new">New Item</Link>
    </Layout>
  );
}

export default Projects;
