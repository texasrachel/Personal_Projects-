import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  getProject,
  deleteProject,
  addItemToProject,
} from "../../services/projects";
// import "./ProjectDetail.css";

function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const { items } = props;

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getProject(id);
      setProject(projectData);
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedItem(value);
  };

  // Our handle submit for adding the item to our project
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedItem);
    console.log(id);
    const project = await addItemToProject(id, selectedItem);
    setProject(project);
    history.push("/projects/:id");
    //{project.item display map}
  };

  return (
    <div className="project-detail">
      <div>
        {project && (
          <div className="project-list">
            <div className="page-title">
              {project.name}
            </div>

            <div className="project-info">
              <div className="project-image">
                <img src={project.img_url} alt={project.name} />
              </div>

              <div className="project-text">
                <div>
                  <div className="project-text-title">Description: </div>
                  <div className="project-text-info">{project.description}</div>
                  <div className="project-text-title">Category: </div>
                  <div className="project-text-info">{project.category}</div>
                  <div className="project-text-title"> Instructions: </div>
                  <div className="project-text-info">
                    {project.instructions_link}
                  </div>
                  <div className="project-text-title">For: </div>
                  <div className="project-text-info">{project.made_for}</div>
                  <div className="project-text-title">Notes: </div>
                  <div className="project-text-info">{project.notes}</div>
                </div>

                <div className="project-items">
                  <div className="project-text-title">Items: </div>
                  <form onSubmit={handleSubmit}>
                    <select onChange={handleChange} defaultValue="default">
                      <option disabled value="default">
                        -- Select an Item --
                      </option>
                      {items.map((item) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                    </select>
                    <button className="glass-button" type="submit">Add Item</button>
                  </form>
                  <br />
                  <div className="buttons">
                    <Link to={`/projects/${project.id}/edit`}>
                      <button className="glass-button">Edit Project</button>
                    </Link>
                    <button
                      className="glass-button"
                      onClick={() => {
                        deleteProject(project.id);
                        history.push("/projects");
                      }}
                    >
                      Delete Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
