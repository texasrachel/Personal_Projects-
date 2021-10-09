import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { putProject } from "../../services/projects";
import "./ProjectEdit.css";

function ProjectEdit(props) {
  const [project, setProject] = useState({
    name: "",
    img_url: "",
    description: "",
    category: "",
    instructions_link: "",
    made_for: "",
    notes: "",
    user_id: "",
    item_id: "",
  });
  const { id } = useParams();
  const {
    name,
    img_url,
    description,
    category,
    instructions_link,
    made_for,
    notes,
    user_id,
    item_id,
  } = project;
  // const { updateProject } = props;
  // console.log(props.projects);
  // console.log(project);

  const [isUpdated, setUpdate] = useState(false);

  useEffect(() => {
    const fillProject = () => {
      const oneProject = props.projects.find(
        (project) => project.id === Number(id)
      );
      // console.log(project.id)
      // const { name, img_url, description } = oneProject;
      setProject({
        name: oneProject.name,
        img_url: oneProject.img_url,
        description: oneProject.description,
        category: oneProject.category,
        instructions_link: oneProject.instructions_link,
        made_for: oneProject.made_for,
        notes: oneProject.v,
        user_id: oneProject.user_id,
        item_id: oneProject.item_id,
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
    const update = await putProject(id, project);
    setUpdate(update);
  };

  if (isUpdated) {
    return <Redirect to={`/projects/${id}`} />;
  }

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Edit Project</h3>
          <p className="form-name">
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
          <p className="form-image">
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
          <p className="form-description">
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
          <p className="form-category">
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
          <p className="form-instructions-link">
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
          <p className="form-made-for">
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
          <p className="form-notes">
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

          <br />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default ProjectEdit;
