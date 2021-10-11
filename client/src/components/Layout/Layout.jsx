import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Footer from '../Footer/Footer'
const Layout = (props) => {
  return (
    <div className="grid-layout">
      <Sidebar />
        <header className="header">
          {props.currentUser ? (
            <div className="welcome">
              <p>Welcome {props.currentUser.username}</p>
              <button onClick={props.handleLogout}>Logout</button>
            </div>
          ) : (
            <NavLink to="/login" className="login">
              Login/Register
            </NavLink>
          )}
        </header>
        <hr />
        {props.currentUser && (
          <div className="list">
            <p>
              <NavLink to="/projects">Projects</NavLink>
            </p>
            <p>
              <NavLink to="/items">Items</NavLink>
            </p>
          </div>
        )}
      <div className="content-props">{props.children}</div>
    </div>
  );
};

export default Layout;
