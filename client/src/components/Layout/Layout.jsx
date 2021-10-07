import { NavLink } from "react-router-dom"

const Layout = (props) => {
  return (
    <div>
      <header>
      <h1>Layout</h1>
      {props.currentUser ? (
        <div>
          <p>{props.currentUser.username}</p>
          <button onclick={props.handleSignOut}>Sign Out</button>
        </div>
      ) : (
          <NavLink to='/signin'>SignIn/SignUp</NavLink>
      )}
      <hr />
      {props.currentUser && (
        <div>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/items'>Items</NavLink>
        </div>
      )}
      </header>
      {props.children}
    </div>
  )
}

export default Layout
