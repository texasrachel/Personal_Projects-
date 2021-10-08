import React from 'react'
import { Link } from 'react-router-dom'

import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Layout from '../../components/Layout/Layout'


function Projects(props) {
  const { allProjects } = props

  return (
    <Layout>
      <div className='tempbox'>
      <h1>-Projects-</h1>
        {allProjects.map(project => (
          <React.Fragment key={project.id}>
            <p>{project.name}</p>
          <Link to={`/projects/%{project.id}`}>
          <ProjectCard
            title={project.name}
            image={project.img_url}
            description={project.description}
          />
          </Link>
          </React.Fragment>
        ))}
      </div>
      </Layout>
  )
}

export default Projects
