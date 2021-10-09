import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { putProject } from '../../services/projects'
import "./ProjectEdit.css";

function ProjectEdit(props) {
  const [project, setProject] = useState({
    name: "",
    img_url: "",
    description: ""
  });
  const { id } = useParams();
  const { name, img_url, description } = project;
  // const { updateProject } = props;
  console.log(props.projects)
  console.log(project)
  
  const [isUpdated, setUpdate] = useState(false)
  
  useEffect(() => {
    const fillProject = () => {
      const oneProject = props.projects.find((project) => project.id === Number(id))
      console.log(project.id)
      // const { name, img_url, description } = oneProject;
      setProject({
        name: oneProject.name,
        img_url: oneProject.img_url,
        description: oneProject.description
      });
    };
    if (props.projects.length) {
      fillProject();
    }
  }, [props.projects, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await putProject(id, project)
    setUpdate(update)
  }
  
  if (isUpdated) {
    return <Redirect to={`/projects/${project._id}`} />
  }

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Edit Project</h3>
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
          <br />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default ProjectEdit;
