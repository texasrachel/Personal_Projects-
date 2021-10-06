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
import { verifyUser } from './services/users'
import Projects from './screens/Projects/Projects'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
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
          <Project projects={projects} />
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

export default App;
