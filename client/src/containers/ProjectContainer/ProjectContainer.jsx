import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { getAllItems, deleteItem, createItem, editItem } from '../../services/items'
import { getAllProjects } from '../../services/projects'

import Projects from '../../screens/Projects/Projects';
// import ProjectCreate from '../../screens/ProjectCreate/ProjectCreate';
// import ProjectDetail from '../../screens/ProjectDetail/ProjectDetail';
// import ProjectEdit from '../../screens/ProjectEdit/ProjectEdit';


function ProjectContainer() {
  const [projects, setProjects] = useState([])
  // const history = useHistory();

  useEffect(() => {
    const getProjects = async () => {
      const projectList = await getAllProjects();
      console.log(projectList)
      setProjects(projectList);
    };
    getProjects();
  }, []);

  return (
  <Switch>
    <Route path='/projects'>
      <Projects projects={projects} />
    </Route>
  </Switch>
  )
}
export default ProjectContainer