import { NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="temp-box">
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
          <div className="temp-box">
            <p>
              <NavLink to="/projects">Projects Nav</NavLink>
            </p>
            <p>
              <NavLink to="/items">Items Nav</NavLink>
            </p>
          </div>
        )}
      </header>
      <div>
        <p>Everything above is Header</p>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
