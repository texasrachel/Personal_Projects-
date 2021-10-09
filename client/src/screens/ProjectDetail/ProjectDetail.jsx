import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {
  getProject,
  deleteProject
  // addItemToProject
} from '../../services/projects';
import './ProjectDetail.css'
import Layout from '../../components/Layout/Layout';

function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  // const [selectedItem, setSelectedItem] = useState('');
  const { id } = useParams();
  const history = useHistory()
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
              <p>{project.category}</p>
              <p>{project.instructions_link}</p>
              <p>{project.made_for}</p>
              <p>{project.notes}</p>
              <Link to={`/projects/${project.id}/edit`}>
                  <button>Update</button>
              </Link>
              <button
                onClick={() => {
                  deleteProject(project.id)
                  history.push('/projects')
                }}
              >
            Delete
          </button>
              </div>
          }
        </div>
      </Layout>
</div>
  );
}

export default ProjectDetail