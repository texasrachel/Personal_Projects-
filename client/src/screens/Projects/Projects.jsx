import React from 'react'

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      {props.projects.map(project => (
        <p key={project.id}>{project.name}</p>
      ))}
    </div>
  )
}

export default Projects
