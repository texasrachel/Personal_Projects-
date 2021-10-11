import { useState } from 'react'

// import './ProjectCreate.css'

function ProjectCreate(props) {

  const [project, setProject] = useState({
    name: "",
    img_url: "",
    description: "",
    category: "",
    instructions_link: "",
    made_for: "",
    notes: "",
  });

  const {
    name,
    img_url,
    description,
    category,
    instructions_link,
    made_for,
    notes,
  } = project;

  const { createProject } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setProject((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='project-create-container '>
      <form onSubmit={(e)=> {
      e.preventDefault()
      createProject(project);
    }}>
        <div className='page-title'>Create New Project</div>
        
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>

            <label>
              Image Url:
              <input
                type="text"
                name="img_url"
                value={img_url}
                onChange={handleChange}
              />
            </label>

            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </label>

            <label>
              Category:
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
              />
            </label>

            <label>
              Instructions Link:
              <input
                type="text"
                name="instructions_link"
                value={instructions_link}
                onChange={handleChange}
              />
            </label>

            <label>
              For:
              <input
                type="text"
                name="made_for"
                value={made_for}
                onChange={handleChange}
              />
            </label>

            <label>
              Notes:
              <input
                type="text"
                name="notes"
                value={notes}
                onChange={handleChange}
              />
            </label>

      <br/>
      <button className='glass-button'>Submit</button>
    </form>
    </div>
  )
}

export default ProjectCreate
