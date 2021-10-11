import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {


  return (
    <div className='sidebar'>
      <p>Sidebar</p>
      <ul>
        <li>
      <Link exact to="/">
        Home
      </Link>
        </li>
        <li>
      <Link to="/projects">Projects</Link>
        </li>
        <li>
      <Link to="/items">Items</Link>
        </li>
        <li>
      <Link to="/about">About</Link>
      </li>
      </ul>
    </div>
  )
}

export default Sidebar
