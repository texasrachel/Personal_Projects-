import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectEdit.css'

function ProjectEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { id } = useParams();
  const {updateProject, allProjects } = props

  useEffect(() => {
    const prefillFormData = () => {
      const singleProject = allProjects.find(project => {
        return project.id === Number(id)
    })
  const { name } = singleProject
      setFormData({ name });
    }
    if (props.projects.length) {
      prefillFormData();
    }
if (allProjects.length) {
      prefillFormData()
    }
  }, [allProjects, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.updateProject(id, formData);
      }}
    >
      <h3>Edit Project</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ProjectEdit