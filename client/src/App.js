import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import Layout from './components/Layout/Layout';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import About from './components/About/About'

import ItemContainer from './containers/ItemsContainer/ItemContainer'
import ProjectContainer from './containers/ProjectContainer/ProjectContainer';

const App = () => {
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
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route  path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/items'>
            <ItemContainer />
          </Route>
          <Route path='/'>
            <ProjectContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
