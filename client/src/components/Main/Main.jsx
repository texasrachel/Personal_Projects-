import "./Main.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  getAllProjects,
  postProject,
  deleteProject,
  putProject,
} from "../../services/projects";
import { getAllItems } from "../../services/items";

import Items from "../../screens/Items/Items";
import Projects from "../../screens/Projects/Projects";
import ProjectEdit from "../../screens/ProjectEdit/ProjectEdit";
import ProjectCreate from '../../screens/ProjectCreate/ProjectCreate'
import ProjectDetail from "../../screens/ProjectDetail/ProjectDetail";

function Main() {
  const [projects, setProjects] = useState([]);
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getProjects = async () => {
      const projectList = await getAllProjects();
      console.log(projectList)
      setProjects(projectList);
    };
    getProjects();
  }, []);

  useEffect(() => {
    const getItems = async () => {
      const itemsList = await getAllItems();
      setItems(itemsList);
    };
    getItems();
  }, []);

  const handleProjectCreate = async (projectData) => {
    const newProject = await postProject(projectData);
    setProjects((prevState) => [...prevState, newProject]);
    history.push("/projects");
  };

  const handleProjectDelete = async (id) => {
    await deleteProject(id);
    setProjects((prevState) =>
      prevState.filter((projectItemDetail) => projectItemDetail.id !== id)
    );
  };

  const handleProjectUpdate = async (id, projectData) => {
    const updatedProject = await putProject(id, projectData);
    setProjects((prevState) =>
      prevState.map((project) => {
        return project.id === Number(id) ? updatedProject : project;
      })
    );
    history.push("/projects");
  };

  return (
    <div>
      <h1>Main Area</h1>
      <Switch>
        <Route path="/projects/:id">
          <ProjectDetail items={items} />
        </Route>
        <Route path="/projects/:id/edit">
          <ProjectEdit
            projects={projects}
            handleProjectUpdate={handleProjectUpdate}
          />
        </Route>
        <Route path="/projects/new">
          <ProjectCreate handleProjectCreate={handleProjectCreate} />
        </Route>
        <Route path="/items">
          <Items items={items} />
        </Route>
        <Route path="/projects">
          <Projects
            projects={projects}
            handleProjectDelete={handleProjectDelete}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
