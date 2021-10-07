import './App.css';
import {  useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { signinUser, signupUser, verifyUser, removeToken } from './services/auth'

import Layout from './components/Layout/Layout';
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Home from './screens/Home/Home';

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

  const handleSignIn = async (signinData) => {
    const userData = await signinUser(signinData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (signupData) => {
    const userData = await signupUser(signupData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className="App">
      <h1>Project Shopping Planner</h1>
      <Layout currentUser={currentUser} handleLogout={handleSignOut}>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/signin'>
          <SignIn handleSignIn={handleSignIn} />
        </Route>
        <Route path='/signup'>
          <SignUp handleSignUp={handleSignUp} />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
