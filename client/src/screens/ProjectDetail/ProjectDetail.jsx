import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneProject, addItemToProject } from '../../services/projects';
import './ProjectDetail.css'
import Layout from '../../components/Layout/Layout';

function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const { id } = useParams();
  // const { items } = props;
  const { allProjects, removeProject } = props

  useEffect(() => {

    const getProject = async () => {
      const projectData = await getOneProject(id);
      setProject(projectData);
    };
    getProject();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedItem(value);
  };

  // Our handle submit for adding the item to our project
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Project = await addItemToProject(selectedItem, id);
    setProject(Project);
  };

  return (
    <div className='tempbox'>
      <Layout>
        <h2>ProjectDetail</h2>
      <div>
        {
          project &&
          <div>
            <h3>{project.name}</h3>
            <img src={project.img_url} alt={project.name} />
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}/edit`}> <button>Update</button>
            </Link>
            <button onClick={() => removeProject(project.id)} >
              Delete Project
            </button>
            </div>
        }
      </div>
      </Layout>
</div>
  );
}

export default ProjectDetail