import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { updateProject } from "../../services/projects";
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
    // user_id: "",
    item_id: ""
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
    // user_id,
    // item_id,
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
      setProject({
        name: oneProject.name,
        img_url: oneProject.img_url,
        description: oneProject.description,
        category: oneProject.category,
        instructions_link: oneProject.instructions_link,
        made_for: oneProject.made_for,
        notes: oneProject.notes,
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
    const update = await updateProject(id, project);
    setUpdate(update);
  };

  if (isUpdated) {
    return <Redirect to={`/projects/${id}`} />;
  }

  return (
    <div className="project-form-container glass">
      <form onSubmit={handleSubmit}>
        <div className="page-title">Edit {project.name}</div>

        <div className="project-form-info">
          <label>
            Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />

          <label>
            Image Link:
            </label>
            <input
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />

          <label>
            Description:
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />

          <label>
            Category:
            </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
            />

          <label>
            Instructions Link:
            </label>
            <input
              type="text"
              name="instructions_link"
              value={instructions_link}
              onChange={handleChange}
            />

          <label>
            For:
            </label>
            <input
              type="text"
              name="made_for"
              value={made_for}
              onChange={handleChange}
            />

          <label>
            Notes:
            </label>
            <input
              type="text"
              name="notes"
              value={notes}
              onChange={handleChange}
            />
        </div>
        
        <br />
        <button className="glass-button">Submit</button>
        <button
          className="glass-button"
          onClick={() => props.handleProjectDelete(project.id)}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default ProjectEdit;
