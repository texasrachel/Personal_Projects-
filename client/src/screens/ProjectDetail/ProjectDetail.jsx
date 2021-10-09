import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getProject,
  // addItemToProject
} from '../../services/projects';
import './ProjectDetail.css'
import Layout from '../../components/Layout/Layout';

function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  // const [selectedItem, setSelectedItem] = useState('');
  const { id } = useParams();
  // const { items } = props;

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getProject(id);
      setProject(projectData);
    };
    fetchProject();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedItem(value);
  // };

  // // // Our handle submit for adding the item to our project --add addItemToProject to head--
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const project = await addItemToProject(selectedItem, id);
  //   setProject(project);
  // };

  return (
    <div className='temp-box'>
      <Layout>
        <h2>ProjectDetail</h2>
        <div>
          {
            project &&
            <div>
              <h3>{project.name}</h3>
              <img src={project.img_url} alt={project.name} />
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}/edit`}>
                  <button>Update</button>
              </Link>
              </div>
          }
        </div>
      </Layout>
</div>
  );
}

export default ProjectDetail