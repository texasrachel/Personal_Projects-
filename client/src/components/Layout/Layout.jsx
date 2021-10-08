import { NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <header>
        <h1>Layout</h1>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login/Register</NavLink>
        )}
        <hr />
        {props.currentUser && (
          <div>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/items">Items</NavLink>
          </div>
        )}
      </header>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
