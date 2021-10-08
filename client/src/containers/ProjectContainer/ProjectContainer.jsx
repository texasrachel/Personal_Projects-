import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllItems, deleteItem, createItem, editItem } from '../../services/items'

import Projects from '../../screens/Projects/Projects';
import ProjectCreate from '../../screens/ProjectCreate/ProjectCreate';
import ProjectDetail from '../../screens/ProjectDetail/ProjectDetail';
import ProjectEdit from '../../screens/ProjectEdit/ProjectEdit';


function ProjectContainer() {
  const [allProjects, setAllProjects] = useState([])
  const history = useHistory();

  useEffect(() => {
    getItems()
  },[])

  
}
export default ProjectContainer