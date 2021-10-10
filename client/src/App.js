import './App.css';
import { useState, useEffect, React } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'

import LayoutComponent from './components/LayoutComponent/LayoutComponent';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'
import ItemContainer from './containers/ItemsContainer/ItemContainer'
import ProjectContainer from './containers/ProjectContainer/ProjectContainer';

import { Layout, Menu } from 'antd';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const { Header, Content, SidebarMenu } = Layout;
  const { Item } = Menu;

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
      <Layout >
        <SidebarMenu className='sidebar'>
          <div className="logo" />
          <Menu >
            <Item key="/">
              Home
            </Item>
            <Item key="/projects">
              Projects
            </Item>
            <Item key="/items">
              Items
            </Item>
          </Menu >
        </SidebarMenu >

        <Header>Header</Header>

        <Content>
          <h1>Project Shopping Planner</h1>
          <p>this is the app page</p>
          <LayoutComponent currentUser={currentUser} handleLogout={handleLogout}>
            <Switch>
              <Route path='/login'>
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path='/register'>
                <Register handleRegister={handleRegister} />
              </Route>
              <Route path='/items'>
                <ItemContainer />
              </Route>
              <Route path='/'>
                <ProjectContainer />
              </Route>
            </Switch>
            </LayoutComponent>
        </Content>
      <Footer />
    </Layout >
      </div >
  );
}

export default App;
