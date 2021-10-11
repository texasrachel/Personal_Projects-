import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = (props) => {
  return (
    <>
    <div className="nav">
        <p>Layout</p>
        {props.currentUser ? (
          <div className="welcome">
            <p>Welcome {props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login/Register</NavLink>
        )}
        <hr />
        {props.currentUser && (
          <div className="pages">
            <p>
              <NavLink to="/projects">Projects</NavLink>
            </p>
            <p>
              <NavLink to="/items">Items</NavLink>
            </p>
          </div>
        )}
        </div>
      <div className='content'>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
