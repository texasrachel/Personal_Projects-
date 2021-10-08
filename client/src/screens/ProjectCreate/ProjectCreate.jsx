import { useState } from 'react'
import './ProjectCreate.css'

function ProjectCreate(props) {
  const [formData, setFormData] = useState({
    name:''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='tempbox'>
      <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleProjectCreate(formData);
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
      <br/>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default ProjectCreate
