import { useState } from 'react'

import './ProjectCreate.css'
import Layout from '../../components/Layout/Layout'

function ProjectCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: ''
  })

  // const { name, description, category } = formData
  const { createProject } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Layout>
    <div className='tempbox'>
      <form onSubmit={(e)=> {
      e.preventDefault()
      createProject(formData);
    }}>
      <h3>Create Project</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
          </label>
          <label>
        Description:
        <input
          type='text'
          name='name'
          value={formData.description}
          onChange={handleChange}
        />
          </label>
          <label>
          Category:
        <input
          type='text'
          name='category'
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>Submit</button>
    </form>
    </div>
    </Layout>
  )
}

export default ProjectCreate
