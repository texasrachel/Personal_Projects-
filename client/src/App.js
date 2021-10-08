import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import Layout from './components/Layout/Layout';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

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
      <h1>Project Shopping Planner</h1>
      <p>this is the app page</p>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route  path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
