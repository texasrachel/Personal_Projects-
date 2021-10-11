import { useState } from 'react'
import { useHistory } from 'react-router-dom';

import './ProjectCreate.css'
import Layout from '../../components/Layout/Layout'

function ProjectCreate(props) {
  const history = useHistory();

  const [project, setProject] = useState({
    name: "",
    img_url: "",
    description: "",
    category: "",
    instructions_link: "",
    made_for: "",
    notes: "",
    // user_id: "",
    // item_id: "",
  });

  const {
    name,
    img_url,
    description,
    category,
    instructions_link,
    made_for,
    notes,
    // user_id,
    // item_id,
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
    <Layout>
    <div className='temp-box'>
      <form onSubmit={(e)=> {
      e.preventDefault()
          createProject(project);
          history.push('/projects')
    }}>
          <h3>Create Project</h3>
          <p className="project-form-name">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="project-form-image">
            <label>
              Image Url:
              <input
                type="text"
                name="img_url"
                value={img_url}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="project-form-description">
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="project-form-category">
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="project-form-instructions-link">
            <label>
              Instructions Link:
              <input
                type="text"
                name="instructions_link"
                value={instructions_link}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="project-form-made-for">
            <label>
              For:
              <input
                type="text"
                name="made_for"
                value={made_for}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="project-form-notes">
            <label>
              Notes:
              <input
                type="text"
                name="notes"
                value={notes}
                onChange={handleChange}
              />
            </label>
          </p>
      <br/>
      <button>Submit</button>
    </form>
    </div>
    </Layout>
  )
}

export default ProjectCreate
