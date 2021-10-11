import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
// import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <div className="nav">
        {props.currentUser ? (
          <div className="welcome">
            <NavLink to="/">
            <p>Welcome {props.currentUser.username}</p></NavLink>
            <button
              className='glass-button'
              onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="layout-nav">
            <ul>
              <NavLink to="/login">
                <li>Login</li>
              </NavLink>
              <br />
              <NavLink to="/register">
                <li>Register</li>
              </NavLink>
            </ul>
          </div>
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
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
