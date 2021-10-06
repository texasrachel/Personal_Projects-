import './App.css';
import {  useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

// import Home from './screens/Home/Home'
// import ItemCreate from './screens/ItemCreate/ItemCreate'
// import ItemDetail from './screens/ItemDetail/ItemDetail'
// import ItemEdit from './screens/ItemEdit/ItemEdit'
// import Items from './screens/Items/Items'
// import SignIn from './screens/SignIn/SignIn'
// import SignOut from './screens/SignOut/SignOut'
// import SignUp from './screens/SignUp/SignUp'
import Projects from './screens/Projects/Projects'
import ProjectEdit from './screens/ProjectEdit/ProjectEdit'
import ProjectCreate from './screens/ProjectCreate/ProjectCreate'
import ProjectDetail from './screens/ProjectDetail/ProjectDetail'

function Main() {
  const [projects, setProjects] = useState([])
  const [items, setItems] = useState([])
  const history = useHistory();


  useEffect(() => {
    const getProjects = async () => {
      const projectList = await getAllProjects();
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
    history.push('/projects');
  };

  const handleProjectDelete = async (id) => {
    await deleteProject(id);
    setProjects((prevState) => prevState.filter((projectItemDetail) => projectItemDetail.id !== id));
  };

  const handleProjectUpdate = async (id, projectData) => {
    const updatedProject = await putProject(id, projectData);
    setProjects((prevState) =>
      prevState.map((project) => {
        return project.id === Number(id) ? updatedProject : project;
      })
    );
    history.push('/projects');
  };

  return (
    <div className="App">
      <h1>Project Shopping Planner</h1>
      <Switch>
        <Route path='/'
          // component={Main}
        />
        <Route path='/projects'>
          <Projects projects={projects} />
        </Route>
        <Route path='/projects/:id'>
          <Projects projects={projects} />
        </Route>
        <Route path='/projects/:id/edit'>
          <ProjectEdit projects={projects} />
        </Route>
        <Route path='/projects/new'>
          <ProjectCreate handleProjectCreate={handleProjectCreate} />
        </Route>
      </Switch>

      <div>
        <form>
          <>
            <label htmlFor='username'>Username:
              <input
                name='username'
                value={formData.username}
                onChange={handleChange}
              />
            </label>
          </>
          <>
            <label htmlFor='password'>Password:
              <input
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </>
          <>
            <button>Submit</button>
          </>
        </form>
      </div>
    </div>
  );
}

export default Main;
