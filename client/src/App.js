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
import { signinUser, registerUser, verifyUser, removeToken } from './services/auth'

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
        <Route path='/register'>
          <signin handleSignUp={handleSignUp} />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
